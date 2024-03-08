// components/ImageAndContent.js
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import hireDevStyles from "./../../../styles/hireDevStyles.module.css";
import Image from 'next/image';

type HireDevSAPCloudLegacyProps = {
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

const HireDevSAPCloudLegacy: React.FC<HireDevSAPCloudLegacyProps> = ({
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
  return (
    <Grid container  >
      {order === "imageLeft" ? (
        <>
          {/* Image */}
          <Grid item xs={12} sm={6} >
            <Image
              src={imageUrl}
              alt={imageAltText}
              height={imageHeight}
              width={imageWidth}
              className={hireDevStyles.ourEliteCloudImages}
            />
          </Grid>
          {/* Content */}
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              padding: "0px 0px  0px 80px"
            }}
          >
            {alignContent === "center" ? (
              <div  >
                <h4
                  className={`${hireDevStyles.sapCloudLegacyHeading}`}
                >
                  {heading}
                </h4>
                <br />

                <h5
                  className={`${hireDevStyles.sapCloudLegacySubHeading}`}

                >
                  {subheading}
                </h5>
                <br />
                <p className={`${hireDevStyles.sapCloudLegacyPara}`}>
                  {para}
                </p>
                <br />
                <br />

                {buttonEnable === true ? (
                  <Button variant="contained" color="primary">
                    {buttonLabel}
                  </Button>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <div >
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
                  <Button variant="contained" color="primary">
                    {buttonLabel}
                  </Button>
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

              padding: "0px 0px  0px 80px",

            }}
          >
            {alignContent === "center" ? (
              <div >
                <h4

                  className={`${hireDevStyles.sapCloudLegacyHeading}`}
                >
                  {heading}
                </h4>
                <br />

                <h5
                  className={`${hireDevStyles.sapCloudLegacySubHeading}`}
                >
                  {subheading}
                </h5>
                <br />
                <p className={`${hireDevStyles.sapCloudLegacyPara}`}>
                  {para}
                </p>
                <br />
                <br />
                <br />
                {buttonEnable === true ? (
                  <Button variant="contained" color="primary">
                    {buttonLabel}
                  </Button>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <div  >
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
                  <Button variant="contained" color="primary">
                    {buttonLabel}
                  </Button>
                ) : (
                  <></>
                )}
              </div>
            )}
          </Grid>
          {/* Image */}
          <Grid item xs={12} sm={6}>
            <Image style={{ margin: "0 0  0px  100px" }}
              src={imageUrl}
              alt={imageAltText}
              className={hireDevStyles.sapimages}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default HireDevSAPCloudLegacy;
