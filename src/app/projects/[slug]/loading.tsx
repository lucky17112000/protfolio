export default function LoadingProjectDetails() {
  return (
    <main className="portfolio-shell">
      <div className="bg-grid" aria-hidden="true" />
      <section className="section container reveal">
        <article className="card glass" style={{ minHeight: "340px" }}>
          <p className="eyebrow">Loading project details...</p>
          <h2>Please wait</h2>
        </article>
      </section>
    </main>
  );
}
