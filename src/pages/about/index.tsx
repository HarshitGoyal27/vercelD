import Navbar from "@/components/molecules/navbar";
import React from "react";
import aboutPageStyles from "./../../styles/aboutPageStyles.module.css";
import {
  AboutUsText,
} from "@/constants/texts";
import Image from "next/image";
import talentPoolStyles from "./../../styles/talentPoolStyles.module.css";
import HireDevSectionWithImageAndIcon from "@/components/molecules/HireDevSectionWithImageAndIcon";
import FotterComponent from "@/components/molecules/Fotter";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className={aboutPageStyles.aboutUsHeroContainer}>
        <h1 className={aboutPageStyles.aboutUsHeroHeading}>
          {AboutUsText.aboutUsHeroHeading}{" "}
        </h1>
        <h2 className={aboutPageStyles.aboutUsHeroSubHeading}>
          {AboutUsText.aboutUsHeroBoldHeading}
        </h2>
      </div>
      <section className={aboutPageStyles.sectionMargin}>
        <div className={aboutPageStyles.aboutUsFounderContainer}>
          <div className={aboutPageStyles.aboutUsFounderContentContainer}>
            <p>{AboutUsText.aboutUsFounderpara}</p>
          </div>
          <div className={aboutPageStyles.aboutUsFounderImageContainer}>
            <div>
              <Image
                className={aboutPageStyles.aboutUsFounderImage}
                src={"/AboutPageImages/vince.jpeg"}
                alt="FounderImage"
                width={300}
                height={300}
              />
            </div>
            <div className={aboutPageStyles.aboutUsFounderImageCaption}>
              <p>{AboutUsText.aboutUsFounderDesignation}</p>
              <p>{AboutUsText.aboutUsFounderName}</p>
            </div>
          </div>
        </div>
      </section>
      <main className={aboutPageStyles.mainMarginAllSides}>
        <section className={aboutPageStyles.mission}>
          <HireDevSectionWithImageAndIcon
            imageUrl={"/AboutPageImages/Mission1.webp"}
            altText={"SkillsCaptal Mission"}
            order="imageLeft"
            Imgheight={500}
            Imgwidth={500}
            logoImagesUrl={null}
            noOflogoImages={null}
            pointsIcons={AboutUsText.missionPointsIcons}
            heading={AboutUsText.missionHeading}
            subHeading={AboutUsText.missionSubHeading}
            noOfPoints={3}
            points={[
              AboutUsText.missionHiringPoint1,
              AboutUsText.missionHiringPoint2,
              AboutUsText.missionHiringPoint3,
            ]}
            paraPoints={AboutUsText.missionParaPoints}
            buttonEnable={false}
          />
        </section>
        <section style={{ marginTop: "30px" }}>
          <div className={aboutPageStyles.mission}>
            <HireDevSectionWithImageAndIcon
              imageUrl={"/AboutPageImages/vission1.webp"}
              logoImagesUrl={null}
              noOflogoImages={null}
              Imgheight={500}
              Imgwidth={500}
              altText={"WhySkillsCapitalDev"}
              order="imageRight"
              pointsIcons={AboutUsText.visionPointsIcons}
              heading={AboutUsText.visionHeading}
              subHeading={AboutUsText.visionSubHeading}
              noOfPoints={3}
              points={[
                AboutUsText.visionHiringPoint1,
                AboutUsText.visionHiringPoint2,
                AboutUsText.visionHiringPoint3,
              ]}
              paraPoints={AboutUsText.visionParaPoints}
              buttonEnable={false}
            />
          </div>
        </section>
      </main>
      <section className={aboutPageStyles.meetourteam}>
        <div className={talentPoolStyles.talentPoolSkilledDeveloperSection}>
          <div
            className={
              aboutPageStyles.talentPoolSkilledDeveloperHeadingContainer
            }
          >
            <h2 className={talentPoolStyles.talentPoolSkilledDeveloperHeading}>
              {AboutUsText.ourTeamHeading}
            </h2>
            <p
              className={talentPoolStyles.talentPoolSkilledDeveloperSubHeading}
            >
              {AboutUsText.ourTeamSubHeading}
            </p>
          </div>
          <br />
          <div
            className={talentPoolStyles.talentPoolSkilledDeveloperMainContainer}
          >
            <div
              className={
                aboutPageStyles.talentPoolSkilledDeveloperContentContainer1
              }
            >
              <Image
                src={"/AboutPageImages/Team.png"}
                width={600}
                height={500}
                alt="SkilledDeveloper1"
                style={{ borderRadius: "10px", marginTop: "8px" }}
              />
              <div
                className={
                  aboutPageStyles.talentPoolSkilledDeveloperContentContainer1points
                }
              >
                <h3
                  className={
                    talentPoolStyles.talentPoolSkilledDeveloperPointsHeading
                  }
                >
                  {AboutUsText.ourTeamPoint1}
                </h3>
                <p
                  className={
                    talentPoolStyles.talentPoolSkilledDeveloperPointsPara
                  }
                >
                  {AboutUsText.ourTeamPara1}
                </p>
              </div>
            </div>
            <div>
              <div
                className={
                  aboutPageStyles.talentPoolSkilledDeveloperContentContainer2
                }
              >
                <Image
                  src={"/AboutPageImages/dan.jpeg"}
                  width={200}
                  height={200}
                  alt="SkilledDeveloper2"
                  style={{ borderRadius: "10px", padding: "5px" }}
                />
                <div>
                  <h3
                    className={
                      talentPoolStyles.talentPoolSkilledDeveloperPointsHeading2
                    }
                  >
                    {AboutUsText.ourTeamPoint2}
                  </h3>
                  <div>{AboutUsText.ourTeamPoint1Position}</div>
                  <p
                    className={
                      talentPoolStyles.talentPoolSkilledDeveloperPointsPara2
                    }
                  >
                    {AboutUsText.ourTeamPara2}
                  </p>
                </div>
              </div>
              <div
                className={
                  aboutPageStyles.talentPoolSkilledDeveloperContentContainer2
                }
              >
                <Image
                  src={"/AboutPageImages/William-Shin.jpeg"}
                  width={200}
                  height={200}
                  alt="SkilledDeveloper3"
                  style={{ borderRadius: "10px", padding: "5px" }}
                />
                <div>
                  <h3
                    className={
                      talentPoolStyles.talentPoolSkilledDeveloperPointsHeading2
                    }
                  >
                    {AboutUsText.ourTeamPoint3}
                  </h3>
                  <div>{AboutUsText.ourTeamPoint2Position}</div>
                  <p
                    className={
                      talentPoolStyles.talentPoolSkilledDeveloperPointsPara2
                    }
                  >
                    {AboutUsText.ourTeamPara3}
                  </p>
                </div>
              </div>
              <div
                className={
                  aboutPageStyles.talentPoolSkilledDeveloperContentContainer2
                }
              >
                <Image
                  src={"/AboutPageImages/pawangupta-4.jpg"}
                  width={200}
                  height={200}
                  alt="SkilledDeveloper4"
                  style={{ borderRadius: "10px", padding: "5px" }}
                />
                <div>
                  <h3
                    className={
                      talentPoolStyles.talentPoolSkilledDeveloperPointsHeading2
                    }
                  >
                    {AboutUsText.ourTeamPoint4}
                  </h3>
                  <div>{AboutUsText.ourTeamPoint3Position}</div>
                  <p
                    className={
                      talentPoolStyles.talentPoolSkilledDeveloperPointsPara2
                    }
                  >
                    {AboutUsText.ourTeamPara4}
                  </p>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </section>
      <section className={aboutPageStyles.address}>
        <h2 className={aboutPageStyles.aboutUsAddressHeading}>
          {" "}
          {AboutUsText.addressHeading}
        </h2>
        <div className={aboutPageStyles.addressContainer}>
          {/* <!-- Grid container --> */}

          <div className={aboutPageStyles.addressItem}>
            <h2 className={aboutPageStyles.addressHeading}>
              {AboutUsText.addressCountry[0]}
            </h2>
            <p className={aboutPageStyles.addressPara}>
              {" "}
              {AboutUsText.fullAddress[0]}
            </p>
          </div>
          <div className={aboutPageStyles.addressItem}>
            <h2 className={aboutPageStyles.addressHeading}>
              {AboutUsText.addressCountry[1]}
            </h2>
            <p className={aboutPageStyles.addressPara}>
              {" "}
              {AboutUsText.fullAddress[1]}
            </p>
          </div>
          <div className={aboutPageStyles.addressItem}>
            <h2 className={aboutPageStyles.addressHeading}>
              {AboutUsText.addressCountry[2]}
            </h2>
            <p className={aboutPageStyles.addressPara}>
              {" "}
              {AboutUsText.fullAddress[2]}
            </p>
          </div>
          <div className={aboutPageStyles.addressItem}>
            <h2 className={aboutPageStyles.addressHeading}>
              {AboutUsText.addressCountry[3]}
            </h2>
            <p className={aboutPageStyles.addressPara}>
              {" "}
              {AboutUsText.fullAddress[3]}
            </p>
          </div>
          <div className={aboutPageStyles.addressItem}>
            <h2 className={aboutPageStyles.addressHeading}>
              {AboutUsText.addressCountry[4]}
            </h2>
            <p className={aboutPageStyles.addressPara}>
              {" "}
              {AboutUsText.fullAddress[4]}
            </p>
          </div>
          <div className={aboutPageStyles.addressItem}>
            <h2 className={aboutPageStyles.addressHeading}>
              {AboutUsText.addressCountry[5]}
            </h2>
            <p className={aboutPageStyles.addressPara}>
              {" "}
              {AboutUsText.fullAddress[5]}
            </p>
          </div>
        </div>
      </section>
      <FotterComponent />
    </>
  );
};

export default AboutUs;