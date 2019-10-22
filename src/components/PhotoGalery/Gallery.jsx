import React from "react";
import PhotoCard from "./PhotoCard";
import Modal from './Modal'

const Gallery = ({ hits, isModalOpen }) => {
  return (
    
    <ul className="gallery">
      {hits.map(hit => (
        <PhotoCard key={hit.id} {...hit} />
      // isModalOpen && <Modal/>
      ))}
    </ul>
  );
};
export default Gallery;
