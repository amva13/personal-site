import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';
import courses from '../data/resume/courses';

const sections = [
  'Experience',
  'Education',
  'Skills',
  'Courses',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    /* description="Alex V's Resume. Arthena, Matroid, YC, Skeptical Investments,
    Stanford ICME, Planet Labs, and Facebook." */
    description="Alex V's resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      {/* <Education data={degrees} />
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References /> */}
      <Experience data={positions} />
      <Education data={degrees} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References />

    </article>
  </Main>
);

export default Resume;
