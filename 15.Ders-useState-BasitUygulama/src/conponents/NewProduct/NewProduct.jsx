import ProductForm from "./ProductForm";

const NewProduct = ({ setProducts, products }) => {
  const onSaveProduct = (newProductData) => {
    setProducts((prevState) => [newProductData, ...prevState]);
  };

  return (
    <div className="new-product-wrapper">
      <ProductForm onSaveProduct={onSaveProduct} products={products} />
    </div>
  );
};

export default NewProduct;
