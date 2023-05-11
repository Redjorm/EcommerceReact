import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsCartThunk } from "../store/slices/cart.slices";
import ProductInCart from "../components/Cart/ProductInCart";
import "./styles/cart.css";
import usePurchases from "../hooks/usePurchases";

const Cart = () => {
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  const { buyThisCart } = usePurchases();
  useEffect(() => {
    dispatch(getAllProductsCartThunk());
  }, []);

  const { cartGlobal } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllProductsCartThunk());
  }, []);

  const totalPriceCart = cartGlobal?.reduce(
    (acc, cv) => acc + cv.quantity * cv.product.price,
    0
  );

  const handlePurchase = () => {
    buyThisCart();
  };

  if (token == null) {
    return (
      <div className="cart">
        <h2 className="cart__title">Cart</h2>
        <div className="cart__container">
          <p>Log in to see the cart</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <h2 className="cart__title">Cart</h2>
        <div className="cart__container">
          {cartGlobal?.map((prodCart) => (
            <ProductInCart key={prodCart.id} prodCart={prodCart} />
          ))}
        </div>
        <footer className="cart__footer">
          <span className="cart__total-label">Total:</span>
          <h3 className="cart__total-value">${totalPriceCart}</h3>
          <button onClick={handlePurchase} className="cart__btn">
            Buy now
          </button>
        </footer>
      </div>
    );
  }
};
export default Cart;
