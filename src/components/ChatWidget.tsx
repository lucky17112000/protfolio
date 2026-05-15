"use client"

import { useState, useRef, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

type Message = { role: "user" | "assistant"; content: string }

const INITIAL: Message = {
  role: "assistant",
  content: "Hi! 👋 I'm **Nexora**, Alamin's AI assistant. Ask me anything about him — his skills, projects, experience, or how to hire him!",
}

const QUICK = [
  "What are your skills?",
  "Show me your projects",
  "Are you available for work?",
  "How to contact you?",
]

export function ChatWidget() {
  const [open, setOpen]           = useState(false)
  const [messages, setMessages]   = useState<Message[]>([INITIAL])
  const [input, setInput]         = useState("")
  const [loading, setLoading]     = useState(false)
  const [bubble, setBubble]       = useState(true)   // auto-greeting bubble
  const bottomRef                 = useRef<HTMLDivElement>(null)
  const inputRef                  = useRef<HTMLInputElement>(null)

  // hide the greeting bubble after 6s or when chat opens
  useEffect(() => {
    const t = setTimeout(() => setBubble(false), 6000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (open) { setBubble(false); setTimeout(() => inputRef.current?.focus(), 300) }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  const send = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return
    const userMsg: Message = { role: "user", content: trimmed }
    setMessages(prev => [...prev, userMsg])
    setInput("")
    setLoading(true)
    try {
      const res  = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, {
        role: "assistant",
        content: data.reply ?? data.error ?? "Sorry, couldn't respond right now.",
      }])
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Connection error — please try again." }])
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); send(input) }

  return (
    <div className="cw-wrap">

      {/* ── Auto greeting bubble ── */}
      {bubble && !open && (
        <div className="cw-greet">
          <img src="/nexora.svg" alt="Nexora" className="cw-greet-avatar" />
          <span>Hi! I'm <strong>Nexora</strong>, Alamin's assistant ✨</span>
          <button className="cw-greet-x" onClick={() => setBubble(false)}>✕</button>
        </div>
      )}

      {/* ── Chat panel ── */}
      {open && (
        <div className="cw-panel">

          {/* Header */}
          <div className="cw-header">
            <div className="cw-header-left">
              <div className="cw-av">
                <img src="/nexora.svg" alt="Nexora" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
              </div>
              <div>
                <div className="cw-title">
                  <span className="cw-online" />
                  Nexora
                </div>
                <div className="cw-subtitle">Alamin's AI assistant · always online</div>
              </div>
            </div>
            <button className="cw-close" onClick={() => setOpen(false)}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="cw-msgs" data-lenis-prevent>
            {messages.map((msg, i) => (
              <div key={i} className={`cw-row ${msg.role}`}>
                {msg.role === "assistant" && <div className="cw-bot-av"><img src="/nexora.svg" alt="Nexora" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} /></div>}
                <div className={`cw-bubble ${msg.role}`}>
                  {msg.role === "user"
                    ? msg.content
                    : <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
                  }
                </div>
              </div>
            ))}

            {loading && (
              <div className="cw-row assistant">
                <div className="cw-bot-av"><img src="/nexora.svg" alt="Nexora" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} /></div>
                <div className="cw-bubble assistant">
                  <div className="cw-dots"><span/><span/><span/></div>
                </div>
              </div>
            )}

            {messages.length === 1 && !loading && (
              <div className="cw-quick">
                <p className="cw-quick-label">Quick questions</p>
                {QUICK.map(q => (
                  <button key={q} className="cw-quick-btn" onClick={() => send(q)}>{q}</button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form className="cw-form" onSubmit={onSubmit}>
            <input
              ref={inputRef}
              className="cw-input"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your question…"
              disabled={loading}
              autoComplete="off"
            />
            <button className="cw-send" type="submit" disabled={loading || !input.trim()}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/>
              </svg>
            </button>
          </form>

        </div>
      )}

      {/* ── FAB ── */}
      <button
        id="nexora-fab"
        className={"cw-fab " + (open ? "is-open" : "")}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close chat" : "Ask Nexora"}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        ) : (
          <>
            <span className="cw-badge" />
            <img src="/nexora.svg" alt="Nexora" className="cw-fab-img" />
          </>
        )}
      </button>

    </div>
  )
}
