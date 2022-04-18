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
        <h2>Alex V</h2>
        <p><a href="mailto:alex@alexv24.com">alex@alexv24.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Alex. I&apos;m a product manager working on exciting Web 3.0
        projects. Outside of work he enjoys many latin dances, international
        traveling, exploring new cuisines, obstacle racing, athletics, and
        podcasts through spotify and youtube. Click below to learn more !
      </p>
      <ul className="actions">
        <li>
          <Link to="/about" className="button">Learn More</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Alex V <Link to="/">alexv24.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
