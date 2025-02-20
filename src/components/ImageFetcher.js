"use client";
import React, { useState } from 'react';

const ImageFetcher = () => {
  const [imageUrl, setImageUrl] = useState('');

  const fetchImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setImageUrl(data.message);
    } catch (error) {
      console.error('Error fetching the image:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchImage}>Fetch Random Puppy Image</button>
      {imageUrl && <img src={imageUrl} alt="Random Puppy" style={{ marginTop: '20px', maxWidth: '100%' }} />}
    </div>
  );
};

export default ImageFetcher;