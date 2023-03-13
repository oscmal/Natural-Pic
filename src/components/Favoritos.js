
import { useContext } from "react";
import context from "../context";

export default function Favoritos() {
  
  const {photos, setPhotos} = useContext (context)

  return (
    <div className="galeria grid-columns-5 p-3">
      {photos.filter (photo => photo.liked).map(filterPhoto => (
          <div key={filterPhoto.id} className="foto" style={{backgroundImage : `url(${filterPhoto.src.tiny})`}}></div>
      ))}
    </div>
  )
}
