import { useState } from "react";
import useTitle from "./useTitle";

const TitleOne = () => {
  const [num, setNum] = useState(0);
  //   useEffect(() => {
  //     document.title = `Sayi ${num}`;
  //   }, [num]);

  useTitle(num);

  return <button onClick={() => setNum(num + 1)}>Sayı - {num}</button>;
};

export default TitleOne;
