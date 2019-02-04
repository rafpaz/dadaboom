import React, { lazy, Suspense } from 'react';

import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';

const Footer = lazy(() => import('../Footer/Footer'));
const About = lazy(() => import('../About/About'));
const Services = lazy(() => import('../Services/Services'));
const Portfolio = lazy(() => import('../Portfolio/Portfolio'));
const Testimonials = lazy(() => import('../Testimonials/Testimonials'));
const Blog = lazy(() => import('../Blog/Blog'));
const Contact = lazy(() => import('../Contact/Contact'));
const Counter = lazy(() => import('../Counter/Counter'));

const Homepage = () => (
  <div>
    <Preloader />
    <Header />
    <Suspense fallback={<Preloader />}>
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact
        source="Homepage"
      />
      <Footer />
    </Suspense>
  </div>
);


export default Homepage;
