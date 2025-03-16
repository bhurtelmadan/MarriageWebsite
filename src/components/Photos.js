import React from 'react';

function Photos() {
  return (
    <div className="photos-gallery">
      <h2>Photo Gallery</h2>
      <div className="photos-placeholder">
        <p>Photos to be uploaded later</p>
        <div className="placeholder-grid">
          <div className="placeholder-image"><span>Photo 1</span></div>
          <div className="placeholder-image"><span>Photo 2</span></div>
          <div className="placeholder-image"><span>Photo 3</span></div>
          <div className="placeholder-image"><span>Photo 4</span></div>
          <div className="placeholder-image"><span>Photo 5</span></div>
          <div className="placeholder-image"><span>Photo 6</span></div>
        </div>
      </div>
    </div>
  );
}

export default Photos; 