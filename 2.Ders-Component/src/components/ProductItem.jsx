import "./ProductItem.css";

function ProductItem(props) {
  console.log(props);
  const { imagesURl, productName, productPrice } = props;
  {
    /* props eklemeden direk isimde verebiliriz bu şekilde */
  }
  return (
    <>
      <div className="product-item">
        <div className="product-image">
          <img src={props.imagesURl} alt="" />
        </div>
        <div className="product-info">
          <h2>{props.productName}</h2>
          <span>{props.productPrice} TL</span>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
