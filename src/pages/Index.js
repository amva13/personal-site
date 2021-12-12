import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Alejandro Velez's personal website. San Francisco based MIT Computer Science and MIT Sloan graduate, "
    + 'ex-researcher at CSAIL, Sloan, and AeroAstro ; ex Machine Learning Infrastructure Software Engineer at Pinterest.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
            ** Work In Progress **
          </p>
        </div>
      </header>
      {/* <p> Welcome to my website. Please feel free to read more
      <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p> */}
      <p>
        Welcome to my website. Currently under development.
        Stay tuned for updates !
      </p>
      <p> Source available <a href="http://www.alejandrovelez.io">here</a>.</p>
    </article>
  </Main>
);

export default Index;
