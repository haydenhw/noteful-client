import React from 'react';
import {Link} from "react-router-dom";

const style = {
  nav: {
    paddingLeft: '15px',
  }
}

function Nav() {
  return (
    <nav>
      <div style={style.nav} className="nav-wrapper">
        <Link className="brand-logo" to='/'>Noteful</Link>
      </div>
    </nav>
  );
}

export default Nav;
