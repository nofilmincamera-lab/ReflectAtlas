import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reflect Atlas - See patterns others miss | by Still Logic</title>
        <meta name="description" content="Reflect Atlas reveals hidden insights in your data through advanced pattern recognition and predictive analytics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <svg width="35" height="35" viewBox="0 0 80 80">
            <circle cx="40" cy="24" r="12" fill="#DC2626"/>
            <circle cx="28" cy="48" r="12" fill="#3B82F6"/>
            <circle cx="52" cy="48" r="12" fill="#FF6B35"/>
          </svg>
          <div className={styles.logo}>Still Logic</div>
        </div>
        <div className={styles.navRight}>
          <Link href="/">Products</Link>
          <Link href="/">Solutions</Link>
          <Link href="/">Pricing</Link>
          <Link href="/login" className={styles.navCta}>Customer Login</Link>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Measure what slows you down. Build what speeds you up.</h1>
          <p>
            Reflect Atlas quantifies organizational cognitive drag—the hidden friction between people, processes, and technology—and delivers AI-ready roadmaps that eliminate bottlenecks faster than your competitors.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/login" className={styles.btnPrimary}>View Sample Reports</Link>
            <a href="#services" className={styles.btnSecondary}>Learn More</a>
          </div>
        </section>

        <section className={styles.sectionLight}>
          <h2>The operational GPS for AI deployment</h2>
          <p className={styles.intro}>
            Using O*NET taxonomy, labor-market benchmarks, and proprietary NLP, Reflect Atlas analyzes job postings, role descriptions, and workflow documentation to compute your Cognitive Drag Index (CDI)—a quantified measure of where manual processes, skill misalignment, and underutilized technology create hidden inefficiency.
          </p>
        </section>

        <section id="services" className={styles.sectionFeatures}>
          <h2 style={{textAlign: 'center', fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '50px', color: 'var(--color-dark)'}}>Our Services</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.iconBox} style={{background: '#DC2626'}}>
                <svg width="30" height="30" viewBox="0 0 70 70">
                  <polygon points="35,15 50,25 50,45 35,55 20,45 20,25" fill="none" stroke="white" strokeWidth="3"/>
                </svg>
              </div>
              <h3>Cognitive Efficiency Diagnostic</h3>
              <p>We quantify your Cognitive Drag Index by analyzing job postings, role descriptions, and technographic signals—mapped against peer performance and industry standards.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox} style={{background: '#3B82F6'}}>
                <svg width="30" height="30" viewBox="0 0 70 70">
                  <circle cx="35" cy="35" r="15" fill="none" stroke="white" strokeWidth="3"/>
                </svg>
              </div>
              <h3>AI Readiness Roadmap</h3>
              <p>Using your CDI analysis, we identify and prioritize your top automation opportunities with sequenced implementation roadmaps and estimated ROI.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox} style={{background: '#84CC16'}}>
                <svg width="30" height="30" viewBox="0 0 70 70">
                  <path d="M 15 45 Q 25 30 35 35 T 55 25" fill="none" stroke="white" strokeWidth="3"/>
                </svg>
              </div>
              <h3>Turnkey Implementation</h3>
              <p>We don't just diagnose—we deploy. Leveraging our curated library of AI-native CX platforms, we deliver measurable efficiency gains with minimal disruption.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox} style={{background: '#FF6B35'}}>
                <svg width="30" height="30" viewBox="0 0 70 70">
                  <rect x="15" y="15" width="40" height="40" fill="none" stroke="white" strokeWidth="3"/>
                </svg>
              </div>
              <h3>CDI Velocity Tracking</h3>
              <p>Continuous quarterly re-measurement of your Cognitive Drag Index to track efficiency improvements, validate ROI, and surface emerging opportunities.</p>
            </div>
          </div>
        </section>

        <section className={styles.sectionDark}>
          <div className={styles.contentGrid}>
            <div>
              <h2 style={{color: 'white', borderBottom: 'none', fontSize: '2.5rem'}}>How the CDI Works</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#E8E5E0', marginBottom: '30px'}}>
                Our proprietary Cognitive Drag Index combines three scientific dimensions derived from O*NET task analysis and labor market benchmarks:
              </p>
              <ul className={styles.checkList}>
                <li><strong>Role Complexity Load (RCL)</strong> — Measures cognitive load density from task verbs and decision-making language</li>
                <li><strong>Process-Tech Misalignment (PTM)</strong> — Quantifies mismatch between described processes and available tools</li>
                <li><strong>Tech-Labor Divergence (TLD)</strong> — Detects when your technology stack doesn't align with your labor profile</li>
                <li><strong>Validation</strong> — Back-tested against Revenue per Employee, Operating Margin, and Time-to-Fill metrics</li>
              </ul>
              <Link href="/login" className={styles.btnPrimary} style={{marginTop: '30px', display: 'inline-block'}}>View Sample Analysis</Link>
            </div>
            <div className={styles.visualPlaceholder}>
              CDI Scoring Model
            </div>
          </div>
        </section>

        <section className={styles.sectionCta}>
          <h2>Ready to eliminate your bottlenecks?</h2>
          <p>See how your organization compares to peers with a Cognitive Efficiency Diagnostic.</p>
          <Link href="/login" className={styles.btnPrimary}>Access Sample Reports</Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px'}}>
              <svg width="35" height="35" viewBox="0 0 80 80">
                <circle cx="40" cy="24" r="12" fill="#DC2626"/>
                <circle cx="28" cy="48" r="12" fill="#3B82F6"/>
                <circle cx="52" cy="48" r="12" fill="#FF6B35"/>
              </svg>
              <div style={{fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '700', color: '#2D2420'}}>
                Still Logic
              </div>
            </div>
            <p style={{color: '#5A5350'}}>Business intelligence that makes sense</p>
          </div>
          <div className={styles.footerLinks}>
            <div>
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Security</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>
            <div>
              <h4>Support</h4>
              <a href="#">Docs</a>
              <a href="#">Contact</a>
              <a href="/login">Login</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Still Logic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

