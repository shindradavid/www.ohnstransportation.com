import { FaClock, FaEnvelope, FaPhone, FaWrench } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

import type { Route } from './+types/index';

import Hero from '~/components/common/Hero';
import styles from './styles.module.scss';

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Contact OHN'S Transportation - Support & Inquiries",
    },
    {
      name: 'description',
      content: `Get in touch with OHN'S customer support in Kampala, Uganda. For booking help, partnership inquiries, or emergency services, call or message us today.`,
    },
  ];
}

const contactChannels = [
  {
    icon: <FaPhone />,
    title: 'Phone & Emergency Line',
    detail: '+256700540249',
    ctaText: 'Call Now',
    link: 'tel:+256700540249',
  },
  {
    icon: <BsWhatsapp />,
    title: 'WhatsApp Booking',
    detail: '+256 700 540249',
    ctaText: 'Message Us',
    link: 'https://wa.me/256700540249',
  },
  {
    icon: <FaEnvelope />,
    title: 'General Inquiries',
    detail: 'ohnstransportations@gmail.com',
    ctaText: 'Send Email',
    link: 'mailto:ohnstransportations@gmail.com',
  },
];

const ContactUsPage = () => {
  return (
    <div className={styles.contactUsPage}>
      <Hero
        backgroundImage="/images/contact-us-hero-bg.jpg"
        title="Contact us"
        breadcrumbs={[
          {
            href: '/',
            label: 'Home',
          },
          {
            href: '/contact-us',
            label: 'Contact us',
          },
        ]}
      />

      <section className={styles.channelsSection}>
        <div className={styles.container}>
          <div className={styles.channelsGrid}>
            {contactChannels.map((channel, index) => (
              <a
                key={index}
                href={channel.link}
                target={channel.link.startsWith('http') ? '_blank' : '_self'}
                rel={channel.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={styles.channelCard}
              >
                <div className={styles.iconContainer}>{channel.icon}</div>
                <h2 className={styles.channelTitle}>{channel.title}</h2>
                <p className={styles.channelDetail}>{channel.detail}</p>
                <span className={`btn btn-primary ${styles.channelCta}`}>{channel.ctaText}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.emergencyNotice}>
        <div className={styles.container}>
          <div className={styles.noticeContent}>
            <FaWrench className={styles.noticeIcon} />
            <h2>24/7 Breakdown & Emergency Support</h2>
            <p>
              For urgent roadside assistance or vehicle recovery, call our dedicated line immediately. Our tow truck and breakdown
              team is available 24 hours a day, 7 days a week.
            </p>
            <a href="tel:+256700540249" className="btn btn-secondary">
              <FaPhone /> Call Emergency Line
            </a>
          </div>

          <div className={styles.hoursContent}>
            <FaClock className={styles.hoursIcon} />
            <h3>General Office Hours</h3>
            <p>Monday - Friday: 8:00 AM - 5:00 PM (EAT)</p>
            <p>Saturday: 9:00 AM - 1:00 PM (EAT)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
