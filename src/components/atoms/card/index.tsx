// components/CardComponent.tsx
import React from "react";
import homePageStyling from "../../../styles/homePageStyles.module.css"
import {
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { cardsStyling } from "@/constants/commonStyle";
import CustomButton2 from "../CustomButton2";
import Image from "next/image";
type CardComponentProps = {
  imageUrl: string;
  imageHeight: number;
  imageWidth: number;
  headingNumber: string;
  headingText: string;
  paragraphText: string;
  buttonText: string;
  buttonEnabled: boolean;
  onButtonClick: () => void;
};

const CardComponent: React.FC<CardComponentProps> = ({
  imageUrl,
  imageHeight,
  imageWidth,
  paragraphText,
  headingText,
  headingNumber,
  buttonText,
  onButtonClick,
  buttonEnabled,
}) => {
  return (
    <Card className={homePageStyling.sapCloudLegacyCard}>
      {/* Card Image */}
      <div style={{height:"220px",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Image
        src={imageUrl}
        width={imageWidth}
        height={imageHeight}
        alt={"Sap Cloud Legacy"}
      />
      </div>
      {/* Card Content */}
      <CardContent>
        {/* Paragraph */}
        <Box>
          <div style={cardsStyling.sapCloudLegacyCardNumber}>{headingNumber}</div>
        </Box>
        <Box style={cardsStyling.sapCloudLegacyHeading}>
          {headingText}
        </Box>
        <br />
        <div style={{}}>
        <Box style={cardsStyling.sapCloudLegacyPara}>{paragraphText}</Box>

        {/* Button */}
        {buttonEnabled === true ? (
          <>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CustomButton2
                onClick={onButtonClick}
                label={buttonText}
                buttonStyle={{
                  color: "#2871FF",
                  borderRadius: "5px",
                  background: "#FFF",
                  fontSize: "15px",
                  padding: "10px 25px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  border: "1px solid #2871FF",
                  margin: "0px 15px 0px 0px",
                }}
                hoverStyle={{
                  color: "#FFF",
                  borderRadius: "5px",
                  background: "#2871FF",
                  fontSize: "15px",
                  padding: "10px 25px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",

                  margin: "0px 15px 0px 0px",
                  boxShadow: " 0px 5px 5px grey",
                }}
              />
              
            </div>
          </>
          
        ) : (
          <></>
        )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
