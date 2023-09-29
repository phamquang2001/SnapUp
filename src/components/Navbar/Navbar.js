import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { setSidebarOn } from "../pages/store/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { getSidebarStatus } from "../pages/store/sidebarSlice";
import {
  getAllCategories,
  selectCategories,
} from "../pages/store/categorySlice";
import {
  getAllCarts,
  getCartItemsCount,
  getCartTotal,
} from "../pages/store/cartSlice";
import CartModal from "../CartModal/CartModal";
function Navbar(props) {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getCartTotal());
  }, [carts]);
  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
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
        <Link to="/" style={{ color: "#ffffff" }}>
          <div className="icon-store">
            <img style={{width: '30px'}} src="logoSnapUp.jpg" />
            <span>SnapUp</span>
          </div>
        </Link>
        <div className="search">
          <form class="search-form">
            <input
              onChange={(e) => handleSearchTerm(e)}
              type="text"
              placeholder="Search your preferred items here"
            />
            <Link to={`search/${searchTerm}`}>
              <button type="submit">Search</button>
            </Link>
          </form>
          <ul className="item-list-search">
            {categories.slice(0, 8).map((e, id) => {
              return (
                <li key={id}>
                  <Link to={`/product/category/${e}`}>{e}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-cart">
          <Link>
            <i className="fa-solid fa-cart-shopping cart-item"></i>
            <div className="cart-item-value">{itemsCount}</div>
            <div className="cart-modal">
              <CartModal carts={carts} itemsCount={itemsCount} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
