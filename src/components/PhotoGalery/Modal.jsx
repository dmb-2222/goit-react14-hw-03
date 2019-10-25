import React from "react";

const Modal = ({ largeImageURL, tags, onCloseModal }) => {
  return (
    <div className="overlay" onClick={onCloseModal} data-modal="modal" name="modal">
      <div className="modal" >
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};
export default Modal;
