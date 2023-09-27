import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getApiProductByCategory,
  fetchApiProductByCategory,
} from "../store/categorySlice";
import ProductList from "../../ProductList/ProductList";
function CategoryProduct(props) {
  console.log("abc");
  const { category } = useParams();
  const dispatch = useDispatch();
  const productByCategory = useSelector(getApiProductByCategory);
  console.log(productByCategory);

  useEffect(() => {
    dispatch(fetchApiProductByCategory(category));
  }, [category]);
  return (
    <main>
        <div className="main-container">
          <div className="categories">
            <div className="title-main">
              <h3 className="text-uppercase">{category}</h3>
            </div>
          </div>
          <ProductList products={productByCategory} />
        </div>
    </main>
  );
}

export default CategoryProduct;
