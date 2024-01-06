import { useEffect } from "react";

function useTitle(num) {
  useEffect(() => {
    document.title = `Sayi ${num}`;
  }, [num]);
}

export default useTitle;
