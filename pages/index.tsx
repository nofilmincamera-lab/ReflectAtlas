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
          <h1>Transform data into decisive action</h1>
          <p>
            Reflect Atlas brings clarity to complex data landscapes with business intelligence tools that feel intuitive and trustworthy.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/login" className={styles.btnPrimary}>Get Started Free</Link>
            <a href="#features" className={styles.btnSecondary}>Watch Demo</a>
          </div>
        </section>

        <section className={styles.sectionLight}>
          <h2>See patterns others miss</h2>
          <p className={styles.intro}>
            Reflect Atlas reveals hidden insights in your data through advanced pattern recognition and predictive analytics. Stop guessing, start knowing.
          </p>
        </section>

        <section id="features" className={styles.sectionFeatures}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.iconBox} style={{background: '#DC2626'}}>
                <svg width="30" height="30" viewBox="0 0 70 70">
                  <polygon points="35,15 50,25 50,45 35,55 20,45 20,25" fill="none" stroke="white" strokeWidth="3"/>
                </svg>
              </div>
              <h3>Lightning Fast Queries</h3>
              <p>Execute complex data queries in milliseconds, not minutes. Our optimized engine handles billions of records effortlessly.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox} style={{background: '#3B82F6'}}>
                <svg width="30" height="30" viewBox="0 0 70 70">
                  <circle cx="35" cy="35" r="15" fill="none" stroke="white" strokeWidth="3"/>
                </svg>
              </div>
              <h3>Enterprise Security</h3>
              <p>Bank-level encryption, SOC 2 compliance, and granular access controls keep your data protected at every layer.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox} style={{background: '#84CC16'}}>
                <svg width="30" height="30" viewBox="0 0 70 70">
                  <path d="M 15 45 Q 25 30 35 35 T 55 25" fill="none" stroke="white" strokeWidth="3"/>
                </svg>
              </div>
              <h3>Real-Time Sync</h3>
              <p>Live data updates across all connected sources. Your dashboard reflects reality, not yesterday's snapshot.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox} style={{background: '#FF6B35'}}>
                <svg width="30" height="30" viewBox="0 0 70 70">
                  <rect x="15" y="15" width="40" height="40" fill="none" stroke="white" strokeWidth="3"/>
                </svg>
              </div>
              <h3>AI-Powered Insights</h3>
              <p>Automated anomaly detection and trend forecasting with 95% accuracy. Let AI find the patterns you need.</p>
            </div>
          </div>
        </section>

        <section className={styles.sectionDark}>
          <div className={styles.contentGrid}>
            <div>
              <h2 style={{color: 'white', borderBottom: 'none', fontSize: '2.5rem'}}>Built for scale, designed for humans</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#E8E5E0', marginBottom: '30px'}}>
                Whether you're analyzing customer behavior or tracking operational metrics, Reflect Atlas scales with your needs while staying intuitive.
              </p>
              <ul className={styles.checkList}>
                <li>Connect unlimited data sources</li>
                <li>Collaborate with your entire team</li>
                <li>Export and share reports anywhere</li>
                <li>Custom dashboards in minutes</li>
              </ul>
              <Link href="/login" className={styles.btnPrimary} style={{marginTop: '30px', display: 'inline-block'}}>Start Your Free Trial</Link>
            </div>
            <div className={styles.visualPlaceholder}>
              [Product Screenshot]
            </div>
          </div>
        </section>

        <section className={styles.sectionCta}>
          <h2>Ready to see your data clearly?</h2>
          <p>Join hundreds of companies making better decisions with Reflect Atlas.</p>
          <Link href="/login" className={styles.btnPrimary}>Get Started Free</Link>
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

