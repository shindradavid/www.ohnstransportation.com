import React from 'react';
import { Link } from 'react-router';
import { FaChevronRight } from 'react-icons/fa';

import styles from './styles.module.scss';

interface HeroSecondaryProps {
  title: string;
  backgroundImage: string;
  breadcrumbs: { label: string; href: string }[];
}

const HeroSecondary: React.FC<HeroSecondaryProps> = ({ title, backgroundImage, breadcrumbs }) => {
  return (
    <section className={styles.heroSecondary} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className={styles.crumb}>
              <Link to={crumb.href}>{crumb.label}</Link>
              {index < breadcrumbs.length - 1 && (
                <span className={styles.separator}>
                  <FaChevronRight size={20} />
                </span>
              )}
            </span>
          ))}
        </nav>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  );
};

export default HeroSecondary;
