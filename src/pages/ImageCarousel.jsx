import { useState } from "react";
import "./styles/carousel-styles.css";

const images = [
  "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
  "https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
];

const MAX_IMAGES = images.length - 1;

const ImageCarousel = () => {
  const [currentImageVisible, setCurrentImageVisible] = useState(0);

  const onNextClick = () => {
    if (currentImageVisible < MAX_IMAGES)
      setCurrentImageVisible((prev) => prev + 1);
  };

  const onBackClick = () => {
    if (currentImageVisible !== 0) setCurrentImageVisible((prev) => prev - 1);
  };

  return (
    <div className="carousel-container">
      {/* i missed to write overflow hidden here instead wrote for images-container:: stupid !!  */}
      <div
        className="images-container"
        // remeber this style
        style={{ transform: `translateX(${-currentImageVisible * 100}%)` }}
      >
        {images.map((item, idx) => (
          <div key={item + idx}>
            <img className="images" src={item} alt="image1" />
          </div>
        ))}
      </div>
      <div className="action-handlers">
        <button className="next-button" onClick={onNextClick}>
          Next
        </button>
        <button className="prev-button" onClick={onBackClick}>
          Prev
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
