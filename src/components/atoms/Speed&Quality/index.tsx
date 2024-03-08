// components/SpeedQualityCard.tsx
import React from "react";
import homePageStyles from "./../../../styles/homePageStyles.module.css";
import Image from "next/image";
interface SpeedQualityCardProps {
  title: string;
  subheading: string;
  paragraph: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
}

const SpeedQualityCard: React.FC<SpeedQualityCardProps> = ({
  title,
  subheading,
  paragraph,
  imageSrc,
  imageWidth,
  imageHeight,
}) => {
  return (
    <div className={homePageStyles.speedandQualityCardContainer}>
      <Image
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
        alt={`${title} Image`}
      />
      <div>
        <h2 className={homePageStyles.speedandQualityCardHeading}>{title}</h2>
        <h3 className={homePageStyles.speedandQualityCardSubHeading}>
          {subheading}
        </h3>
        <br />
        <p className={homePageStyles.speedandQualityCardPara}>{paragraph}</p>
      </div>
    </div>
  );
};

export default SpeedQualityCard;
