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

    // Mock authentication - accepts any email/password with @ symbol
    setTimeout(() => {
      if (email.includes('@') && password.length >= 4) {
        // Store auth token in localStorage
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
        <title>Customer Login - ReflectAtlas</title>
        <meta name="description" content="Login to access your ReflectAtlas dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          ReflectAtlas
        </Link>
      </nav>

      <main className={styles.main}>
        <div className={styles.loginBox}>
          <h1 className={styles.title}>Customer Login</h1>
          <p className={styles.subtitle}>Access your analytics dashboard</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                required
                className={styles.input}
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
                className={styles.input}
              />
            </div>

            {error && <div className={styles.error}>{error}</div>}

            <button
              type="submit"
              disabled={loading}
              className={styles.submitButton}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className={styles.demoNote}>
            <p><strong>Demo Mode:</strong> Use any email with @ and password (4+ chars)</p>
            <p className={styles.example}>Example: demo@company.com / password</p>
          </div>

          <div className={styles.links}>
            <a href="#">Forgot password?</a>
            <span>•</span>
            <a href="#">Request access</a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 ReflectAtlas Inc. All rights reserved.</p>
      </footer>
    </div>
  )
}
