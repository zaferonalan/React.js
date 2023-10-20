import ProductItem from "./ProductItem";
import { productData } from "../../ProductData";
import "./Products.css";
import NewProduct from "../NewProduct/NewProduct";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState(productData);

  console.log(productData);

  return (
    <div className="product-wrapper">
      <NewProduct setProducts={setProducts} />
      <h1>Products</h1>
      <div className="products">
        {/*  {products.map((product) => (
          <ProductItem key={product.productName} product={product} />
        ))} */}
        {productData.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
