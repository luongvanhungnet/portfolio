import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-name">Lương Văn Hưng</span>
        </h1>

        <p className="hero-tagline">
          Sinh viên Công nghệ Thông tin Việt-Nhật tại{' '}
          <a href="https://hust.edu.vn" className="hero-highlight">
            Đại học Bách khoa Hà Nội
          </a>
          .
          <br />
          Định hướng AI, Machine Learning, Deep Learning, Big Data, Data
          Analysis và phát triển Full-stack.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">AI / Machine Learning</span>
          <span className="hero-chip">Full-stack</span>
          <span className="hero-chip">HUST 2023 - Hiện tại</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button">
            Giới thiệu
          </Link>
          <Link href="/resume" className="button button-secondary">
            Xem hồ sơ
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
