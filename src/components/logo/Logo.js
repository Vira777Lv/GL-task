import React from 'react';

import imgLogo from '../../../public/img/logo.png';

function Logo() {
  return (
    <a href="#home">
      <img src={imgLogo} alt="logo" />
    </a>
  );
}

export default Logo;
