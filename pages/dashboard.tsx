import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../styles/Dashboard.module.css'

export default function Dashboard() {
  const router = useRouter()
  const [userEmail, setUserEmail] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check authentication
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
        <title>Dashboard - ReflectAtlas</title>
        <meta name="description" content="Your ReflectAtlas analytics dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.logo}>ReflectAtlas</div>
        <div className={styles.navRight}>
          <span className={styles.userEmail}>{userEmail}</span>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        </div>
      </nav>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <h3>Navigation</h3>
          <ul>
            <li className={styles.active}>Dashboard</li>
            <li>Analytics</li>
            <li>Reports</li>
            <li>Data Sources</li>
            <li>Settings</li>
          </ul>
        </aside>

        <main className={styles.main}>
          <header className={styles.header}>
            <h1>Analytics Dashboard</h1>
            <p>Welcome back! Here's an overview of your data insights.</p>
          </header>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>📊</div>
              <div className={styles.statContent}>
                <h3>Total Reports</h3>
                <p className={styles.statValue}>127</p>
                <span className={styles.statChange}>+12% from last month</span>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>👥</div>
              <div className={styles.statContent}>
                <h3>Active Users</h3>
                <p className={styles.statValue}>2,543</p>
                <span className={styles.statChange}>+8% from last month</span>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>📈</div>
              <div className={styles.statContent}>
                <h3>Data Points</h3>
                <p className={styles.statValue}>1.2M</p>
                <span className={styles.statChange}>+23% from last month</span>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>⚡</div>
              <div className={styles.statContent}>
                <h3>Processing Speed</h3>
                <p className={styles.statValue}>98.5%</p>
                <span className={styles.statChange}>+2% from last month</span>
              </div>
            </div>
          </div>

          <section className={styles.reportsSection}>
            <h2>Recent Reports</h2>
            <div className={styles.reportsGrid}>
              <div className={styles.reportCard}>
                <div className={styles.reportHeader}>
                  <h3>Monthly Revenue Analysis</h3>
                  <span className={styles.reportDate}>Oct 2025</span>
                </div>
                <p className={styles.reportDescription}>
                  Comprehensive analysis of revenue streams and growth patterns
                </p>
                <div className={styles.reportFooter}>
                  <span className={styles.reportTag}>Financial</span>
                  <button className={styles.viewButton}>View Report</button>
                </div>
              </div>

              <div className={styles.reportCard}>
                <div className={styles.reportHeader}>
                  <h3>Customer Engagement Metrics</h3>
                  <span className={styles.reportDate}>Oct 2025</span>
                </div>
                <p className={styles.reportDescription}>
                  Deep dive into customer behavior and interaction patterns
                </p>
                <div className={styles.reportFooter}>
                  <span className={styles.reportTag}>Engagement</span>
                  <button className={styles.viewButton}>View Report</button>
                </div>
              </div>

              <div className={styles.reportCard}>
                <div className={styles.reportHeader}>
                  <h3>Product Performance Dashboard</h3>
                  <span className={styles.reportDate}>Oct 2025</span>
                </div>
                <p className={styles.reportDescription}>
                  Track product metrics, user adoption, and feature usage
                </p>
                <div className={styles.reportFooter}>
                  <span className={styles.reportTag}>Product</span>
                  <button className={styles.viewButton}>View Report</button>
                </div>
              </div>

              <div className={styles.reportCard}>
                <div className={styles.reportHeader}>
                  <h3>Operational Efficiency Report</h3>
                  <span className={styles.reportDate}>Sept 2025</span>
                </div>
                <p className={styles.reportDescription}>
                  Analysis of operational metrics and efficiency improvements
                </p>
                <div className={styles.reportFooter}>
                  <span className={styles.reportTag}>Operations</span>
                  <button className={styles.viewButton}>View Report</button>
                </div>
              </div>

              <div className={styles.reportCard}>
                <div className={styles.reportHeader}>
                  <h3>Market Trends Analysis</h3>
                  <span className={styles.reportDate}>Sept 2025</span>
                </div>
                <p className={styles.reportDescription}>
                  Industry trends, competitive analysis, and market positioning
                </p>
                <div className={styles.reportFooter}>
                  <span className={styles.reportTag}>Market</span>
                  <button className={styles.viewButton}>View Report</button>
                </div>
              </div>

              <div className={styles.reportCard}>
                <div className={styles.reportHeader}>
                  <h3>Q3 2025 Summary Report</h3>
                  <span className={styles.reportDate}>Sept 2025</span>
                </div>
                <p className={styles.reportDescription}>
                  Quarterly summary with key metrics and strategic insights
                </p>
                <div className={styles.reportFooter}>
                  <span className={styles.reportTag}>Quarterly</span>
                  <button className={styles.viewButton}>View Report</button>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.actionsSection}>
            <h2>Quick Actions</h2>
            <div className={styles.actionsGrid}>
              <button className={styles.actionButton}>
                <span className={styles.actionIcon}>📄</span>
                Generate New Report
              </button>
              <button className={styles.actionButton}>
                <span className={styles.actionIcon}>📤</span>
                Export Data
              </button>
              <button className={styles.actionButton}>
                <span className={styles.actionIcon}>⚙️</span>
                Configure Data Source
              </button>
              <button className={styles.actionButton}>
                <span className={styles.actionIcon}>👥</span>
                Manage Team Access
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
