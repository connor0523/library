import React from "react";
import { books } from "../data";

const Cart = () => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row1">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
            </div>
            <div className="cart__body">
              <div className="cart__item">
                <div className="cart__book">
                  <img
                    src="https://covers.openlibrary.org/b/id/8091016-L.jpg"
                    className="cart__book--img"
                    alt=""
                  />
                  <div className="cart__book--info">
                    <span className="cart__book--title">
                      Crack the coding interview
                    </span>
                    <span className="cart__book--price">$10.00</span>
                    <button className="cart__book--remove">Remove</button>
                  </div>
                </div>
                <div className="cart__quantity1">
                    <input type="number" min={0} max={99} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
