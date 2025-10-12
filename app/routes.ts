import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  layout('components/layout/RootLayout/index.tsx', [
    index('pages/HomePage/index.tsx'),
    route('about-us', 'pages/AboutUsPage/index.tsx'),
    route('our-services', 'pages/OurServicesPage/index.tsx'),
    route('contact-us', 'pages/ContactUsPage/index.tsx'),
    route('get-our-app', 'pages/GetOurAppPage/index.tsx'),
  ]),
] satisfies RouteConfig;
