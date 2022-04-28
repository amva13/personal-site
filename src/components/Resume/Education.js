import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Education/Degree';

const Education = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="blurb">
      <p text-align="left">
        Alex is an entrepreneur, product manager, and engineer.
        His experience has included product management, management
        consulting, data science, data engineering, equities options trading,
        and software engineering. Outside of work he enjoys many latin dances,
        international traveling, exploring new cuisines, obstacle racing,
        athletics, and podcasts and lectures through spotify and youtube.
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
