import './App.css';

function App() {
  const handleDownloadPDF = async () => {
    const element = document.getElementById('resume-content');
    const html2pdf = (await import('html2pdf.js')).default;

    const opt = {
      margin: [0.3, 0.4, 0.3, 0.4],
      filename: 'Joshua_Twycross_Senior_FullStack_Engineer.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait', compress: true },
      pagebreak: { mode: 'css', before: '.references' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="app-container">
      <div className="print-actions">
        <button onClick={handleDownloadPDF} className="btn btn-download">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Resume
        </button>
      </div>

      <div className="resume" id="resume-content">
        {/* Header */}
        <header className="header">
          <h1>Joshua Twycross</h1>
          <p className="headline">Senior Full-Stack Engineer</p>
          <div className="contact">
            <a href="mailto:joshuatwycross@gmail.com">joshuatwycross@gmail.com</a>
            <span className="separator">•</span>
            <span>+27 61 439 1349</span>
            <span className="separator">•</span>
            <span>Cape Town, South Africa</span>
            <span className="separator">•</span>
            <a href="https://linkedin.com/in/joshuatwycross" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </header>

        {/* Two-column layout */}
        <div className="resume-content">
          {/* Sidebar */}
          <aside className="sidebar">
            {/* Skills */}
            <section className="skills">
              <h2>Skills</h2>
              <div className="skill-item">
                <h4>Languages</h4>
                <p>TypeScript, JavaScript, Python, C#, PHP, SQL</p>
              </div>
              <div className="skill-item">
                <h4>Frontend</h4>
                <p>React 18+, Next.js 14, TanStack Query, Tailwind CSS, React Native</p>
              </div>
              <div className="skill-item">
                <h4>Backend</h4>
                <p>Node.js, Express, Fastify, REST/GraphQL APIs, AWS Lambda</p>
              </div>
              <div className="skill-item">
                <h4>Databases</h4>
                <p>PostgreSQL, Prisma ORM, Redis, SSRS</p>
              </div>
              <div className="skill-item">
                <h4>Cloud/DevOps</h4>
                <p>AWS, Azure, Vercel, CI/CD, Docker, Sentry</p>
              </div>
              <div className="skill-item">
                <h4>Architecture</h4>
                <p>Microservices, Message Queuing, WebSockets, Event-Driven</p>
              </div>
              <div className="skill-item">
                <h4>CMS/E-commerce</h4>
                <p>Payload CMS, Shopify, Headless CMS</p>
              </div>
              <div className="skill-item">
                <h4>Tools</h4>
                <p>Git, GitHub, Monorepo, Cursor AI, Agile</p>
              </div>
            </section>

            {/* Education */}
            <section className="education">
              <h2>Education</h2>
              <div className="education-item">
                <h3>Diploma in IT Software Development</h3>
                <p>IIE's Varsity College, Cape Town</p>
              </div>
            </section>

            {/* Certifications */}
            <section className="certifications">
              <h2>Certifications</h2>
              <div className="cert-item">
                <h4>Microsoft 365 Certified: Fundamentals</h4>
                <p>Microsoft, 2023</p>
              </div>
            </section>

            {/* References */}
            <section className="references">
              <h2>References</h2>
              <p className="references-note">Available upon request: Rudi Killian (Senior Lecturer), Marcel Du Ry (CEO, Modern Day Strategy), Allen Yaxley (Business Engineering), Brunhilde Giles (Manager)</p>
            </section>
          </aside>

          {/* Main Content */}
          <main className="main-content">
            {/* Summary */}
            <section className="summary">
              <h2>Professional Summary</h2>
              <p>
                Senior Full-Stack Engineer with 5+ years building scalable TypeScript/React/Node.js applications.
                Proven track record architecting systems from database design through CI/CD and production monitoring.
                Specialized in high-impact technical decisions, AI-assisted development, and shipping fast without
                sacrificing quality.
              </p>
              <p>
                <strong>Core strengths:</strong> System Architecture • API Design • Performance
                Optimization • DevOps & CI/CD • Technical Leadership
              </p>
            </section>

            {/* Experience */}
            <section className="experience">
              <h2>Professional Experience</h2>

              <div className="job">
                <div className="job-header">
                  <div>
                    <h3>Senior Full-Stack Engineer</h3>
                    <p className="company">Modern Day Strategy</p>
                  </div>
                  <div className="job-meta">
                    <p className="period">Feb 2024 - Sept 2024</p>
                    <p className="location">Cape Town, SA</p>
                  </div>
                </div>
                <ul className="achievements">
                  <li>Delivered 5 production websites using Next.js 14, Payload CMS, and TypeScript with end-to-end ownership from requirements to deployment</li>
                  <li>Designed headless CMS architecture reducing maintenance overhead by 60% vs WordPress</li>
                  <li>Established CI/CD pipelines (Vercel, GitHub Actions) reducing deployment from 2hrs to 8min, achieving Lighthouse scores 95+ and sub-2s page loads</li>
                </ul>
              </div>

              <div className="job">
                <div className="job-header">
                  <div>
                    <h3>Full-Stack Engineer</h3>
                    <p className="company">PRIXGIG / Modern Influence Society</p>
                  </div>
                  <div className="job-meta">
                    <p className="period">Jan 2020 - Feb 2024</p>
                    <p className="location">Remote</p>
                  </div>
                </div>
                <ul className="achievements">
                  <li>Owned Influence Suite KPI dashboard (Next.js, Prisma, PostgreSQL) serving 50+ users with multi-tenant architecture</li>
                  <li>Built RESTful APIs with Node.js handling authentication, RBAC, and background job processing for social platform data aggregation</li>
                  <li>Developed serverless newsletter system (AWS Lambda) handling 10K+ monthly signups at 99.9% uptime</li>
                  <li>Optimized queries and implemented Redis caching reducing API response times 800ms → &lt;150ms (70% improvement)</li>
                </ul>
              </div>

              <div className="job">
                <div className="job-header">
                  <div>
                    <h3>Software Engineer</h3>
                    <p className="company">Business Engineering (Pty) Ltd</p>
                  </div>
                  <div className="job-meta">
                    <p className="period">Feb 2020 - Oct 2022</p>
                    <p className="location">Cape Town, SA</p>
                  </div>
                </div>
                <ul className="achievements">
                  <li>Enhanced JavaScript inventory system serving 20+ warehouses with Redis caching (50% DB load reduction)</li>
                  <li>Built SSRS dashboards for real-time inventory/financial reporting used daily by operations teams</li>
                  <li>Optimized PLSQL procedures reducing report generation from 10min to &lt;30sec</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section className="projects">
              <h2>Key Projects</h2>

              <div className="project">
                <h3>Influence Suite – Analytics Platform</h3>
                <p className="project-meta">Mar 2023 - Present | Next.js, TypeScript, Prisma, PostgreSQL, Redis</p>
                <ul>
                  <li>Full-stack SaaS with multi-tenant architecture supporting 50+ users, RESTful API with authentication, RBAC, and background job processing</li>
                  <li>Real-time dashboard with WebSockets, CI/CD pipeline with automated testing, Sentry monitoring</li>
                </ul>
              </div>

              <div className="project">
                <h3>E-commerce Portfolio (5 Production Sites)</h3>
                <p className="project-meta">Feb 2024 - Sept 2024 | Next.js, Shopify, Payload CMS</p>
                <ul>
                  <li><a href="https://dehoof-homes.co.za/" target="_blank" rel="noopener noreferrer">DeHoof Homes</a>, <a href="https://www.azantx.com/" target="_blank" rel="noopener noreferrer">Azantx</a>, <a href="https://tiiglu.com/" target="_blank" rel="noopener noreferrer">Tiiglu</a>, <a href="https://saafy-app.vercel.app/" target="_blank" rel="noopener noreferrer">Saafy</a>, <a href="https://mysarcelle.com/" target="_blank" rel="noopener noreferrer">Sarcelle</a> - CMS and e-commerce integrations with Lighthouse 95+ scores, sub-2s loads</li>
                </ul>
              </div>
            </section>

            {/* Live Demos */}
            <section className="live-demos">
              <h2>Live Demos</h2>
              <p className="demo-links">
                <a href="https://fanciful-nasturtium-09fcc3.netlify.app/" target="_blank" rel="noopener noreferrer">State Management with React Context</a> • <a href="https://glittery-pixie-cf64da.netlify.app/" target="_blank" rel="noopener noreferrer">Next.js App with Advanced Caching</a> • <a href="https://stirring-hamster-021507.netlify.app/" target="_blank" rel="noopener noreferrer">Inventory Management App</a>
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
