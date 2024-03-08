// components/CardComponent.js
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import homeStyle from "../../../styles/homePageStyles.module.css";
type CardStructureComponentProps = {
  cardHeading: string;
  bulletPoints: string[];
  imageUrl: string;
  altText: string;
  imageHeight: number;
  imageWidth: number;
};

const StructureCard: React.FC<CardStructureComponentProps> = ({
  cardHeading,
  bulletPoints,
  imageUrl,
  altText,
  imageHeight,
  imageWidth,
}) => {
  return (
    <Card className={homeStyle.structureCardCss}>
      {/* Image */}
      <div style={{display:"flex",justifyContent:"center"}}>
      <Image
        src={imageUrl}
        alt={altText}
        height={imageHeight}
        width={imageWidth}
      />
      </div>
      {/* Content */}
      <CardContent  >
        <div style={{color:"#000"  , textAlign:"center" ,  fontSize: "28px" , fontWeight:"600"   }}  >
          {cardHeading}
        </div>
        {/* Paragraph with bullet points */}
        <div  color="#515151" className={homeStyle.structureCardFont} style={{  padding:"25px" , fontWeight:"400"   , fontSize:"22px"}}>
          {bulletPoints.map((point, index) => (
            <div key={index} style={{display:"flex"}}>
              <div>•</div> &nbsp; <div>{point}</div>
              <br />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StructureCard;
