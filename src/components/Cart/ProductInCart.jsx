import React from "react";
import useCrudCart from "../../hooks/useCrudCart";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import "./style/productInCart.css"

const ProductInCart = ({ prodCart }) => {
  /* console.log(prodCart); */
  const { deleteProductFromCart } = useCrudCart();

  const handleDeleteCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProductFromCart(prodCart.id);
      }
    });
  };

  return (
    <article className="prodcart">
      <header className="prodcart__header">
        <img className="prodcart__img" src={prodCart.product.images[0].url} alt="" />
      </header>
      <section>
        <h3 className="prodcart__title">{prodCart.product.title}</h3>
      </section>
      <button className="Prodcart__delete" onClick={handleDeleteCart}>
        <i className="Prodcart__delete-icon bx bx-trash"></i>
      </button>
      <footer className="prodcart__footer">
        <span className="prodcart__subtotal-label">{prodCart.quantity} </span>
        <span className="prodcart__subtotal-input">{prodCart.product.price}</span>
      </footer>
    </article>
  );
};

export default ProductInCart;
