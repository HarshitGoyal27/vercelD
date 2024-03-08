// components/VideoComponent.tsx
import React from 'react';
import style from '../../../styles/homePageStyles.module.css'
type VideoComponentProps = {
  videoSrc: string;
  videoWidth: string;
  videoHeight: string;
};

const VideoComponent: React.FC<VideoComponentProps> = ({ videoSrc, videoWidth, videoHeight }) => {
  return (


    <video width={videoWidth} height={videoHeight}  autoPlay
      loop
      muted
      // Show poster if video doesn;t load or works
      poster="">
      <source src={videoSrc} type="video/mp4"  />
      Home page Banner
    </video>

  );
};

export default VideoComponent;
