// components/ImageAndContent.js
import React from "react";
import Grid from "@mui/material/Grid";
import { fontStyling } from "@/constants/commonStyle";
import hireDevStyles from "./../../../styles/hireDevStyles.module.css";
import CustomButton2 from "@/components/atoms/CustomButton2";
import { useRouter } from "next/router";
import Image from 'next/image';

type ImageAndContentProps = {
  order: string;
  heading: string;
  subheading: string;
  para: string;
  buttonLabel: string;
  buttonEnable: boolean;
  imageUrl: string;
  imageAltText: string;
  imageHeight: number;
  imageWidth: number;

  alignContent: string;
};

const ImageAndContent: React.FC<ImageAndContentProps> = ({
  order,
  heading,
  subheading,
  buttonLabel,
  imageUrl,
  imageAltText,
  imageHeight,
  para,
  imageWidth,
  buttonEnable,
  alignContent,
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/search-developers');
  }
  return (
    <Grid container >
      {order === "imageLeft" ? (
        <>
          {/* Image */}
          <Grid item xs={12} sm={6} >
            <Image
              src={imageUrl}
              alt={imageAltText}
              height={imageHeight}
              width={imageWidth}
            />
          </Grid>
          {/* Content */}
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            {alignContent === "center" ? (
              <div style={{ margin: "0px 35px", textAlign: "center" }}>
                <h4
                  style={fontStyling.commonSectionHeading}
                >
                  {heading}
                </h4>
                <br />

                <h5
                  style={{
                    color: "#2871FF",
                    fontFamily: "Nunito",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                  }}
                >
                  {subheading}
                </h5>
                <br />
                <p>
                  {para}
                </p>
                <br />
                <br />

                {buttonEnable === true ? (
                  <CustomButton2
                    onClick={handleClick}
                    label={buttonLabel}
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
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <div style={{ margin: "0px 35px", textAlign: "left" }}>
                <h4
                  style={{ textAlign: "left" }}
                >
                  {heading}
                </h4>
                <br />
                <br />

                <h5
                  style={{
                    color: "#2871FF",
                    fontFamily: "Nunito",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                  }}
                >
                  {subheading}
                </h5>
                <br />
                <p>
                  {para}
                </p>
                <br />
                <br />

                {buttonEnable === true ? (

                  <CustomButton2
                    onClick={handleClick}
                    label={buttonLabel}
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
                    }} />
                ) : (
                  <></>
                )}
              </div>
            )}
          </Grid>
        </>
      ) : (
        // Reverse order
        <>
          {/* Content */}
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

            }}
          >
            {alignContent === "center" ? (
              <div className={`${hireDevStyles.developerProfileContainer}`} >
                <h4
                  className={`${hireDevStyles.developerProfileHeading}`}
                >
                  {heading}
                </h4>
                <br />

                <h5
                  className={`${hireDevStyles.developerProfileSubHeading}`}
                >
                  {subheading}
                </h5>
                <br />
                <p
                  className={`${hireDevStyles.developerProfilePara}`}>
                  {para}
                </p>
                <br />

                {buttonEnable === true ? (

                  <CustomButton2
                    onClick={handleClick}
                    label={buttonLabel}
                    buttonStyle={{
                      color: "white",
                      borderRadius: "5px",
                      background: "#2871FF",
                      fontSize: "15px",
                      padding: "10px 25px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      border: "1px solid #2871FF",
                      margin: "0px 15px 0px 0px",
                    }}
                    hoverStyle={{

                      color: "#2871FF",
                      borderRadius: "5px",
                      background: "white",
                      fontSize: "15px",
                      padding: "10px 25px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      margin: "0px 15px 0px 0px",
                      boxShadow: " 0px 5px 5px grey",
                    }} />
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <div style={{ margin: "0px 35px", textAlign: "left" }}>
                <h4
                  style={{ textAlign: "left" }}
                >
                  {heading}
                </h4>
                <br />
                <br />
                <h5
                  style={{
                    color: "#2871FF",
                    fontFamily: "Nunito",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                  }}
                >
                  {subheading}
                </h5>
                <br />
                <p>
                  {para}
                </p>
                <br />
                <br />
                <br />
                {buttonEnable === true ? (

                  <CustomButton2
                    onClick={handleClick}
                    label={buttonLabel}
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
                    }} />
                ) : (
                  <></>
                )}
              </div>
            )}
          </Grid>
          {/* Image */}
          <Grid item xs={12} sm={6}>
            <Image
              width={imageWidth}
              height={imageHeight}
              src={imageUrl}
              alt={imageAltText}
              className={hireDevStyles.deepImage}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default ImageAndContent;
