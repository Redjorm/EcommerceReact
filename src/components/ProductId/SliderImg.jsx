import React from "react";
import "./styles/sliderimg.css";
const SliderImg = ({ product }) => {
  //console.log(product);
  return (
    <div className="sliderimg__header">
      <img className="sliderimg__img" src={product?.images[0].url} />
    </div>
  );
};

export default SliderImg;
