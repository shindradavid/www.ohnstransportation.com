import { type FC } from 'react';
import { Link } from 'react-router';
import { FaGlobeAfrica } from 'react-icons/fa';

import styles from './AboutUsSection.module.scss';

const AboutUsSection: FC = () => {
  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <p className={styles.subTitle}>
              <FaGlobeAfrica />
              <span>About us</span>
            </p>
            <h2>Driving Kampala Forward, One Ride at a Time.</h2>
          </header>

          <p className={styles.text}>
            OHN'S TRANSPORTATION was founded with a single mission: to provide the most reliable, safe, and diverse transport
            services available. We understand the city's dynamics—from traffic congestion to the need for quick response.
          </p>

          <div className={styles.ctaContainer}>
            <Link to="/about-us" className="btn btn-primary">
              Read Our Full Story
            </Link>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src="/images/about-us-feature-image.png"
            alt="OHN'S Transportation team or fleet management at the Kampala office"
            className={styles.image}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
