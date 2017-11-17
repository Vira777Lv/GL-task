import React from 'react';

import styles from './RatingWidget.css';


function RatingWidget(props) {
  const { level } = props;
  const ratingSkills = [];

  for (let i = 0; i < 10; i++) {
    ratingSkills.push(
      <li className={level >= i ? styles.black : styles.grey}>&#9679;</li>,
    );
  }

  return (
    <ul className={styles.skillsList}>
      {ratingSkills}
    </ul>
  );
}

export default RatingWidget;
