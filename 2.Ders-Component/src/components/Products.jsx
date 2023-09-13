import ProductItem from "./ProductItem";
import "./Products.css";

function Products() {
  const imageURl =
    "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU";
  const productName = "Bilgisayar";
  const productPrice = 35000;
  return (
    <div className="product-wrapper">
      <h1>Products</h1>
      <div className="products">
        <ProductItem
          imagesURl={imageURl}
          productName={productName}
          productPrice={productPrice}
        />
        <ProductItem
          imagesURl="https://images.unsplash.com/photo-1584378687113-8739c327634c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdyaXN0d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          productName="Saat"
          productPrice="3500"
        />
        <ProductItem
          imagesURl="https://images.unsplash.com/photo-1596558450268-9c27524ba856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwcGxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          productName="Telefon"
          productPrice="10000"
        />
      </div>
    </div>
  );
}

export default Products;
