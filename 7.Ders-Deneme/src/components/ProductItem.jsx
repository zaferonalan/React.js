import React from "react";
import ProductInfo from "./ProductInfo";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const { productName, imageURL, productPrice } = product;
  console.log(product);
  return (
    <>
      <div className="product-item">
        <div className="product-image">
          <img src={imageURL} alt="" />
        </div>
        <ProductInfo>
          <h2>{productName}</h2>
          <span>{productPrice} TL</span>
        </ProductInfo>
      </div>
    </>
  );
};

export default ProductItem;
