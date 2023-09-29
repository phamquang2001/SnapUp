import React, { useEffect } from "react";
import "./SearchPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductList from "../../ProductList/ProductList";
import {
  fetchApiProductSearch,
  getApiProductSearch,
} from "../store/searchSlice";
function SearchPage(props) {
  const { searchTerm } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiProductSearch(searchTerm));
  }, [searchTerm]);
  const searchProduct = useSelector(getApiProductSearch);
  if (searchProduct.length === 0) {
    return (
      <div className="not-found-product" style={{ minHeight: "74vh" }}>
        <h2>Not found!!!</h2>
      </div>
    );
  }
  return (
    <div className="container-search-page">
      <div className="main-container">
        <div className="categories">
          <div className="title-main">
            <h3>Search Result: </h3>
          </div>
        </div>
        <ProductList products={searchProduct} />
      </div>
    </div>
  );
}

export default SearchPage;
