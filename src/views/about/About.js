import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import avatar from '../../../public/img/avatar-256.png';

import styles from './About.css';

function About() {
  return (
    <ScrollableAnchor id="about">
      <section className={styles.about}>
        <h2>About</h2>
        <div className={styles.info}>
          <div className={styles.goals}>
            <h3>Goals</h3>
            <p>
              Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo,
              pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet,
              non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis,
              vehicula amet nullam convallis adipiscing ut sit, sit viverra.
              Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend.
              Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut,
              integer ut dignissim harum
            </p>
          </div>
          <img src={avatar} className={styles.avatar} alt="avatar" />
          <div className={styles.dreams}>
            <h3>Dreams</h3>
            <p>
              Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo,
              pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet,
              non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis,
              vehicula amet nullam convallis adipiscing ut sit, sit viverra.
              Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend.
              Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut,
              integer ut dignissim harum
            </p>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
}

export default About;
