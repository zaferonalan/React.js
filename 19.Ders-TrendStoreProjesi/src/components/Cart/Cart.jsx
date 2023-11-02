// ! burası sepete basıldığında açılan offcanvas
import CartItem from "./CartItem";
import products from "../../productData";
import "./Cart.css";
import Offcanvas from "../UI/Offcanvas";

const Cart = (props) => {
  const cartItem = (
    <ul className="cart-item">
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );

  return (
    <Offcanvas onClose={props.onClose}>
      <div className="cart-head">
        <h2>Sepetim</h2>
        <a href="/" className="cart-close" onClick={props.onClose}>
          X
        </a>
      </div>
      {cartItem}
      <div className="total">
        <span>Toplam Değer</span>
        <span>10₺</span>
      </div>
      <div className="actions">
        <button className="cart-order">Sipariş Ver</button>
        <button className="cart-clear">Temizle</button>
      </div>
    </Offcanvas>
  );
};

export default Cart;
