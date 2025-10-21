import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Login.module.css'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Mock authentication
    setTimeout(() => {
      if (email.includes('@') && password.length >= 4) {
        localStorage.setItem('reflectAtlasAuth', 'true')
        localStorage.setItem('userEmail', email)
        router.push('/dashboard')
      } else {
        setError('Please enter a valid email and password (min 4 characters)')
        setLoading(false)
      }
    }, 800)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Customer Login - Reflect Atlas</title>
        <meta name="description" content="Login to access your Reflect Atlas dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.loginCard}>
        <div className={styles.header}>
          <svg width="60" height="60" viewBox="0 0 80 80">
            <circle cx="40" cy="24" r="12" fill="#DC2626"/>
            <circle cx="28" cy="48" r="12" fill="#3B82F6"/>
            <circle cx="52" cy="48" r="12" fill="#FF6B35"/>
          </svg>
          <h1>Customer Login</h1>
          <p>Access your Reflect Atlas dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <button type="submit" disabled={loading} className={styles.submitBtn}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className={styles.demoNote}>
          <p><strong>Demo Mode:</strong> Use any email with @ and password (4+ chars)</p>
          <p className={styles.example}>Example: demo@company.com / password</p>
        </div>

        <div className={styles.links}>
          <Link href="/">← Back to home</Link>
        </div>
      </div>
    </div>
  )
}
