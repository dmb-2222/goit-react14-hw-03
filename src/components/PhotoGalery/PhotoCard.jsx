import React from "react";

const PhotoCard = ({webformatURL,tags, likes, comments ,views, downloads}) => {
  return (
    <li className="photo-card">
      <img src={webformatURL} alt={tags} />
      <div className="stats">
        <p className="stats-item">
          <i className="material-icons">thumb_up</i>
          {likes}
        </p>
        <p className="stats-item">
          <i className="material-icons">visibility</i>
          {views}
        </p>
        <p className="stats-item">
          <i className="material-icons">comment</i>
          {comments}
        </p>
        <p className="stats-item">
          <i className="material-icons">cloud_download</i>
          {downloads}
        </p>
      </div>
      <button type="button" className="fullscreen-button">
        <i className="material-icons">zoom_out_map</i>
      </button>
    </li>
  );
};
export default PhotoCard;
