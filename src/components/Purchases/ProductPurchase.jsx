import React from 'react'

const ProductPurchase = ({ productPurchase }) => {


    return (
        <article>
            <img src={productPurchase.product.images[0].url} alt="" />
            <h2>{productPurchase.product.title}</h2>
            <span>{productPurchase.quantity}</span>
            <span>{productPurchase.quantity * productPurchase.product.price}</span>
        </article>
    )
}

export default ProductPurchase