import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Header from '../header/Header';

import styles from './HomePage.css';

function HomePage() {
  return (
    <div className={styles.banner}>
      <Header />
      <ScrollableAnchor id="home">
        <div className={styles.title}>
          <h1>Name Surname</h1>
          <h2>Front-end developer</h2>
        </div>
      </ScrollableAnchor>
    </div>
  );
}

export default HomePage;
