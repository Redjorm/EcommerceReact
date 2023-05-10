<<<<<<< HEAD
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCartThunk } from '../store/slices/cart.slices'
import ProductInCart from '../components/Cart/ProductInCart'
import './styles/cart.css'
import usePurchases from '../hooks/usePurchases'
=======
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsCartThunk } from "../store/slices/cart.slices";
import ProductInCart from "../components/Cart/ProductInCart";
import usePurchases from "../hooks/usePurchases";
>>>>>>> 035753b7bbd15d2c73ffd7df59fa34814fb15cc9

const Cart = () => {
  const dispatch = useDispatch();
  const { buyThisCart } = usePurchases();
  useEffect(() => {
    dispatch(getAllProductsCartThunk());
  }, []);

  const { cartGlobal } = useSelector((state) => state);

<<<<<<< HEAD
    const { buyThisCart } = usePurchases()

    useEffect(() => {
        dispatch(getAllProductsCartThunk())
    }, [])
=======
  const totalPriceCart = cartGlobal?.reduce(
    (acc, cv) => acc + cv.quantity * cv.product.price,
    0
  );
>>>>>>> 035753b7bbd15d2c73ffd7df59fa34814fb15cc9

  const handlePurchase = () => {
    buyThisCart()
  };

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cartGlobal?.map((prodCart) => (
          <ProductInCart key={prodCart.id} prodCart={prodCart} />
        ))}
      </div>
      <footer>
        <span>Total:</span>
        <h3>{totalPriceCart}</h3>
        <button onClick={handlePurchase}>Buy Now</button>
      </footer>
    </div>
  );
};

<<<<<<< HEAD
    const totalPriceCart = cartGlobal?.reduce((acc, cv)=> acc + cv.quantity * cv.product.price ,0)

    const handlePurchase = () => {
        buyThisCart()
    }

    return (
        <div>
            <h2>Cart</h2>
            <div>
                {
                    cartGlobal?.map(prodCart => (
                        <ProductInCart
                            key={prodCart.id}
                            prodCart={prodCart} />
                    ))
                }
            </div>
            <footer>
                <span>Total:</span>
                <h3>{totalPriceCart}</h3>
                <button onClick={handlePurchase} className='cart__btn'>Buy now</button>
            </footer>
        </div>
    )
}

export default Cart
=======
export default Cart;
>>>>>>> 035753b7bbd15d2c73ffd7df59fa34814fb15cc9
