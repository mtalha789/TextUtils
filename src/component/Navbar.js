import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const aboutactive=()=>{
    document.getElementById('about').classList.add('active');
    document.getElementById('home').classList.remove('active')
  }
  const homeactive=()=>{
    document.getElementById('home').classList.add('active');
    document.getElementById('about').classList.remove('active')
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-body-tertiary" data-bs-theme={props.mode}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" onClick={homeactive} id='home' aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id='about' to="/about" onClick={aboutactive}>{props.about}</Link>
        </li>
        
        {/* <li className="nav-item">
          <Link className="nav-link disabled">Disabled</Link>
        </li> */}
      </ul>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode} />
        <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes={ title: PropTypes.string.isRequired,
  about: PropTypes.string
}
Navbar.defaultProps={
    title:"talha",
    about:"About"
}

