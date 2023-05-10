<<<<<<< HEAD
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
=======
import React from "react";

const ProductPurchase = ({ prodPurchase }) => {
  return (
    <article>
      <img src={prodPurchase.product.images[0].url} alt="" />
      <h3>{prodPurchase.product.title}</h3>
      <span>{prodPurchase.quantity} </span>
      <span>{prodPurchase.quantity * prodPurchase.product.price}</span>
    </article>
  );
};

export default ProductPurchase;
>>>>>>> 035753b7bbd15d2c73ffd7df59fa34814fb15cc9
