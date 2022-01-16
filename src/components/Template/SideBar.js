import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Alejandro Velez</h2>
        <p><a href="mailto:alejandro@alejandrovelez.io">alejandro@alejandrovelez.io</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Alejandro. Frequent traveler, Fitness enthusiast, and dog parent. Currently working on self-driving cars at <a href="https://getcruise.com/">Cruise</a>.
      </p>
      <ul className="actions">
        <li>
          <Link to="/about" className="button">Learn More</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Alejandro Velez <Link to="/">alejandrovelez.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
