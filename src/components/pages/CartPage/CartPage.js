import React from "react";
import "./CartPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllCarts,
  removeFromCart,
  toggleCartQty,
  clearCart,
} from "../store/cartSlice";
function CartPage(props) {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const { itemsCount, totalAmount } = useSelector((state) => state.cart);
  if (carts.length === 0) {
    return (
      <div className="cart">
        <div className="empty-cart">
          <span>Your shopping cart is empty!</span>
          <Link to="/">Go Shopping Now!</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="cart">
      <div className="cart-header">
        <p>S.N.</p>
        <p>Product</p>
        <p>Unit Price</p>
        <p>Quantity</p>
        <p>Total Price</p>
        <p>Action</p>
      </div>
      <div className="cart-bottom">
        {carts.map((e, idx) => (
          <div className="cart-detail" key={e.id}>
            <p>{idx + 1}</p>
            <p>{e?.title}</p>
            <p className="unit-price">{e?.discountPrice?.toFixed(2)} $</p>
            <p className="qty-cart">
              <button
                onClick={() =>
                  dispatch(toggleCartQty({ id: e.id, type: "DEC" }))
                }
                className="qty-decrease"
              >
                <i className="fas fa-minus"></i>
              </button>
              <p>{e?.quantity}</p>
              <button
                onClick={() =>
                  dispatch(toggleCartQty({ id: e.id, type: "INC" }))
                }
                className="qty-increase"
              >
                <i className="fas fa-plus"></i>
              </button>
            </p>
            <p>{e?.totalPrice?.toFixed(2)} $</p>
            <p>
              <button
                onClick={() => {
                  dispatch(removeFromCart(e));
                }}
              >
                <i class="fa-solid fa-x"></i>
              </button>
            </p>
          </div>
        ))}
      </div>
      <div className="cart-cfoot">
        <div className="cart-cfoot-l">
          <button
            className="btn-clear-cart"
            onClick={() => dispatch(clearCart())}
          >
            <i class="fa-solid fa-trash"></i>Clear Cart
          </button>
        </div>
        <div className="cart-cfoot-r">
          <div className="cart-cfoot-amount">
            Total ({itemsCount}) items:{" "}
            <p className="total-amount-cart">{totalAmount.toFixed(2)} $</p>
          </div>
          <button className="btn-check-out">
            <Link to="/checkout">Check Out </Link>
          </button>
        </div>
      </div>
      <div className="go-back-to-homepage">
        <Link to="/"> &gt;&gt;&gt; Continue shopping !</Link>
      </div>
    </div>
  );
}

export default CartPage;
