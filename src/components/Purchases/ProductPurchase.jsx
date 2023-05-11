import React from 'react'


const productPurchase = ({ prodPurchase }) => {
  console.log(prodPurchase);
  return (
    <article className="prodcart">
      <header className="prodcart__header">
        <img className="prodcart__img" src={prodPurchase.product.images[0].url} alt="" />
      </header>
      <h3 className="prodcart__title">{prodPurchase.product.title}</h3>
      <footer className="prodcart__footer">
        <span>{prodPurchase.createdAt.slice(0,10)}</span>
        <div className="prodcart__subtotal">
          <span className="prodcart__quantity">{prodPurchase.quantity} </span>
          <span className="prodcart__subtotal-label">${prodPurchase.quantity * prodPurchase.product.price}</span>
        </div>
      </footer>
    </article>
  );
};

export default productPurchase;