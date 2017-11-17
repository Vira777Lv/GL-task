import React from 'react';

import imgLogo from '../../../public/img/logo.png';
import styles from './Logo.css';

function Logo() {
  return (
    <a href="#home" className={styles.logo}>
      <img src={imgLogo} alt="logo" />
    </a>
  );
}

export default Logo;
