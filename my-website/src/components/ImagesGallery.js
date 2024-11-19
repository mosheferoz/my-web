import React from 'react';
import './styles/gallery.css';
import img1 from  '../assets/IMG_2821.jpg'; // תמונה 1
import img2 from '../assets/IMG_2822.jpg';// תמונה 2
import img3 from '../assets/IMG_2823.jpg'; // תמונה 3
import img4 from '../assets/IMG_2828.jpg'; // תמונה 4 (התמונה החדשה)

const ImagesGallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">קצת מהאפליקציה</h2>
      <div className="gallery">
        <img src={img1} alt="Image 1" className="gallery-image" />
        <img src={img2} alt="Image 2" className="gallery-image" />
        <img src={img3} alt="Image 3" className="gallery-image" />
        <img src={img4} alt="Image 4" className="gallery-image" /> {/* התמונה החדשה */}
      </div>
    </div>
  );
};

export default ImagesGallery;
