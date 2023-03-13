import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import context from "./context";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Like";

const App = () => {
  const endpoint = "/fotos.json";
  const [photos, setPhotos] = useState ([])
  const compartirPhotos = {photos, setPhotos}

  useEffect( () => {
    dataPhotos()
  }, [])

  const dataPhotos = async () => {
    const resPhotos = await fetch(endpoint)
    const dataPhotos = await resPhotos.json()
    setPhotos (dataPhotos.photos)
  }

  return (
    <div className="App">
      <context.Provider value={compartirPhotos}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
      </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App
