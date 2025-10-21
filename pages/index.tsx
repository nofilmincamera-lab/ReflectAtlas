import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ReflectAtlas - Mock Site</title>
        <meta name="description" content="ReflectAtlas mock site for demonstration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>ReflectAtlas</span>
        </h1>

        <p className={styles.description}>
          A modern mock site built with Next.js and deployed on Vercel
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Fast &rarr;</h2>
            <p>Optimized for performance and speed with Next.js</p>
          </div>

          <div className={styles.card}>
            <h2>Modern &rarr;</h2>
            <p>Built with the latest React and Next.js technologies</p>
          </div>

          <div className={styles.card}>
            <h2>Scalable &rarr;</h2>
            <p>Deployed on Vercel for global edge network performance</p>
          </div>

          <div className={styles.card}>
            <h2>Responsive &rarr;</h2>
            <p>Fully responsive design that works on all devices</p>
          </div>
        </div>

        <div className={styles.features}>
          <h2>Features</h2>
          <ul>
            <li>Server-side rendering with Next.js</li>
            <li>TypeScript for type safety</li>
            <li>Optimized for Vercel deployment</li>
            <li>Modern CSS modules for styling</li>
            <li>SEO-friendly meta tags</li>
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>ReflectAtlas &copy; 2025 - Powered by Next.js & Vercel</p>
      </footer>
    </div>
  )
}
