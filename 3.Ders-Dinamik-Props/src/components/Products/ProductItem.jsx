import "./Product.css";
import ProductInfo from "./ProductInfo";

const ProductItem = ({ product }) => {
  // const { product } = props;
  const { productName, imageURL, productPrice } = product;
  console.log(product);
  return (
    <>
      <div className="product-item">
        <div className="product-image">
          <img src={imageURL} alt="" />
        </div>

        {/* ProductInfo içerisinde Props.children özelliği Kullandık  */}
        <ProductInfo>
          <h2>{productName}</h2>
          <span>{productPrice} TL</span>
        </ProductInfo>
      </div>
    </>
  );
};

export default ProductItem;
