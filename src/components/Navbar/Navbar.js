import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { setSidebarOn } from "../pages/store/sidebarSlice";
function Navbar(props) {
  return (
    <div className="navbar">
      <div className="horizan-line"></div>
      <div className="navbar-container">
        <div className="menu-sidebar">
          <button type="button" className="sidebar-btn">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
        <div>
          <i class="fa-solid fa-store"></i>
          <span>SnapUp</span>
        </div>
        <div className="search">
          <form class="search-form">
            <input type="text" placeholder="Search" />
            <button type="submit">Search</button>
          </form>
          <ul>
            <li>
              <Link className="item-list-search">Category here</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-cart">
          <Link>
            <i className="fa-solid fa-cart-shopping cart-item"></i>
            <div className="cart-item-value">0</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
