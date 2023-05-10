import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/Home/CardProduct";
import "./styles/Products.css";
<<<<<<< HEAD
import FilterCategori from "../components/Home/FilterCategori";
=======
import FilterCategory from "../components/Home/FilterCategory";
>>>>>>> 035753b7bbd15d2c73ffd7df59fa34814fb15cc9

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const { productsGlobal } = useSelector((state) => state);

  const input = useRef();
<<<<<<< HEAD
=======

  const handleChangeInput = () => {
    setInputValue(input.current.value.toLowerCase().trim());
  };
>>>>>>> 035753b7bbd15d2c73ffd7df59fa34814fb15cc9

  const handleChangeInput = () => {
    setInputValue(input.current.value.toLowerCase().trim());
  };

  
  return (
<<<<<<< HEAD
    <div className="products">
      <input ref={input} onChange={handleChangeInput} type="text" />
      <FilterCategori />
=======
    <div className="home">
      <input ref={input} onChange={handleChangeInput} type="text" />
      <FilterCategory />
>>>>>>> 035753b7bbd15d2c73ffd7df59fa34814fb15cc9
      <div className="products">
        {productsGlobal?.filter((prod => prod.title.toLowerCase().includes(inputValue))).map((prod) => (
          <CardProduct key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 035753b7bbd15d2c73ffd7df59fa34814fb15cc9
