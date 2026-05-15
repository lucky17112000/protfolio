import { SpineHost }       from "@/components/SpineHost"
import { Navbar }           from "@/components/Navbar"
import { HeroSection }      from "@/components/HeroSection"
import { AboutSection }     from "@/components/AboutSection"
import { MarqueeBand }      from "@/components/Marquee"
import { StatsBanner }      from "@/components/StatsBanner"
import { SkillTree }        from "@/components/SkillTree"
import { ProjectsSection }  from "@/components/ProjectsSection"
import { ContactSection }   from "@/components/ContactSection"
import { BigFooter }        from "@/components/Footer"
import { SmoothScroll }     from "@/components/SmoothScroll"
import { MouseSpotlight }   from "@/components/MouseSpotlight"
import { BlurReveal }       from "@/components/BlurReveal"
import { AutoScroll }       from "@/components/AutoScroll"

const MARQUEE_TOP = [
  "Competitive Programmer",
  "Backend-focused",
  "Full-stack Developer",
  "Node · Postgres · Docker",
  "1200+ on Codeforces",
  "800+ on LeetCode",
]

const MARQUEE_BOT = [
  "C++",
  "TypeScript",
  "PostgreSQL",
  "Express",
  "Next.js",
  "Entity Framework",
  "Docker",
  "Vercel",
  "REST APIs",
]

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <MouseSpotlight />
      <BlurReveal />
      <AutoScroll />
      <div className="ambient">
        <div className="haze haze-1" />
        <div className="haze haze-2" />
        <div className="haze haze-3" />
      </div>
      <div className="vignette" />
      <div className="grain" />

      <Navbar />

      <SpineHost>
        <main>
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <HeroSection />
            <AboutSection />
          </div>

          <MarqueeBand items={MARQUEE_TOP} accentIndex={3} />

          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <StatsBanner />
            <SkillTree />
          </div>

          <MarqueeBand items={MARQUEE_BOT} reverse accentIndex={4} />

          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <ProjectsSection />
            <ContactSection />
            <BigFooter />
          </div>
        </main>
      </SpineHost>
    </>
  )
}
