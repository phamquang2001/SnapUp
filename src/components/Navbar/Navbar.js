import React, { useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { setSidebarOn } from "../pages/store/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { getSidebarStatus } from "../pages/store/sidebarSlice";
import {
  getAllCategories,
  selectCategories,
} from "../pages/store/categorySlice";
function Navbar(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  const categories = useSelector(selectCategories);
  return (
    <div className="navbar">
      <div className="horizan-line"></div>
      <div className="navbar-container">
        <div className="menu-sidebar">
          <button
            type="button"
            className="sidebar-btn"
            onClick={() => dispatch(setSidebarOn())}
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
        <div className="icon-store">
          <i class="fa-solid fa-store"></i>
          <span>SnapUp</span>
        </div>
        <div className="search">
          <form class="search-form">
            <input type="text" placeholder="Search" />
            <button type="submit">Search</button>
          </form>
          <ul className="item-list-search">
            {categories.slice(0, 8).map((e, id) => {
              return (
                <li key={id}>
                  <Link to=''>{e}</Link>
                </li>
              );
            })}
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
