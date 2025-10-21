import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../styles/Dashboard.module.css'

export default function Dashboard() {
  const router = useRouter()
  const [userEmail, setUserEmail] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const auth = localStorage.getItem('reflectAtlasAuth')
    const email = localStorage.getItem('userEmail')

    if (!auth) {
      router.push('/login')
    } else {
      setUserEmail(email || '')
      setIsLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('reflectAtlasAuth')
    localStorage.removeItem('userEmail')
    router.push('/')
  }

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading dashboard...</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard - Reflect Atlas</title>
        <meta name="description" content="Your Reflect Atlas analytics dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <svg width="35" height="35" viewBox="0 0 80 80">
            <circle cx="40" cy="24" r="12" fill="#DC2626"/>
            <circle cx="28" cy="48" r="12" fill="#3B82F6"/>
            <circle cx="52" cy="48" r="12" fill="#FF6B35"/>
          </svg>
          <div className={styles.brand}>
            <div className={styles.productName}>Reflect Atlas</div>
            <div className={styles.companyName}>by Still Logic</div>
          </div>
        </div>
        <div className={styles.navRight}>
          <span className={styles.userEmail}>{userEmail}</span>
          <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
        </div>
      </nav>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Sample Cognitive Efficiency Reports</h1>
          <p>Explore sample diagnostics showing how Reflect Atlas identifies automation opportunities and measures organizational cognitive drag.</p>
        </header>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>71.3</div>
            <div className={styles.statLabel}>Sample CDI Score</div>
            <div className={styles.statChange}>Industry Avg: 58.2</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statValue}>47%</div>
            <div className={styles.statLabel}>Manual Task Load</div>
            <div className={styles.statChange}>vs 28% peer avg</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statValue}>$188K</div>
            <div className={styles.statLabel}>Rev per Employee</div>
            <div className={styles.statChange}>vs $210K industry</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statValue}>18-25%</div>
            <div className={styles.statLabel}>Est. ROI Range</div>
            <div className={styles.statChange}>12-month projection</div>
          </div>
        </div>

        <section className={styles.reportsSection}>
          <h2>Sample Cognitive Efficiency Diagnostics</h2>
          <p style={{color: 'var(--color-warm-gray)', marginBottom: '30px', fontSize: '1.05rem'}}>
            These reports demonstrate how Reflect Atlas analyzes CX operations and identifies AI/automation opportunities using O*NET taxonomy and proprietary CDI scoring.
          </p>
          <div className={styles.reportsGrid}>
            {[
              {
                title: 'Contact Center CDI Analysis',
                date: 'NovaBank Financial',
                desc: 'CDI 74 | 1,200 roles analyzed | RCL overweight in CSR functions',
                tag: 'CX Operations',
                color: '#DC2626'
              },
              {
                title: 'BPO Automation Readiness Report',
                date: 'Multi-client BPO',
                desc: 'PTM 68 | High manual DWA share in billing & reconciliation',
                tag: 'AI-First BPO',
                color: '#3B82F6'
              },
              {
                title: 'Loan Operations Efficiency Diagnostic',
                date: 'NovaBank Financial',
                desc: 'Top opportunity: OCR + LLM intake automation | 15-20pt PTM reduction',
                tag: 'Process-Tech Gap',
                color: '#FF6B35'
              },
              {
                title: 'Customer Service Cognitive Load Study',
                date: 'Telecom Provider',
                desc: 'RCL 78 | Recommendation: AI Assist + guided workflows',
                tag: 'CX Optimization',
                color: '#84CC16'
              },
              {
                title: 'O*NET Skill Taxonomy Benchmark',
                date: 'NAICS 5221 Sector',
                desc: '43-XXXX overweight +12pts | 15-series enablement underweight',
                tag: 'Labor Analysis',
                color: '#DC2626'
              },
              {
                title: 'AI Implementation Roadmap',
                date: 'Multi-Function CX Ops',
                desc: 'Sequenced plan: Loan Ops → CSR → Exceptions | $2.1M ROI est.',
                tag: 'Deployment Plan',
                color: '#3B82F6'
              },
            ].map((report, index) => (
              <div className={styles.reportCard} key={index}>
                <div className={styles.reportHeader}>
                  <h3>{report.title}</h3>
                  <span className={styles.reportDate}>{report.date}</span>
                </div>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-warm-gray)',
                  marginBottom: '15px',
                  lineHeight: '1.5',
                  fontFamily: 'var(--font-mono)',
                  minHeight: '60px'
                }}>
                  {report.desc}
                </p>
                <div className={styles.reportFooter}>
                  <span className={styles.reportTag} style={{background: `${report.color}15`, color: report.color, borderColor: report.color}}>
                    {report.tag}
                  </span>
                  <button className={styles.viewBtn}>View Report</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
