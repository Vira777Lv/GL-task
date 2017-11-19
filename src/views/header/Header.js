import React from 'react';
import Logo from '../../components/logo/Logo';

import styles from './Header.css';

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul className={styles.mainMenu}>
          <li><a href="#home" className={styles.active}>Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className={styles.mobileMenu}>.</div>
      </nav>
    </header>
  );
}

export default Header;
