import { useNavigate } from "react-router-dom";
import "./styles/CardProduct.css";
const CardProduct = ({ product }) => {
  const navigate = useNavigate();

  const handleSelectProductId = () => {
    navigate(`/product/${product.id}`);
  };

  const handleBtnClick = (e) => {
    e.stopPropagation();
  };

  // console.log(product)

  return (
    <article className="product" onClick={handleSelectProductId}>
      <header className="product__header">
        <img
          className="product__img product__img-1"
          src={product.images[0].url}
          alt=""
        />
        <img
          className="product__img product__img-2"
          src={product.images[1].url}
          alt=""
        />
      </header>

      <section className="product__section">
        <h4 className="product__subtitle">{product.brand}</h4>
        <h3 className="product__title">{product.title}</h3>
      </section>
      <div className="product__price">
        <span className="product__label">price</span>
        <span className="product__price-value">{product.price}</span>
      </div>
      <button onClick={handleBtnClick} className="product__btn">
        <i className="bx bx-cart-alt"></i>
      </button>
    </article>
  );
};

export default CardProduct;