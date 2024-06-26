import React, { useState } from 'react';
import {ImageList, ImageListItem } from '@mui/material';

interface Image {
  // Here each image has an id - you could use the class number as its id?
  id: number;
  url: string;
}

// Basic image selection component for use with an array of images (like jpg images)
const ImageSelectorComponent: React.FC = () => {

  // Swap this out for a list of images you want to use
  const [images, setImages] = useState<Image[]>([
    {id: 1, url: 'https://www.petmd.com/sites/default/files/small-kitten-walking-towards_127900829_0.jpg'},
    {id: 2, url: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {id: 3, url: 'https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=600'},
  ]);

  const [selectedImages, setSelectedImages] = useState<Image []>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleImageClick = (image: Image) => {
    const isSelected = selectedImages.some((selectedImage) => selectedImage.id === image.id);

    if (isSelected) {
        // If the image is already selected, remove it from the array
        setSelectedImages(selectedImages.filter((selectedImage) => selectedImage.id !== image.id));
    } else {
        // If the image is not selected, add it to the array
        setSelectedImages([...selectedImages, image]);
    }
  };

  const handleSubmit = () => {
    // Include a function here on what to do when you click sumbit
    setSubmitted(true);
  }

  return (
    <div>
    <ImageList sx={{ width:600, height: 600 }}>
        {images.map((image) => (
          <ImageListItem key={image.id}>
            <img
              key={image.id}
              src={image.url}
              alt={`Image ${image.id}`}
              className={selectedImages.some((selectedImage) => selectedImage.id === image.id) ? 'selected' : ''}
              onClick={() => handleImageClick(image)}
            />
          </ImageListItem>
        ))}
    </ImageList>
    <button onClick={handleSubmit}>Submit</button>
    {submitted && (
        <div>
            <h2>Selected Images:</h2>
            <div className="selected-images">
                {selectedImages.map((image) => (
                    <img key={image.id} src={image.url} alt={`Image ${image.id}`} />
                ))}
            </div>
        </div>
    )}
    </div>
  );
};

export default ImageSelectorComponent;