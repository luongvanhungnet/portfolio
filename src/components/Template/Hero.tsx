import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-name">Lương Văn Hưng</span>
        </h1>

        <p className="hero-tagline">
          Vietnam-Japan Information Technology student at{' '}
          <a href="https://hust.edu.vn" className="hero-highlight">
            Hanoi University of Science and Technology
          </a>
          .
          <br />
          Focused on AI, Machine Learning, Deep Learning, Big Data, Data
          Analysis, and Full-stack development.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">AI / Machine Learning</span>
          <span className="hero-chip">Full-stack</span>
          <span className="hero-chip">HUST 2023 - Present</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button">
            About me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
