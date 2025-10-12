import { type FC } from 'react';
import { Link } from 'react-router';

import styles from './OurServicesSection.module.scss';
import { ourServices } from '~/lib/data';

const OurServicesSection: FC = () => {
  return (
    <section className={styles.servicesSection}>
      <header className={styles.header}>
        <h2 className={styles.heading}>Comprehensive Transport Solutions</h2>

        <p className={styles.subheading}>
          From getting around the city to emergency roadside help, OHN'S has Kampala covered. All services are easily accessible via
          the OHN'S App.
        </p>
      </header>

      <div className={styles.servicesGrid}>
        {ourServices.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={`${styles.imageWrapper} aspect-ratio-16x9`}>
              <img src={service.imagePath} alt={service.imageAlt} loading="lazy" />
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServicesSection;
