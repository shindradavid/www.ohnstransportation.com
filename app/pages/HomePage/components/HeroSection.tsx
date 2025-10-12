import { type FC } from 'react';
import { Link } from 'react-router';
import { FaTaxi } from 'react-icons/fa';
import { PiWrenchDuotone } from 'react-icons/pi';

import styles from './HeroSection.module.scss';

const HeroSection: FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src="/images/home-hero-bg-1.png"
          alt="OHN'S Transportation vehicles (Taxi, Boda, Tow Truck) on a busy Kampala street"
          loading="eager"
        />
        <div className={styles.heroOverlay}></div>
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heading}>
          Your City, Your Ride. <br />
          Seamless Transport in Kampala.
        </h1>

        <p className={styles.subheading}>
          Order Airport pickups, Boda Boda, reliable Taxi/Cab, or breakdown services instantly with the OHN'S APP.
        </p>

        <div className={styles.ctaGroup}>
          <Link to="/get-our-app" className={`${styles.ctaButton} ${styles.primary}`}>
            <FaTaxi />
            <span>Get The OHN'S App</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
