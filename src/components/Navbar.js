import React, { useState } from "react";
import { Link } from "gatsby";

import logo from "../img/hornetlab/hornetlab_logo_grey.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main-navigation"
    >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" activeClassName="is-active" title="Logo" style={{ paddingTop: "0", paddingBottom: "0" }}>
            <img src={logo} alt="Dronarnia" style={{ height: "120px", width: "auto", marginRight: ".75rem", padding: "0" }} />
            <span>HornetLab</span>
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div id="navMenu" className={` navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
          {/* <div className="navbar-start">
            <Link className="navbar-item" activeClassName="is-active" to="/">Головна</Link>
            <Link className="navbar-item" activeClassName="is-active" to="/feature">Напрямки діяльності</Link>
          </div> */}
          <div className="navbar-end">
            {/* <Link className="navbar-item" activeClassName="is-active" to="/faq">Часті Запитання</Link>
            <Link className="navbar-item" activeClassName="is-active" to="/blog">Хроніки</Link>
            <Link className="navbar-item" activeClassName="is-active" to="/products">Ветеранка</Link> */}
            <div className="navbar-item">
              <div className="buttons has-addons is-centered">
                <Link className="button is-warning" to="/donate">Підтримати</Link>
                {/* <a className="button is-info is-light" href="https://airtable.com/shrjr9gavatDWRilm" target="_blank" rel="noopener noreferrer">Подати заявку</a> */}
              </div>
            </div>
            {/* <Link className="navbar-item" to="/">UA</Link>
            <Link className="navbar-item" to="/en">EN</Link> */}

            </div>
        </div>

    </nav>
  );
};

export default Navbar;
