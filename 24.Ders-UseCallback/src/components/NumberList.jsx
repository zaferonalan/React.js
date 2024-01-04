import { useState, useEffect } from "react";

const NumberList = ({ getItems }) => {
  useEffect(() => {
    setItems(getItems());
    console.log("Uptating Items");
  }, [getItems]);
  const [items, setItems] = useState([]);
  return items.map((item) => <div key={item}>{item}</div>);
};

export default NumberList;
