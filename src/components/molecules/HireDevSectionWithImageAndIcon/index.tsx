// ContentComponent.js
import React from "react";
import styles from "../../../styles/hireDevStyles.module.css";
import CustomButton from "@/components/atoms/button";
import Image from "next/image";
import { ulLiStyle } from '@/constants/commonStyle';
type HireDevSectionWithImageAndIconProps = {
  heading: string;
  subHeading: string;
  points: string[];
  pointsIcons: string[];
  paraPoints: string[];
  noOfPoints: number;
  logoImagesUrl: string[] | null;
  noOflogoImages: number | null;
  imageUrl: string;
  altText: string;
  Imgheight: number;
  Imgwidth: number;
  order: string;
  buttonEnable: boolean;
};

const HireDevSectionWithImageAndIcon: React.FC<
  HireDevSectionWithImageAndIconProps
> = ({
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
          <div
            className={styles.laserImage}
            // style={{
            //   display: "flex",
            //   justifyContent: "space-evenly",
            //   marginLeft: "40px",
            // }}
          >
            <div >
              <div id={styles.leftImage}>
                <Image
                  src={imageUrl}
                  alt={altText}
                  height={Imgheight}
                  width={Imgwidth}
                  
                />
              </div>
            </div>

            <div className={styles.leftimagehire}>
              <h2 className={styles.hireDevSectionIconHeading}> {heading}</h2>

              <h3 className={styles.hireDevSectionIconSubHeading}>
                {subHeading}
              </h3>

              <br />

              <ul style={ulLiStyle}>
                {points.map((point, index) => (
                  <li key={index}>
                    <div style={{ display: "flex", marginBottom: "10px", marginLeft: "-10px" }}>
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
                        <span className={styles.hireDevSectionPointsHeading}>
                          {" "}
                          {point}
                        </span>
                        <p className={styles.hireDevSectionPointsPara}>
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
          </div>
        ) : (
          <div id={styles.rightImage}>
            <div>
              <h2 className={styles.hireDevSectionIconHeading}> {heading}</h2>

              <h3 className={styles.hireDevSectionIconSubHeading}>
                {subHeading}
              </h3>

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
                          marginLeft: "-10px"
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
                        <span className={styles.hireDevSectionPointsHeading}>
                          {" "}
                          {point}
                        </span>
                        <p className={styles.hireDevSectionPointsPara}>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  margin: "10px 0px 0px 0px ",
                }}
              >
                <Image
                  src={imageUrl}
                  alt={altText}
                  height={Imgheight}
                  width={Imgwidth}
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

export default HireDevSectionWithImageAndIcon;
