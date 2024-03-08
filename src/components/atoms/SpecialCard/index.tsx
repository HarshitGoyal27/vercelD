// Card.js
import React from "react";
import { fontStyling, ulLiStyle } from "@/constants/commonStyle";
import Image from "next/image";
import CustomButton2 from "../CustomButton2";
import homeStyle from "../../../styles/homePageStyles.module.css";
import { useRouter } from "next/router";
type SpecialCardProps = {
  cardHeading: string;
  points: string[];
  logoImages: string[];
  btnLabel: string;
};

const SpecialCard: React.FC<SpecialCardProps> = ({
  cardHeading,
  points,
  logoImages,
  btnLabel,
}) => {
  const router = useRouter();
  const seeHowItWorks = () => {
    // router.push("/talent-pool");
  };
  return (
    <div className={homeStyle.middlespecialCardOuter}>
      <div className="card-container">
        <br />
        <h2 className={homeStyle.whyChooseUs2MiddleCard}>{cardHeading}</h2>
        <br />
        <ul style={ulLiStyle}>
          {points.map((point, index) => (
            <li key={index}>
              <div className={homeStyle.specialCard}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    className={homeStyle.HomePageSpecialCardPointsIconsStyling}
                    src={`/Icons/icon${index + 1}.PNG`}
                    alt={`Icon ${index + 1}`}
                    height={45}
                    width={45}
                  />
                </div>

                <div>
                  <span className={homeStyle.pointsStyling}> {point}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <br />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <CustomButton2
            label={btnLabel}
            onClick={seeHowItWorks}
            buttonStyle={{
              color: "white",
              width: "15rem",
              borderRadius: "5px",
              background: "black",
              fontSize: "18px",
              padding: "10px 25px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              margin: "0px 15px",
            }}
            hoverStyle={{
              color: "black",
              width: "15rem",
              borderRadius: "5px",
              background: "white",
              fontSize: "18px",
              padding: "10px 25px",
              border: "1px solid black",
              boxShadow: " 0px 5px 5px grey",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              margin: "0px 15px",
            }}
          />
        </div>
        <br />
        <br />
        <style jsx>{`
        .card-container {
          padding: 20px;
          border-radius: 18px;
          box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
          border: "2px solid black";
        }

        .logo-images {
          display: flex;
          justify-content: space-around;
          margin: 10px 0;
          height: 15px;
        }
      `}</style>
      </div>
    </div>
  );
};

export default SpecialCard;
