import { BsBasket2Fill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
    const { quantity } = useSelector((store) => store.cart)
    // console.log(useSelector((store) => store.cart));
  return (
    <nav>
        <div className="navbar">
            <h3>Kurs Uygulaması</h3>
            <div className="navDiv">
                <div className="itemsDiv">
                    <p>{quantity}</p>
                </div>
                <BsBasket2Fill className="itemsIcon"/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar