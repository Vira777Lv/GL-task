import React from 'react';
import HomePage from '../homePage/HomePage';
import About from '../about/About';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

import styles from './App.css';

function App() {
  return (
    <div className={styles.container}>
      <HomePage />
      <main className={styles.main}>
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
