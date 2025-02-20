"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const ImageFetcher = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [theme, setTheme] = useState('light');

  const fetchImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setImageUrl(data.message);
    } catch (error) {
      console.error('Error fetching the image:', error);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme}>
      <button onClick={fetchImage}>Fetch Random Puppy Image</button>
      {imageUrl && <Image src={imageUrl} alt="Random Puppy" layout="responsive" width={500} height={500} style={{ marginTop: '20px', maxWidth: '100%' }} />}
      <button onClick={toggleTheme} style={{ marginTop: '20px' }}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ImageFetcher;