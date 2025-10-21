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

    // Mock authentication - accepts RL/RL or any email with @ and 4+ char password
    setTimeout(() => {
      if ((email === 'RL' && password === 'RL') || (email.includes('@') && password.length >= 4)) {
        localStorage.setItem('reflectAtlasAuth', 'true')
        localStorage.setItem('userEmail', email === 'RL' ? 'demo@reflectatlas.com' : email)
        router.push('/dashboard')
      } else {
        setError('Invalid credentials. Use RL/RL for demo access.')
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
            <label htmlFor="email">Username or Email</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="RL"
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
          <p><strong>Sample Reports Access:</strong></p>
          <p className={styles.example}>Username: RL  |  Password: RL</p>
          <p style={{fontSize: '0.85rem', marginTop: '10px', color: 'var(--color-warm-gray)'}}>View sample Cognitive Efficiency Diagnostics for CX operations and AI-first BPO implementations</p>
        </div>

        <div className={styles.links}>
          <Link href="/">← Back to home</Link>
        </div>
      </div>
    </div>
  )
}
