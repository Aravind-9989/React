import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Image() {
  const [images, setImages] = useState([
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ]);

  const addImage = () => {
    setImages([...images, 'https://example.com/image1.jpg']);
  };

  return (
    <div>
      <Carousel>
        {images.map((imageUrl, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={imageUrl} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <button onClick={addImage}>Add Image</button>
    </div>
  );
}

export default Image;