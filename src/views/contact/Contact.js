import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import ContactForm from '../../components/form/Form';

import styles from './Contact.css';

function Contact() {
  return (
    <ScrollableAnchor id="contact">
      <section className={styles.contact}>
        <h2>Contact</h2>
        <div className={styles.contactBlock}>
          <ul>
            <li>
              <p>Phone number:</p>
              <span>+38066-66-66-666</span>
            </li>
            <li>
              <p>Email:</p>
              <span>mail@gmail.com</span>
            </li>
            <li>
              <p>Skype:</p>
              <span>mySkypeAcc</span>
            </li>
          </ul>
          <ContactForm />
        </div>
      </section>
    </ScrollableAnchor>
  );
}

export default Contact;
