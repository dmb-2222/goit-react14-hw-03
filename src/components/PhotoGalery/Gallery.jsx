import React from "react";
import PhotoCard from "./PhotoCard";

const Gallery = ({
  hits,
  ckickToOpenModal,
  showButtonloadMore,
  handleBtnLoadMore
}) => {
  return (
    <>
      <ul className="gallery">
        {hits.map(hit => (
          <PhotoCard
            key={hit.id}
            {...hit}
            ckickToOpenModal={() => ckickToOpenModal(hit.largeImageURL)}
          />
        ) )}
      </ul>
      {showButtonloadMore && (
        <button className="button" type="button" onClick={handleBtnLoadMore}>
          Load more
        </button>
      )}
      <div id="scroll" />
    </>
  );
};
export default Gallery;
