// components/ImageComponent.tsx
import React from 'react';
import { Card, CardMedia, CardContent, Box, Button } from '@mui/material';

type ImageComponentProps = {
  imageUrl: string;
  altText: string;
  height: string;
  width: string;
 
};

const ImageComponent: React.FC<ImageComponentProps> = ({ imageUrl, altText , height, width}) => {
  return (
    <Card>
      {/* Image */}
      <CardMedia component="img" height={height} width={width} image={imageUrl} alt={altText} />

      {/* Content */}
     
    </Card>
  );
};

export default ImageComponent;
