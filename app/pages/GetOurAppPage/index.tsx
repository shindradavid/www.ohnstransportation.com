import styles from './styles.module.scss';

import type { Route } from './+types/index';
import Hero from '~/components/common/Hero';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Download OHN'S APP: Boda, Taxi & Breakdown Online" },
    {
      name: 'description',
      content: `Get the official OHN'S APP for instant bookings! Order a boda, taxi, or breakdown service anywhere in Kampala, track your ride, and pay securely.`,
    },
  ];
}

const GetOurAppPage = () => {
  return (
    <div className={styles.getAppPage}>
      <Hero
        backgroundImage="/images/get-our-app-hero-bg.jpg"
        title="Get our app"
        breadcrumbs={[
          {
            href: '/',
            label: 'Home',
          },
          {
            href: '/get-our-app',
            label: 'Get our app',
          },
        ]}
      />

      <section className={styles.comingSoonSection}>
        <div className={styles.content}>
          <h1>The OHN'S App is Coming Soon!</h1>

          <p>
            We're building Kampala's most integrated transport app, putting Airport pickups, Boda Boda, Taxi, and 24/7 Breakdown
            services in your pocket. Get instant bookings, GPS tracking, and secure payments.
          </p>
        </div>
      </section>
    </div>
  );
};

export default GetOurAppPage;
