const ProductInfo = (props) => {
  return (
    <div className="product-info">
      <span className="ad">bilgisayargenetigi.com</span>
      {props.children}
      {/* ! children özelliği değişmesini istemediğimiz sabit yapı kalması için kullanılır. Mesala Header ve footer değişmez  */}
    </div>
  );
};

export default ProductInfo;
