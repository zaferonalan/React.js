import ProductItem from "./ProductItem";
import "./ProductItem.css";
// import productData from "../productData.js";
import { productData } from "../../productData";
// ! Yukarıdaki import kod ile Dışarıdan Javascript dosyası ekledik

const Product = () => {
  return (
    <>
      <div className="product-wrapper">
        <h1>Products</h1>
        <div className="products">
          {productData.map((product) => {
            return (
              <ProductItem
                key={product.productName}
                product={product}
                // productName={product.productName}
                // imageURL={product.imageURL}
                // productPrice={product.productPrice}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
