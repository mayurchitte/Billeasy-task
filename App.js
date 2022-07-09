import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Card";

const App = () => {
  const [isGallery, setIsGallery] = useState([]);

  const url = "http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0";

  useEffect(() => {
    axios.get(url).then((res) => {
      setIsGallery(res.data);
    });
  });
  if (!isGallery) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="gallery">
      {isGallery.map((show) => (
        <div>
          <Card src={show.urls?.regular} />
        </div>
      ))}
    </div>
  );
};

export default App;
