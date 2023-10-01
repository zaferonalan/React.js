import "./App.css";
import SearchHeader from "./componenets/searchHeader";
import searchImages from "./componenets/API";
import { useState } from "react";
import ImageList from "./componenets/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <>
      <div className="App">
        <SearchHeader search={handleSubmit} />
        <ImageList imagesPlaceholder={images} />
      </div>
    </>
  );
}

export default App;
