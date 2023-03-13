import "../assets/css/galeria.css";

import { useContext } from "react";
import context from "../context";
import Heart from "./Heart";


const Home = () =>  {
  const {photos, setPhotos} = useContext (context)

  const favoritosClick = (id) => {
    const photosIndex = photos.findIndex ((photos) =>photos.id ===id);
    photos[photosIndex].liked = !photos[photosIndex].liked;
    setPhotos ([...photos]);
    
  };


  return (
    <div className="galeria grid-columns-5 p-3">
      {photos.map (photo => (
        // return (
          <div key={photo.id} className="foto" style={{backgroundImage : `url(${photo.src.tiny})`}} onClick={() => favoritosClick (photo.id)}>
            <Heart filled={(photo.liked)}  />
            <p>{photo.alt} </p>
          </div>
        
      ))}
    </div>
  )
}
export default Home
