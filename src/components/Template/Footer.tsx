import Link from 'next/link';

import ContactIcons from '@/components/Contact/ContactIcons';
import { AUTHOR_NAME, SITE_DESCRIPTION } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="site-footer-new">
      <div className="footer-content">
        <div className="footer-identity">
          <div className="footer-info">
            <h3>{AUTHOR_NAME}</h3>
            <p className="footer-role">{SITE_DESCRIPTION}</p>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} · {AUTHOR_NAME}
            </p>
          </div>
        </div>

        <div className="footer-right">
          <nav className="footer-links" aria-labelledby="footer-links-heading">
            <h4 id="footer-links-heading" className="footer-links-label">
              Điều hướng
            </h4>
            <div className="footer-links-grid">
              <Link href="/about">Giới thiệu</Link>
              <Link href="/resume">Hồ sơ</Link>
              <Link href="/projects">Dự án</Link>
              <Link href="/contact">Liên hệ</Link>
            </div>
          </nav>

          <div
            className="footer-social"
            aria-labelledby="footer-social-heading"
          >
            <h4 id="footer-social-heading" className="footer-social-label">
              Kết nối
            </h4>
            <ContactIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}
