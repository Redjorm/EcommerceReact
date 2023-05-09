import React from "react";
import useCrudCart from "../../hooks/useCrudCart";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

const ProductInCart = ({ prodCart }) => {
  console.log(prodCart);
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
        /* Swal.fire("Deleted!", "Your file has been deleted.", "success"); */
        deleteProductFromCart(prodCart.id);
      }
    });
  };

  return (
    <article>
      <header>
        <img src={prodCart.product.images[0].url} alt="" />
      </header>
      <section>
        <h3>{prodCart.product.title}</h3>
      </section>
      <button onClick={handleDeleteCart}>
        <i className="bx bx-trash"></i>
      </button>
      <footer>
        <span>{prodCart.quantity}</span>
        <span>{prodCart.product.price}</span>
      </footer>
    </article>
  );
};

export default ProductInCart;
