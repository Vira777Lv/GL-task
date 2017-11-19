import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import RatingWidget from '../../components/ratingWidget/RatingWidget';
import skills from '../../utils/skillsData';

import styles from './Skills.css';


function Skills() {
  return (
    <ScrollableAnchor id="skills">
      <section className={styles.skills}>
        <h2>Skills</h2>
        <div className={styles.container}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillsItem}>
              <h3>{skill.name}</h3>
              <RatingWidget level={skill.level} />
            </div>
          ))}
        </div>
      </section>
    </ScrollableAnchor>
  );
}

export default Skills;
