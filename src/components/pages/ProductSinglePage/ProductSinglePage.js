import React, { useEffect, useState } from "react";
import "./ProductSinglePage.scss";
import { Link, useParams } from "react-router-dom";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import {
  fetchApiProductSingle,
  getApiProductSingle,
} from "../store/productSlice";
import { addToCart, setCartMessageOff, setCartMessageOn, getCartMessage } from "../store/cartSlice";
import CartMessage from "../../CartMessage/CartMessage";
function ProductSinglePage(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getApiProductSingle);
  const [quantity , setQuantity] = useState(1)
  const getMessage = useSelector(getCartMessage)
  useEffect(() => {
    dispatch(fetchApiProductSingle(id));
    if(getMessage){
        setTimeout(() =>{
            dispatch(setCartMessageOff())
        },2000)
    }
  }, [id, getMessage]);
  

  let discountPrice = (product?.price - product?.price * (product.discountPercentage / 100))?.toFixed(2);
  const increaseQty = ()=> {
    setQuantity((preQty) =>{
        let tempQty = preQty + 1;
        if(tempQty > product?.stock){
            tempQty = product?.stock
        }
        return tempQty
    })
  }
  const decreaseQty = ()=> {
    setQuantity((preQty) =>{
        let tempQty = preQty - 1;
        if(tempQty < 1){
            tempQty = 1
        }
        return tempQty
    })
  }
  const addToCartHandle = (product)=>{
    let discountPrice = product?.price - product?.price * (product.discountPercentage / 100);
    let totalPrice = quantity * discountPrice
    dispatch(addToCart({...product, quantity: quantity, totalPrice, discountPrice }))
    dispatch(setCartMessageOn())
  }
  return (
    <main className="py-5 bg-whitesmoke">
      <div className="product-single">
        <div className="container-product-single">
          <div className="product-single-content bg-white grid">
            <div className="product-single-l">
              <div className="product-img">
                <div className="product-img-zoom">
                  <img
                    src={
                      product ? (product.images ? product.images[0] : "") : ""
                    }
                    alt=""
                    className="img-cover"
                  />
                </div>
              </div>
              <div className="product-img-thumbs">
                <div className="thumb-item">
                  <img
                    src={
                      product ? (product.images ? product.images[1] : "") : ""
                    }
                    alt=""
                    className="img-cover"
                  />
                </div>
                <div className="thumb-item">
                  <img
                    src={
                      product ? (product.images ? product.images[2] : "") : ""
                    }
                    alt=""
                    className="img-cover"
                  />
                </div>
                <div className="thumb-item">
                  <img
                    src={
                      product ? (product.images ? product.images[3] : "") : ""
                    }
                    alt=""
                    className="img-cover"
                  />
                </div>
                <div className="thumb-item">
                  <img
                    src={
                      product ? (product.images ? product.images[4] : "") : ""
                    }
                    alt=""
                    className="img-cover"
                  />
                </div>
              </div>
            </div>
            <div className="product-single-r">
              <div className="product-details">
                <div className="title fs-20 fw-5">
                  {product ? product.title : ""}
                </div>
                <div>
                  <p className="para fw-3 fs-15">
                    {product ? product.description : ""}
                  </p>
                </div>
                <div className="info flex align-center flex-wrap fs-14">
                  <div className="rating">
                    <span className="text-orange fw-5">Rating:</span>
                    <span className="mx-1">
                      {product ? product.rating : ""}
                    </span>
                  </div>
                  <div className="vert-line"></div>
                  <div className="brand">
                    <span className="text-orange fw-5">Brand:</span>
                    <span className="mx-1">{product ? product.brand : ""}</span>
                  </div>
                  <div className="vert-line"></div>
                  <div className="brand">
                    <span className="text-orange fw-5">Category:</span>
                    <span className="mx-1 text-capitalize">
                      {product?.category
                        ? product.category.replace("_", " ")
                        : ""}
                    </span>
                  </div>
                </div>
              </div>
              <div className="price-single-product">
                <span className="old-price-single-product">{product.price}$</span>
                <span className="new-price-single-product text-uppercase">
                  {discountPrice} $
                </span>
                <span className="discount-percent">
                  {product.discountPercentage}% Off
                </span>
              </div>
              <div className="qty">
                <div className="qty-text">Quantity: </div>
                <div className="qty-change">
                  <button onClick={decreaseQty} className="qty-decrease">
                    <i className="fas fa-minus"></i>
                  </button>
                  <div className="qty-value">{quantity}</div>
                  <button onClick={increaseQty} className="qty-increase">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                {product?.stock === 0 ? (
                  <div className="text-uppercase">Out of stock</div>
                ) : (
                  ""
                )}
              </div>
              <div className="btns">
                <button onClick={() =>addToCartHandle(product)} className="add-to-cart">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="btn-text">Add to Cart</span>
                </button>
                <Link to="/checkout">
                  <button onClick={() => addToCartHandle(product)} className="buy-now">
                    <span className="btn-text">Buy Now</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {getMessage && <CartMessage/>}
    </main>
  );
}

export default ProductSinglePage;
