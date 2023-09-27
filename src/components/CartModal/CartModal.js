import React from "react";
import "./CartModal.scss";
import { Link } from "react-router-dom";
function CartModal(props) {
  const { carts, itemsCount } = props;
  console.log(carts);
  console.log(itemsCount);
  let totalPriceMiniCart = 0;
  return (
    <div>
      {itemsCount > 0 ? (
        <div className="cart-modal-detail">
          <h6>Recenlty Added Carts</h6>

          <div className="detail-cart">
            <div className="list-mini-cart"></div>
            <div className="list-mini-cart">Product</div>
            <div className="list-mini-cart">TotalPrice</div>
          </div>
          <ul>
            {carts.map((e) => {
              totalPriceMiniCart += e.totalPrice;
              return (
                <li className="detail-cart">
                  <Link to={`/product/${e?.id}`} alt={e.title}>
                    {" "}
                    <img src={e?.thumbnail}></img>
                  </Link>
                  <Link to={`/product/${e?.id}`}>{e?.title}</Link>
                  <div style={{ color: "red" }}>
                    {e?.totalPrice?.toFixed(2)} $
                  </div>
                </li>
              );
            })}
          </ul>
          {/* <div className="horizan-line" style={{padding: '0px 10px'}}></div>
           */}
          <div className="horizan-line"></div>
          <div className="totalPriceMiniCart">
            Price Cart: {totalPriceMiniCart?.toFixed(2)} $
          </div>
          <Link to="/cart" className="viewShoppingCarts">
            <button>&gt;&gt;&gt; View Shopping Carts</button>
          </Link>
        </div>
      ) : (
        <div className="cart-modal-detail">
          <div className="cart-modal-detail-empty">
            <h6>Your shopping cart is empty !</h6>
            <Link to="/">Go Shopping Now!</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartModal;
