import { FaHandsHelping, FaHeart, FaLightbulb, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router';

import type { Route } from './+types/index';

import styles from './styles.module.scss';
import Hero from '~/components/common/Hero';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About OHN'S Transportation - Kampala, Uganda" },
    {
      name: 'description',
      content: `Learn how OHN'S is revolutionizing transport safety and convenience in Kampala with our dedicated drivers, modern fleet, and all-in-one OHN'S APP.`,
    },
  ];
}

const coreValues = [
  {
    icon: <FaShieldAlt />,
    title: 'Safety First',
    description: `We prioritize the well-being of our customers and drivers. This means rigorous vetting, helmet provision, and GPS tracking on every trip.`,
  },
  {
    icon: <FaLightbulb />,
    title: 'Innovation',
    description: `We utilize the latest technology (The OHN'S App) to ensure instant booking, transparent pricing, and efficient service delivery.`,
  },
  {
    icon: <FaHandsHelping />,
    title: 'Reliability',
    description: `When you book OHN'S, you can count on us. Our commitment is timely service, 24/7 availability, and professional assistance.`,
  },
  {
    icon: <FaHeart />,
    title: 'Local Commitment',
    description: `We are a Ugandan company, dedicated to improving the transport ecosystem in Kampala and empowering our local drivers.`,
  },
];

const AboutUsPage = () => {
  return (
    <div className={styles.aboutUsPage}>
      <Hero
        backgroundImage="/images/about-us-hero-bg.jpg"
        title="About us"
        breadcrumbs={[
          {
            href: '/',
            label: 'Home',
          },
          {
            href: '/about-us',
            label: 'About us',
          },
        ]}
      />

      {/* Our Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <h2>Our Journey: Built for Kampala's Needs</h2>
            <p className={styles.storyText}>
              <b>OHN'S TRANSPORTATION</b> was founded after recognizing a critical need for a unified, reliable, and
              technology-driven transport system in the heart of Uganda. We saw the chaos of fragmented services—boda bodas, taxis,
              and breakdown services operating independently—and set out to consolidate them under one trusted banner:{' '}
              <b>The OHN'S APP.</b>
            </p>
            <p className={styles.storyText}>
              Our commitment goes beyond just convenience. We employ rigorous training programs for our drivers, invest in
              technology for passenger security, and maintain a modern, clean fleet. By choosing OHN'S, you are choosing a company
              that is 100% committed to local empowerment and raising the standard of urban mobility.
            </p>
            <p className={styles.storyText}>
              We are constantly evolving, always listening to the needs of the Kampala community, and striving to be the most
              trusted name on the road.
            </p>
            <Link to="/contact-us" className="btn btn-primary">
              Partner With Us
            </Link>
          </div>

          <div className={styles.storyImageWrapper}>
            <img
              src="/images/about-us-feature-image.png"
              alt="Panoramic view of OHN'S Headquarters or Kampala cityscape."
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <header className={styles.valuesHeader}>
            <h2>Our Core Values</h2>
            <p>These principles guide every decision, from app development to driver training.</p>
          </header>

          <div className={styles.valuesGrid}>
            {coreValues.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.iconContainer}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
