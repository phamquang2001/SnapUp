import React, { useEffect } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSidebarStatus, setSidebarOff } from "../pages/store/sidebarSlice";
import {
  getAllCategories,
  selectCategories,
} from "../pages/store/categorySlice";

function Sidebar(props) {
  const dispatch = useDispatch();
  const checkSidebar = useSelector(getSidebarStatus);
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const categories = useSelector(selectCategories);

  return (
    <div className={`sidebar ${checkSidebar ? "" : "hide-sidebar"}`}>
      <button onClick={() => dispatch(setSidebarOff())}>
        <i className="fas fa-times"></i>
      </button>
      <div className="all-categories">
        <div>
          <h2>ALL CATEGORIES</h2>
        </div>
        <div className="list-categories">
          <ul>
            {categories.map((e, id) => {
              console.log(e);
              return (
                <li className="text-capitalize" key={id}>
                  <Link to="">{e}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
