// ContentComponent.js
import {  ulLiStyle } from "@/constants/commonStyle";
import React from "react";
import talentPoolStyles from "./../../../styles/talentPoolStyles.module.css";
import Image from "next/image";
import CustomButton2 from "@/components/atoms/CustomButton2";
import { useRouter } from "next/router";

type TalentPoolContentComponentProps = {
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

const TalentPoolContentComponent: React.FC<TalentPoolContentComponentProps> = ({
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
  const router = useRouter();
  function learnMoreClicked() {
    router.push("/vetting")
  }
  function getStartedClicked() {
    router.push("/search-developers")
  }
  return (
    <>
      {order === "imageLeft" ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap:"60px"
          }}
        >
          <Image
            src={imageUrl}
            height={Imgheight}
            width={Imgwidth}
            alt={altText}
          />

          <div>
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
                        width={60}
                        height={55}
                        style={{
                          height: "55px",
                          width: "60px",
                          margin: "0px 20px 80px 0px",
                        }}
                      />
                    </div>

                    <div>
                      <span
                        className={
                          talentPoolStyles.talentPoolFeaturesSubHeading
                        }
                      >
                        {" "}
                        {point}
                      </span>
                      <p className={talentPoolStyles.talentPoolFeaturesPara}>
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
                <CustomButton2
                  label={"Get Started"}
                  onClick={getStartedClicked}
                  buttonStyle={{
                    color: "white",
                    borderRadius: "6px",
                    background: "#515151",
                    fontSize: "18px",
                    padding: "10px 25px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    margin: "0px 15px 0px 10px",
                    boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                  }}
                  hoverStyle={{
                    color: "#515151",
                    borderRadius: "6px",
                    background: "white",
                    fontSize: "18px",
                    padding: "10px 25px",
                    border: "1px solid black",
                    boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    margin: "0px 15px 0px 10px",
                  }}
                />
                <CustomButton2
                  label={"Learn More"}
                  onClick={learnMoreClicked}
                  buttonStyle={{
                    color: "black",
                    borderRadius: "6px",
                    background: "#F8FAFF",
                    fontSize: "18px",
                    padding: "10px 25px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    border: "1px solid #E1E4ED",
                    margin: "0px 15px 0px 0px",
                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                  }}
                  hoverStyle={{
                    color: "#F8FAFF",
                    borderRadius: "6px",
                    background: "#2871FF",
                    fontSize: "18px",
                    padding: "10px 25px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    margin: "0px 15px 0px 0px",
                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>
            ) : (
              <> </>
            )}
          </div>
        </div>
      ) : (
        <div className={talentPoolStyles.rightimage}>
          <div>
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
                        src={`/Icons/icon${index + 1}.PNG`}
                        alt={`Icon ${index + 1}`}
                        width={60}
                        height={55}
                        style={{
                          height: "55px",
                          width: "60px",
                          margin: "0px 20px 80px 0px",
                        }}
                      />
                    </div>

                    <div>
                      <span
                        className={
                          talentPoolStyles.talentPoolFeaturesSubHeading
                        }
                      >
                        {" "}
                        {point}
                      </span>
                      <p className={talentPoolStyles.talentPoolFeaturesPara}>
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
                <CustomButton2
                  label={"Get Started"}
                  onClick={getStartedClicked}
                  buttonStyle={{
                    color: "white",
                    borderRadius: "6px",
                    background: "#515151",
                    fontSize: "18px",
                    padding: "10px 25px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    margin: "0px 15px 0px 10px",
                    boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                  }}
                  hoverStyle={{
                    color: "#515151",
                    borderRadius: "6px",
                    background: "white",
                    fontSize: "18px",
                    padding: "10px 25px",
                    border: "1px solid black",
                    boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    margin: "0px 15px 0px 10px",
                  }}
                />
                <CustomButton2
                  label={"Learn More"}
                  onClick={learnMoreClicked}
                  buttonStyle={{
                    color: "black",
                    borderRadius: "6px",
                    background: "#F8FAFF",
                    fontSize: "18px",
                    padding: "10px 25px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    border: "1px solid #E1E4ED",
                    margin: "0px 15px 0px 0px",
                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                  }}
                  hoverStyle={{
                    color: "#F8FAFF",
                    borderRadius: "6px",
                    background: "#2871FF",
                    fontSize: "18px",
                    padding: "10px 25px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    margin: "0px 15px 0px 0px",
                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>
            ) : (
              <> </>
            )}
          </div>
          <div>
            <Image
              src={imageUrl}
              height={Imgheight}
              width={Imgwidth}
              alt={altText}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TalentPoolContentComponent;
