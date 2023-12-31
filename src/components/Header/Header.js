import React from "react";
import "./Header.scss";
import Navbar from "../Navbar/Navbar";
import { Link} from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="header-top-l">
            <ul>
              <li>
                <Link to="/" className="item-header-top">
                  {" "}
                  Seller Center
                </Link>
              </li>
              <li className="vert-line"></li>
              <li>
                <Link to="/" className="item-header-top">
                  {" "}
                  Download
                </Link>
              </li>
              <li className="vert-line"></li>
              <li className="list-follow-us">
                <span>Follow us on</span>
                <ul>
                  <li>
                    <a href="https://www.facebook.com">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li className="vert-line"></li>
                  <li>
                    <a href="https://www.instagram.com">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="vert-line"></li>
                  <li>
                    <a href="https://www.twitter.com">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="header-top-r">
            <ul>
              <li>
                <i class="fa-solid fa-circle-question"></i>
                <span style={{ marginLeft: "10px" }}>Support</span>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="header-bottom">
          <Navbar/>
        </div>
      </div>
    </header>
  );
}

export default Header;
