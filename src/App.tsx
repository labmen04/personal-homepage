import { profile } from "./profile";

function App() {
  const mailTo = profile.email ? `mailto:${profile.email}` : "";
  const hasContactLinks = Boolean(profile.email || profile.links.length);

  return (
    <main className="page-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Back to top">
          <span>{profile.displayName.zh}</span>
          <span>{profile.displayName.en}</span>
        </a>
        <div className="nav-actions">
          <span className="language-pill" aria-label="Bilingual site">
            {"\u4e2d / EN"}
          </span>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Personal Homepage</p>
          <h1 id="hero-title">
            <span>{profile.displayName.zh}</span>
            <span>{profile.displayName.en}</span>
          </h1>
          <p className="role zh">{profile.role.zh}</p>
          <p className="role en">{profile.role.en}</p>
          <div className="intro-grid">
            <p>{profile.intro.zh}</p>
            <p>{profile.intro.en}</p>
          </div>
          <div className="hero-actions" aria-label="Contact actions">
            {profile.email ? (
              <a className="primary-action" href={mailTo}>
                Say hello
              </a>
            ) : (
              <span className="primary-action muted-action">Contact coming soon</span>
            )}
            <a className="secondary-action" href="#contact">
              View links
            </a>
          </div>
        </div>

        <aside className="signature-panel" aria-label="Profile summary">
          <div>
            <span className="panel-label">Currently</span>
            <p>{profile.currently.zh}</p>
            <p>{profile.currently.en}</p>
          </div>
          <div>
            <span className="panel-label">Focus</span>
            <p>{profile.focus.zh}</p>
            <p>{profile.focus.en}</p>
          </div>
        </aside>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">{"\u4fdd\u6301\u8054\u7cfb / Get in touch"}</h2>
        </div>
        <div className="contact-links">
          {profile.email && (
            <a className="contact-card" href={mailTo}>
              <span>Email</span>
              <strong>{profile.email}</strong>
            </a>
          )}
          {profile.links.map((link) => (
            <a
              className="contact-card"
              href={link.href}
              key={link.label}
              rel="noreferrer"
              target="_blank"
            >
              <span>{link.label}</span>
              <strong>Open profile</strong>
            </a>
          ))}
          {!hasContactLinks && (
            <div className="contact-card placeholder-card">
              <span>Next</span>
              <strong>{"\u8054\u7cfb\u65b9\u5f0f\u5f85\u8865\u5145 / Contact details coming soon"}</strong>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
