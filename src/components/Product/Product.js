import React from "react";
import "./Product.scss";
import { Link } from "react-router-dom";

function Product(props) {
  const { product } = props;
  return (
    <Link to={`/product/${product?.id}`} key={product?.id}>
      <div className="product-item">
        <div className="categories-item">{product.category}</div>
        <div className="product-item-img">
          <img src={product.images[0]} alt={product.title}></img>
        </div>
        <div className="product-item-info">
          <div className="brand">
            <span>Brand: </span>
            <span className="text-uppercase">{product.brand}</span>
          </div>
        </div>
        <div className="title">{product.title}</div>
        <div className="price">
          <span className="old-price">${product.price}</span>
          <span className="new-price text-uppercase">${product.discountPrice}</span>
          <span className="discount-percent">({product.discountPercentage}% Off)</span>
        </div>
      </div>
    </Link>
  );
}

export default Product;
