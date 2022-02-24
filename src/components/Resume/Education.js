import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Education/Degree';

const Education = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <p>
        I&apos;m a former machine learning and data engineer, with 8 years
        programming and development experience, who has made the
        transition to product management. I&apos;m most interested in
        working with Machine Learning products and have previous
        experience collaborating with professionals across the spectrum,
        in early and advanced stages, to lead ML projects and build such
        products. The solutions I&apos;ve helped build have made companies more
        customer-obsessed, advanced the state of machine learning at said
        companies, and saved millions of dollars for these companies.
      </p>
      <p>
        In order to further enhance my skills in product management,
        I have enrolled in product management training programs by
        the Northwestern Kellogg School of Management as well as
        Product School. To further enhance my complementary skills
        in Data Science and Machine Learning, I have enrolled in the
        Texas McCombs School of Business&apos;s Data Science and Business
        Analytics Post Graduate program as well at DeepLearning.ai&apos;s
        Deep Learning Specialization.
      </p>
      <p>
        I graduated the Massachusetts Institute of Technology with a Bachelor
        of Science in Computer Science and Engineering (Course 6-3). I also
        earned a degree in Management from the Sloan School of Management
        (Course 15-1) and concentrated in Economics. At MIT, I built a parser
        that beat Stanford&apos;s statistical parser on identifying correct
        phrase structure of sentences over the iconic Gerald Gazdar
        representative corpus.
      </p>
      <p>
        I have an additional passion for teaching. Something I fostered at,
        both, MIT and Pinterest teaching computer science coursework as well
        as software engineering interview training. I have also now been
        hired to teach machine learning to people interested in switching
        domains.
      </p>
      <p>
        I also have a passion for diversity in the tech industry. I&apos;ve been
        involved in numerous initiatives but my favorite was traveling back to
        my hometown of Mayaguez, Puerto Rico to teach computer science fundamentals
        for software engineering interviews as part of my work at Pinterest.
      </p>
      <p>
        I have additional interests in politics and social justice, and leveraging
        tech and data towards improving both. As examples, I worked with MIT CSAIL
        and Tufts MGGG to use geometric computing for assessing redistricting plan
        fairness and fighting gerrymandering during my undergraduate research at
        MIT CSAIL. I&apos;ve also previously worked with numerous organizations
        such as WeVote in hackathons.
      </p>
      <p>
        Outside of work I travel a lot (favorites: Dubai, Singapore, Amsterdam),
        have a passion for fitness and practicing MMA, and enjoy watching podcasts
        and lectures through youtube.
      </p>
      <p>Note: See my <a href="https://www.linkedin.com/in/alexv24/"> LinkedIn </a>  for additional information.</p>
      <h3>Education</h3>
    </div>
    {data.map((degree) => (
      <Degree
        data={degree}
        key={degree.school}
      />
    ))}
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Education.defaultProps = {
  data: [],
};

export default Education;
