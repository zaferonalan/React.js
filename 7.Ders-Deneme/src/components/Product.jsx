import React from "react";
import "./Product.css";
import { productData } from "../../productData";
import ProductItem from "./ProductItem";
const Product = () => {
  return (
    <div className="product-wrapper">
      <h1>Prodcuts</h1>
      <div className="products">
        {productData.map((product) => {
          return (
            <ProductItem
              key={product.productName}
              product={product}
            ></ProductItem>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
