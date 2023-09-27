import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <footer className="footer bg-orange">
      <div className="container">
        <div className="text-white about-snapup">
          <Link to="/" className="text-uppercase text-white">
            Privacy Policy
          </Link>
          <div className="vert-line"></div>
          <Link to="/" className="text-uppercase text-white">
            Terms of Service
          </Link>
          <div className="vert-line"></div>
          <Link to="/" className="text-uppercase text-white">
            About SnapUp
          </Link>
        </div>
        <div className="copy-right">
          <span className="text-white copyright-text text-manrope fs-14 fi-3">
            &copy; 2023 SnapUp. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
