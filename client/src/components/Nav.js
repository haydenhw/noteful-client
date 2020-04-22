import React from 'react';

const style = {
  nav: {
    paddingLeft: '15px',
  }
}

function Nav() {
  return (
    <nav>
      <div style={style.nav} className="nav-wrapper">
        <a href="#" className="brand-logo">Noteful</a>
      </div>
    </nav>
  );
}

export default Nav;
