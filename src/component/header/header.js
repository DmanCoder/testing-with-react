import React from 'react';
import Logo from './../../assets/logo/logo.png';

const Header = (props) => {
  return (
    <header data-test="header-component">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoPNG" src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
