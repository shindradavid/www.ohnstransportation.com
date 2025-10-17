import { type FC } from 'react';
import { Link } from 'react-router';

import type { Route } from './+types/index';

import styles from './styles.module.scss';
import Hero from '~/components/common/Hero';

const serviceDetails = [
  {
    id: 'boda-boda',
    title: 'Boda Boda Rides',
    description: `Boda bodas are essential for navigating Kampala's busy streets. We prioritize safety and efficiency. Every ride is tracked via GPS, and our riders are trained and equipped with helmets. Perfect for short distances or beating traffic.`,
    imagePath: '/images/service-boda.png',
    imageAlt: "OHN'S Boda Boda rider wearing a helmet in Kampala traffic.",
  },
  {
    id: 'taxi-cab',
    title: 'Reliable Taxi / Cab Service',
    description: `For longer trips, group travel, or when you simply prefer four wheels, our modern taxi/cab service is your ideal choice. Book instantly, know your fare upfront, and enjoy a comfortable journey with professional drivers.`,
    imagePath: '/images/service-taxi.png',
    imageAlt: "OHN'S Branded modern sedan taxi driving in an urban area.",
  },
  {
    id: 'airport-transfer',
    title: 'Airport Pickups & Transfers',
    description: `Avoid the rush and confusion. Pre-book your transfer to or from Entebbe International Airport (EBB). Our drivers track your flight status to ensure timely pickups, whether you're arriving or departing.`,
    imagePath: '/images/service-airport-pickup.png',
    imageAlt: "Passenger meeting an OHN'S driver with luggage at Entebbe International Airport.",
  },
  {
    id: 'breakdown',
    title: '24/7 Breakdown & Tow Truck',
    description: `Car trouble happens to everyone. Our rapid-response breakdown service and tow truck fleet are available 24 hours a day, 7 days a week, across Uganda to get you and your vehicle to safety.`,
    imagePath: '/images/service-breakdown.png',
    imageAlt: "OHN'S Tow Truck assisting a broken-down vehicle on a Kampala road.",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: 'Kampala Transport Services: Airport pickups, Boda, Taxi, Tow Truck services',
    },
    {
      name: 'description',
      content: `Discover all OHN'S services: Quick boda boda, comfortable taxi/cabs, airport pickups, and emergency breakdown/tow truck assistance across Kampala.`,
    },
  ];
}

const OurServicesPage: FC = () => {
  return (
    <div className={styles.ourServicesPage}>
      <Hero
        backgroundImage="/images/our-services-hero-bg.png"
        title="Our services"
        breadcrumbs={[
          {
            href: '/',
            label: 'Home',
          },
          {
            href: '/our-services',
            label: 'Our services',
          },
        ]}
      />

      <section className={styles.serviceGridSection}>
        <p>
          All of Kampala's transportation needs—from quick rides to emergency breakdown recovery—are managed conveniently through
          the <b>OHN'S App</b>.
        </p>

        <div className={styles.servicesGrid}>
          {serviceDetails.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={`${styles.imageWrapper} aspect-ratio-4x3`}>
                <img src={service.imagePath} alt={service.imageAlt} loading="lazy" />
              </div>

              <div className={styles.cardContent}>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.description}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.container}>
          <h2>Ready to Ride? Get the OHN'S App Today.</h2>
          <p>Experience the easiest way to book transportation in Kampala. Download the app to access all services instantly.</p>
          <Link to="/get-our-app" className="btn btn-primary">
            Download OHN'S APP
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurServicesPage;
