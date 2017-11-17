import React from 'react';
import Logo from '../../components/logo/Logo';

import styles from './Footer.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>Mobile: +38066-66-66-666</li>
        <li>Email: mail@gmail.com</li>
        <li>Skype: mySkypeAcc</li>
      </ul>
      <Logo />
    </footer>
  );
}

export default Footer;
