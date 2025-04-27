import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Properties - Real Estate Investment</title>
        <meta name="description" content="Smart Properties - Real Estate Investment with expertise in property management." />
      </Head>

      <header className={styles.header}>
        <div className={styles.heroText}>
          <h1>Welcome to Smart Properties</h1>
          <p>Why Smart Properties?</p>
          <p>Smart Properties is guided by a leadership collective with over 30 years of civil engineering and asset management experience.</p>
          <p>We apply proven infrastructure and lifecycle strategies to residential property management — delivering better maintenance outcomes, lower operating costs, and homes that are treated with care. Our engineering principles ensure efficient maintenance, sustainable costs, and long-term asset health.</p>
          <p>Unlike traditional property managers, we don’t just coordinate repairs. We manage assets with long-term thinking, using engineering precision to reduce breakdowns, protect value, and improve tenant retention.</p>
          <p>We treat every home as a long-term asset — and every tenant as a partner in its care.</p>
        </div>
      </header>

      <section className={styles.contactSection}>
        <h2>Get in Touch</h2>
        <form className={styles.contactForm} method="POST" action="/api/contact">
          <div className={styles.inputGroup}>
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 Smart Properties. All Rights Reserved.</p>
      </footer>
    </>
  );
}
