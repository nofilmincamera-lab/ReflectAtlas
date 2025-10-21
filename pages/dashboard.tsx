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
          <h1>Analytics Dashboard</h1>
          <p>Welcome back! Here's an overview of your data insights.</p>
        </header>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>127</div>
            <div className={styles.statLabel}>Total Reports</div>
            <div className={styles.statChange}>+12% from last month</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statValue}>2,543</div>
            <div className={styles.statLabel}>Active Users</div>
            <div className={styles.statChange}>+8% from last month</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statValue}>1.2M</div>
            <div className={styles.statLabel}>Data Points</div>
            <div className={styles.statChange}>+23% from last month</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statValue}>98.5%</div>
            <div className={styles.statLabel}>Accuracy</div>
            <div className={styles.statChange}>+2% from last month</div>
          </div>
        </div>

        <section className={styles.reportsSection}>
          <h2>Recent Reports</h2>
          <div className={styles.reportsGrid}>
            {[
              { title: 'Monthly Revenue Analysis', date: 'Oct 2025', tag: 'Financial', color: '#DC2626' },
              { title: 'Customer Engagement Metrics', date: 'Oct 2025', tag: 'Engagement', color: '#3B82F6' },
              { title: 'Product Performance Dashboard', date: 'Oct 2025', tag: 'Product', color: '#FF6B35' },
              { title: 'Operational Efficiency Report', date: 'Sept 2025', tag: 'Operations', color: '#84CC16' },
              { title: 'Market Trends Analysis', date: 'Sept 2025', tag: 'Market', color: '#DC2626' },
              { title: 'Q3 2025 Summary Report', date: 'Sept 2025', tag: 'Quarterly', color: '#3B82F6' },
            ].map((report, index) => (
              <div className={styles.reportCard} key={index}>
                <div className={styles.reportHeader}>
                  <h3>{report.title}</h3>
                  <span className={styles.reportDate}>{report.date}</span>
                </div>
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
