import React, { useEffect, useState } from "react";
import "./CheckOut.scss";
import {
  getAllCarts,
  toggleCartQty,
  removeFromCart,
  clearCart,
} from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
function CheckOut(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const [displaySubmit, setDisplaySubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const validateForm = () => {
    if (name.trim() === "") {
      toast.error("Please enter your name.");
      return false;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    if (card.trim() === "" || !/^\d{16}$/.test(card)) {
      toast.error("Please enter a valid card number (16 digits).");
      return false;
    }
    if (expiry.trim() === "" || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
      toast.error("Please enter a valid expiration date (MM/YY format).");
      return false;
    }
    if (cvv.trim() === "" || !/^\d{3,4}$/.test(cvv)) {
      toast.error("Please enter a valid CVV (3 or 4 digits).");
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    debugger;
    if (validateForm() == true) {
      toast.info("Success!");
      dispatch(clearCart());
      navigate("/");
    }
  };

  const { itemsCount, totalAmount } = useSelector((state) => state.cart);
  return (
    <div className="container-checkout">
      <div class="left-section">
        <h1>Shipping information</h1>
        <form>
          <label for="name">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            value={name}
            required
          />
          <label for="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={email}
            required
          />
          <label for="card">Card</label>
          <input
            onChange={(e) => setCard(e.target.value)}
            placeholder="Card"
            type="text"
            id="card"
            name="card"
            value={card}
            required
          />
          <label for="expiry">Date</label>
          <input
            onChange={(e) => setExpiry(e.target.value)}
            type="text"
            id="expiry"
            name="expiry"
            value={expiry}
            placeholder="MM/YY"
            required
          />

          <label for="cvv">CVV</label>
          <input
            onChange={(e) => setCvv(e.target.value)}
            placeholder="CVV"
            type="text"
            id="cvv"
            value={cvv}
            name="cvv"
            required
          />
          <button
            onClick={() => {
              handleSubmit();
            }}
            className="btn-submit-checkout"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div class="right-section">
        <div class="order-summary">
          <h2>Cart</h2>
          <div className="cart-header">
            <p>Image</p>
            <p>Product</p>
            <p>Unit Price</p>
            <p>Quantity</p>
            <p>Total Price</p>
            <p>Action</p>
          </div>
          <div className="cart-bottom">
            {carts.map((e) => (
              <div className="cart-detail" key={e.id}>
                <Link to={`/product/${e?.id}`}>
                    <p>
                      <img
                        className="img-product-checkout"
                        src={e?.thumbnail}
                      ></img>
                    </p>
                </Link>
                <Link to={`/product/${e?.id}`}><p>{e?.title}</p></Link>
                <p>{e?.discountPrice?.toFixed(2)} $</p>
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
                    Delete
                  </button>
                </p>
              </div>
            ))}
          </div>
          <div className="cart-cfoot">
            <div className="cart-cfoot-r">
              <div className="cart-cfoot-amount">
                Total ({itemsCount}) items:{" "}
                <p className="total-amount-cart">{totalAmount.toFixed(2)} $</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
