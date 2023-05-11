import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ProductIdInfo from "../components/ProductId/ProductIdInfo";
import SliderImg from "../components/ProductId/SliderImg";
import SimilarProducts from "../components/ProductId/SimilarProducts";
import "./styles/Products.css";

const ProductId = () => {
  const { id } = useParams();

  const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`;
  const [product, getProductById] = useFetch(url);

  useEffect(() => {
    getProductById(id);
  }, [id]);

  //console.log(product);
  return (
    <div>
      <div className="sliderAndProducts">
        <SliderImg product={product} />
        <ProductIdInfo product={product} />
      </div>
      <SimilarProducts product={product} />
    </div>
  );
};

export default ProductId;
