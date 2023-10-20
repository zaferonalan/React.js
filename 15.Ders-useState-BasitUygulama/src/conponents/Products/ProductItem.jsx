import { useState } from "react";
import Counter from "../../Counter";
import ProductInfo from "./ProductInfo";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const { imageUrl, productName, productPrice } = product;
  // let title = productName;
  const [title, setTitle] = useState(productName);
  const [counter, setCounter] = useState(productPrice);

  const clickHandler = () => {
    setTitle("Güncellendi!");
    console.log(productName, "Güncellendi!");
  };

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <ProductInfo>
        <h2>{title}</h2>

        <Counter
          productPrice={productPrice}
          counter={counter}
          setCounter={setCounter}
        >
          <span>{counter}₺</span>
        </Counter>
        <br />
        <button onClick={clickHandler}>Güncelle</button>
      </ProductInfo>
    </div>
  );
};

export default ProductItem;
