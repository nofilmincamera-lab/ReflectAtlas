import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ReflectAtlas - Transform Your Data Into Insights</title>
        <meta name="description" content="ReflectAtlas provides powerful analytics and reporting solutions to help businesses make data-driven decisions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.logo}>ReflectAtlas</div>
        <Link href="/login" className={styles.loginButton}>
          Customer Login
        </Link>
      </nav>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Transform Your Data Into <span className={styles.highlight}>Insights</span>
          </h1>

          <p className={styles.description}>
            ReflectAtlas empowers organizations with intelligent analytics and comprehensive reporting solutions that drive better business decisions.
          </p>

          <div className={styles.ctaButtons}>
            <Link href="/login" className={styles.primaryButton}>
              Access Dashboard
            </Link>
            <a href="#features" className={styles.secondaryButton}>
              Learn More
            </a>
          </div>
        </section>

        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>About ReflectAtlas</h2>
          <p className={styles.sectionText}>
            Founded on the principle that data should illuminate, not overwhelm, ReflectAtlas delivers
            cutting-edge analytics solutions tailored to modern businesses. Our platform combines advanced
            data processing with intuitive visualizations to help you understand your business at a glance.
          </p>
        </section>

        <section id="features" className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Products</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Analytics Engine</h3>
              <p>Real-time data processing and analysis with advanced machine learning capabilities</p>
            </div>

            <div className={styles.card}>
              <h3>Custom Reports</h3>
              <p>Generate tailored reports that answer your specific business questions</p>
            </div>

            <div className={styles.card}>
              <h3>Data Visualization</h3>
              <p>Interactive dashboards and charts that make complex data easy to understand</p>
            </div>

            <div className={styles.card}>
              <h3>Team Collaboration</h3>
              <p>Share insights across your organization with role-based access controls</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Choose ReflectAtlas?</h2>
          <div className={styles.features}>
            <ul>
              <li>Enterprise-grade security and compliance</li>
              <li>Seamless integration with existing data sources</li>
              <li>Scalable architecture that grows with your business</li>
              <li>24/7 customer support and dedicated account management</li>
              <li>Customizable dashboards and reporting templates</li>
              <li>AI-powered insights and predictive analytics</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            <h4>ReflectAtlas</h4>
            <p>Transforming data into actionable insights</p>
          </div>
          <div>
            <p>&copy; 2025 ReflectAtlas Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
