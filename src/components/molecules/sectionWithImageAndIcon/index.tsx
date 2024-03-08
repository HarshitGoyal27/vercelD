// ContentComponent.js

import { fontStyling, ulLiStyle } from "@/constants/commonStyle";
import React from "react";
import Image from "next/image";
import homePageStyle from "./../../../styles/homePageStyles.module.css";
import CustomButton from "@/components/atoms/button";

type ContentComponentProps = {
  heading: string;
  subHeading: string;
  points: string[];
  pointsIcons: string[];
  paraPoints: string[];
  noOfPoints: number;
  logoImagesUrl: string[];
  noOflogoImages: number;
  imageUrl: string;
  altText: string;
  Imgheight: number;
  Imgwidth: number;
  order: string;
  buttonEnable: boolean;
};

const ContentComponent: React.FC<ContentComponentProps> = ({
  heading,
  subHeading,
  points,
  pointsIcons,
  paraPoints,
  logoImagesUrl,
  imageUrl,
  altText,
  Imgheight,
  order,
  Imgwidth,
  buttonEnable,
}) => {
  function learnMoreClicked() {
    alert("learnMoreClicked");
  }
  function getStartedClicked() {
    alert("getStartedClicked");
  }
  return (
    <>
      {order === "imageLeft" ? (
        <div style={{ display: "flex",justifyContent:"center"}}>
          <div style={{}}>
            <Image
              src={imageUrl}
              alt={altText}
              height={Imgheight}
              width={Imgwidth}
              className={homePageStyle.whychooseImage}
            />
          </div>
          <div>
            <h2 className={homePageStyle.whyUsMainHeading}>{heading}</h2>

            <h3 className={homePageStyle.whyUsMainSubHeading}>{subHeading}</h3>

            <br />
            <br />
            <br />

            <ul style={ulLiStyle}>
              {points.map((point, index) => (
                <li key={index}>
                  <div style={{ display: "flex", marginBottom: "20px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={`/Icons/icon${index + 1}.PNG`}
                        alt={`Icon ${index + 1}`}
                        style={{
                          height: "55px",
                          width: "60px",
                          marginRight: "20px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                        height={55}
                        width={60}
                      />
                    </div>

                    <div>
                      <span className={homePageStyle.whyUsMainPointsHeading}>
                        {" "}
                        {point}
                      </span>
                      <p className={homePageStyle.whyUsMainPara}>
                        {paraPoints[index]}
                      </p>
                      <br />
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {buttonEnable === true ? (
              <div>
                <CustomButton
                  label={"Get Started"}
                  onClick={getStartedClicked}
                  buttonStyle={{
                    color: "white",
                    background: "#2871FF",
                    margin: "0px 35px 0px 90px",
                  }}
                />
                <CustomButton
                  label={"Learn More"}
                  onClick={learnMoreClicked}
                  buttonStyle={{ color: "white", background: "black" }}
                />
              </div>
            ) : (
              <> </>
            )}
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <h2 style={fontStyling.commonSectionHeading}>{heading}</h2>
            <h3 style={fontStyling.sectionSubHeading}>{subHeading}</h3>

            <br />
            <br />
            <br />

            <ul style={ulLiStyle}>
              {points.map((point, index) => (
                <li key={index}>
                  <div style={{ display: "flex", marginBottom: "20px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={pointsIcons[index]}
                        alt={`Icon ${index + 1}`}
                        style={{
                          height: "55px",
                          width: "60px",
                          marginRight: "20px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      />
                    </div>

                    <div>
                      <span style={fontStyling.sectionBlueSubHeading}>
                        {" "}
                        {point}
                      </span>
                      <p
                        style={{
                          width: "500px",
                          marginBlockStart: `0.3em`,
                          marginBlockEnd: `0.1em`,
                          fontFamily: "SF Pro Display",
                        }}
                      >
                        {paraPoints[index]}
                      </p>
                      <br />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <br />
            <br />
            {buttonEnable === true ? (
              <div>
                <CustomButton
                  label={"Get Started"}
                  onClick={getStartedClicked}
                  buttonStyle={{
                    color: "white",
                    background: "#2871FF",
                    marginRight: "35px",
                  }}
                />
                <CustomButton
                  label={"Learn More"}
                  onClick={learnMoreClicked}
                  buttonStyle={{ color: "white", background: "black" }}
                />
              </div>
            ) : (
              <> </>
            )}
          </div>
          <div>
            <Image
              src={imageUrl}
              alt={altText}
              height={Imgheight}
              width={Imgwidth}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ContentComponent;
