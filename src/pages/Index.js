import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Alex V's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A really awesome statically-generated decentralized react application hosted on IPFS
            and registered on the Ethereum Name Service (ENS).
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
        Welcome to my website. Learn more <a href="/about">about me</a> my <a href="/resume">career</a> or my <a href="/projects">projects</a>.
      </p>
      <p> Source available <a href="https://github.com/amva13/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
