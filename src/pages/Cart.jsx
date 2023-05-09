import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsThunk } from '../store/slices/products.slice'
import ProductInCart from '../components/Cart/ProductInCart'

const Cart = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProductsThunk())
    }, [])


    const { cartGlobal } = useSelector(state => state)

    console.log(cartGlobal);

    return (
        <div>
            <h2>Cart</h2>
            {
                cartGlobal?.map(prodCart => (
                    <ProductInCart key={prodCart.id} prodCart={prodCart} />
                ))
            }
        </div>
    )
}

export default Cart