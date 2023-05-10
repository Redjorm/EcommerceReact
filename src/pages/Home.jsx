import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/Home/CardProduct";
import "./styles/Products.css";
import FilterCategory from "../components/Home/FilterCategory";

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const { productsGlobal } = useSelector((state) => state);

  const input = useRef();

  const handleChangeInput = () => {
    setInputValue(input.current.value.toLowerCase().trim());
  };


  return (

    <div className="home">
      <input ref={input} onChange={handleChangeInput} type="text" />
      <FilterCategory />
      <div className="products">
        {productsGlobal?.filter((prod => prod.title.toLowerCase().includes(inputValue))).map((prod) => (
          <CardProduct key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};


export default Home;

