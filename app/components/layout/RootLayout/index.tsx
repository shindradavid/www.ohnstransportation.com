import { type FC, useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import styles from './styles.module.scss';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Our services', path: '/our-services' },
  { name: 'About us', path: '/about-us' },
  { name: 'Contact us', path: '/contact-us' },
];

const RootLayout: FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <div className={styles.rootLayout}>
      <header className={styles.header}>
        <NavLink to="/" className={styles.logo}>
          <img src="/images/header-logo.png" alt="OHN'S TRANSPORTATION COMPANY LIMITED LOGO" />
        </NavLink>

        <nav className={`${styles.nav} ${isMobileNavOpen && styles.open}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => {
                return `${styles.navLink} ${isActive ? styles.activeNavLink : undefined}`;
              }}
              onClick={closeMobileNav}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <NavLink to={`/get-our-app`} className={styles.cta}>
          Get out app
        </NavLink>

        <button className={styles.menuButton} onClick={toggleMobileNav} aria-expanded={isMobileNavOpen} aria-controls="mobile-nav">
          {isMobileNavOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          <span className="sr-only">Toggle navigation menu</span>
        </button>
      </header>

      <main className={styles.mainContent}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBottomSection}>
          <p className={styles.copyright}>
            &copy; OHN'S TRANSPORTATION COMPANY LIMITED {new Date().getFullYear()}. All rights reserved.
          </p>

          <p className={styles.credit}>
            Built with love by{' '}
            <a href="https://shindradavid.iconiksoftware.com" target="_blank">
              Shindra David
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
