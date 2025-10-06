import './App.css';

function App() {
  return (
    <div className="resume">
      {/* Header */}
      <header className="header">
        <h1>Joshua Twycross</h1>
        <p className="headline">Senior Full-Stack Engineer</p>
        <div className="contact">
          <a href="mailto:joshuatwycross@gmail.com">joshuatwycross@gmail.com</a>
          <span className="separator">•</span>
          <a href="tel:+27614391349">+27 61 439 1349</a>
          <span className="separator">•</span>
          <a href="https://linkedin.com/in/joshuatwycross" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <p className="location">Cape Town, South Africa</p>
      </header>

      {/* Summary */}
      <section className="summary">
        <h2>Professional Summary</h2>
        <p>
          Results-driven Senior Full-Stack Engineer with 5+ years architecting and shipping scalable web applications 
          from MVP to production. Specialized in TypeScript/React/Node.js ecosystems with proven ability to own full 
          product lifecycles—from database schema design and API architecture through CI/CD and production monitoring.
        </p>
        <p>
          Track record of making high-impact architectural decisions in fast-paced environments, leveraging modern 
          tooling and AI-assisted development to maximize velocity without sacrificing code quality.
        </p>
        <p className="competencies">
          <strong>Core Competencies:</strong> System Architecture • API Design • Performance Optimization • 
          DevOps & CI/CD • Technical Leadership • Startup Environments
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
              <p className="location">Cape Town, South Africa</p>
            </div>
          </div>
          <ul className="achievements">
            <li>
              Architected and delivered 5 production websites (DeHoof Homes, Azantx, Tiiglu, Saafy, Sarcelle) using 
              Next.js 14 with App Router, Payload CMS, and TypeScript—handling end-to-end delivery from client 
              requirements through deployment and post-launch optimization
            </li>
            <li>
              Designed headless CMS architecture with Payload enabling non-technical clients to manage content 
              independently, reducing maintenance overhead by ~60% compared to previous WordPress implementations
            </li>
            <li>
              Built custom Shopify storefronts with Liquid templating and integrated third-party APIs for payment 
              processing, inventory sync, and analytics—ensuring PCI compliance and optimizing checkout conversion rates
            </li>
            <li>
              Established CI/CD pipelines using Vercel and GitHub Actions with automated testing, reducing deployment 
              time from 2 hours to 8 minutes and enabling same-day feature releases
            </li>
            <li>
              Implemented performance optimizations (image optimization, code splitting, caching strategies) achieving 
              Lighthouse scores of 95+ and sub-2s page loads
            </li>
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
            <li>
              Owned development of Influence Suite—a KPI analytics dashboard for influencer marketing campaigns 
              serving 50+ active users, built with Next.js, Prisma ORM, PostgreSQL, and React Context for state management
            </li>
            <li>
              Designed and implemented RESTful APIs with Node.js handling authentication, role-based access control (RBAC), 
              and background job processing for data aggregation across multiple social platforms
            </li>
            <li>
              Architected batch processing workflows using job queues to automate analytics reporting, reducing manual 
              reporting time from 4 hours/week to fully automated daily summaries
            </li>
            <li>
              Built serverless newsletter opt-in system with Vanilla JS frontend and AWS Lambda functions, handling 
              10K+ monthly signups with 99.9% uptime
            </li>
            <li>
              Optimized database queries and implemented Redis caching layer, reducing API response times from 800ms 
              to &lt;150ms and improving dashboard load performance by 70%
            </li>
            <li>
              Collaborated directly with founders to translate business requirements into technical solutions, 
              prioritizing features based on user impact and technical feasibility
            </li>
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
              <p className="location">Cape Town, South Africa</p>
            </div>
          </div>
          <ul className="achievements">
            <li>
              Maintained and enhanced JavaScript-based inventory management system serving 20+ warehouse locations, 
              implementing Redis caching to reduce database load by 50% and improve query performance
            </li>
            <li>
              Designed and built SQL Server Reporting Services (SSRS) dashboards for real-time inventory tracking 
              and financial reporting, used daily by operations and finance teams
            </li>
            <li>
              Architected batch processing workflows for nightly data synchronization between legacy systems and 
              modern web applications, eliminating manual data entry and reducing errors by 80%
            </li>
            <li>
              Optimized PLSQL stored procedures and database indexes, reducing report generation time from 10 minutes 
              to under 30 seconds
            </li>
            <li>
              Collaborated with cross-functional teams to gather requirements and deliver data-driven solutions 
              aligned with business objectives
            </li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <div>
              <h3>DevOps & Infrastructure Consultant</h3>
              <p className="company">Cloud Align</p>
            </div>
            <div className="job-meta">
              <p className="period">Nov 2022 - Apr 2023</p>
              <p className="location">Cape Town, South Africa</p>
            </div>
          </div>
          <ul className="achievements">
            <li>
              Implemented Microsoft Endpoint Management (Intune) for device provisioning and security policy 
              enforcement across 100+ endpoints
            </li>
            <li>
              Conducted security audits and established compliance protocols aligned with industry standards, 
              reducing vulnerability exposure by 40%
            </li>
            <li>
              Earned Microsoft 365 Certified: Fundamentals, demonstrating proficiency in enterprise cloud infrastructure
            </li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Languages & Frameworks</h4>
            <p>TypeScript, JavaScript (ES6+), React, Next.js, Node.js, Python, C#, PHP, SQL, GraphQL</p>
          </div>
          <div className="skill-category">
            <h4>Frontend Development</h4>
            <p>React 18+, Next.js 14 (App Router), React Context, TanStack Query, Tailwind CSS, React Native, 
            Performance Optimization</p>
          </div>
          <div className="skill-category">
            <h4>Backend & APIs</h4>
            <p>Node.js, Express, Fastify, RESTful API Design, GraphQL, Serverless Functions (AWS Lambda), 
            Authentication (JWT, OAuth), RBAC</p>
          </div>
          <div className="skill-category">
            <h4>Databases & Caching</h4>
            <p>PostgreSQL, Prisma ORM, Redis, PLSQL, Query Optimization, Schema Design, SSRS</p>
          </div>
          <div className="skill-category">
            <h4>Cloud & DevOps</h4>
            <p>AWS (Lambda, S3, RDS), Azure, Vercel, CI/CD (GitHub Actions), Docker, Infrastructure as Code, 
            Monitoring (Sentry, Datadog)</p>
          </div>
          <div className="skill-category">
            <h4>System Architecture</h4>
            <p>Microservices, Message Queuing, Batch Processing, WebSockets, Event-Driven Architecture, 
            Monorepo Management</p>
          </div>
          <div className="skill-category">
            <h4>CMS & E-commerce</h4>
            <p>Payload CMS, Shopify (Liquid), Headless CMS Architecture</p>
          </div>
          <div className="skill-category">
            <h4>Tools & Practices</h4>
            <p>Git, GitHub, Monorepo (Turborepo/Nx), AI-Assisted Development (Cursor), Agile/Scrum, 
            Technical Documentation, Code Review</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects">
        <h2>Key Projects</h2>

        <div className="project">
          <h3>Influence Suite – KPI Analytics Platform</h3>
          <p className="project-meta">Mar 2023 - Present</p>
          <p className="project-tech">
            <strong>Tech Stack:</strong> Next.js 14, TypeScript, Prisma, PostgreSQL, Redis, TanStack Query
          </p>
          <ul>
            <li>Architected full-stack SaaS application supporting 50+ active users with multi-tenant architecture</li>
            <li>Designed PostgreSQL schema with Prisma ORM optimizing for query performance and data integrity</li>
            <li>Built RESTful API layer with Node.js handling authentication, RBAC, and background job processing</li>
            <li>Implemented real-time dashboard updates using WebSockets and optimized frontend rendering</li>
            <li>
              Established CI/CD pipeline with automated testing (Jest, Playwright) enabling daily feature releases 
              with zero downtime
            </li>
            <li>
              Instrumented application monitoring with Sentry for error tracking and custom analytics to measure 
              feature adoption
            </li>
          </ul>
        </div>

        <div className="project">
          <h3>E-commerce & CMS Websites Portfolio</h3>
          <p className="project-meta">Feb 2024 - Sept 2024</p>
          <p className="project-tech">
            <strong>Tech Stack:</strong> Next.js, Shopify, Payload CMS, Vercel, Tailwind CSS
          </p>
          <ul>
            <li>
              <strong>DeHoof Homes</strong> - Real estate showcase with Payload CMS and performance optimization
            </li>
            <li>
              <strong>Azantx</strong> - E-commerce platform with inventory management and third-party integrations
            </li>
            <li>
              <strong>Tiiglu</strong> - Marketing website with Lighthouse score 95+ and sub-2s page loads
            </li>
            <li>
              <strong>Saafy</strong> - Custom Shopify store with payment gateway integration
            </li>
            <li>
              <strong>Sarcelle</strong> - Headless CMS implementation enabling client self-management
            </li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Diploma in IT Software Development</h3>
          <p className="institution">IIE's Varsity College, Cape Town</p>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications">
        <h2>Certifications</h2>
        <div className="cert-item">
          <h4>Microsoft 365 Certified: Fundamentals</h4>
          <p>Microsoft | 2023</p>
        </div>
      </section>

      {/* Volunteer */}
      <section className="volunteer">
        <h2>Volunteer Experience</h2>
        <div className="volunteer-item">
          <h4>Concerts & Events Assistant</h4>
          <p>Technical stage setup including audio, lighting, and microphone systems</p>
        </div>
        <div className="volunteer-item">
          <h4>Youth Leader</h4>
          <p>Mentoring and community engagement programs</p>
        </div>
      </section>

      {/* References */}
      <section className="references">
        <h2>References</h2>
        <p className="references-note">Available upon request</p>
        <div className="references-grid">
          <div className="reference-item">
            <p><strong>Rudi Killian</strong></p>
            <p>Senior Lecturer, Software Development Mentoring Expert</p>
          </div>
          <div className="reference-item">
            <p><strong>Marcel Du Ry</strong></p>
            <p>CEO, Modern Day Strategy</p>
          </div>
          <div className="reference-item">
            <p><strong>Allen Yaxley</strong></p>
            <p>Business Engineering</p>
          </div>
          <div className="reference-item">
            <p><strong>Brunhilde Giles</strong></p>
            <p>Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;