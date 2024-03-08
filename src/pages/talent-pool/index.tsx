import Navbar from "@/components/molecules/navbar";
import commonStyle, {
  blackBox,
  talentPoolHeroSection,
} from "@/constants/commonStyle";
import devidImage from "../../assets/images/Talent_pool/devidLImage.svg";
import fiveStart from "../../assets/images/Talent_pool/five_start.jpg";
import { Box, CardContent } from '@mui/material';
import Image from "next/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TalentPoolText } from "@/constants/texts";
import React from "react";
import css from "./../../styles/best.module.css";
import talentPoolStyles from "./../../styles/talentPoolStyles.module.css";
import leadershipImage from "../../assets/images/Talent_pool/17_leadershipExperties.png";
import marketdistinctionImage from "../../assets/images/Talent_pool/16_marketDistinction.png";
import globalNetworkImage from "../../assets/images/Talent_pool/15_globalNetworkProwess.png";
import AccordionComponent from "@/components/atoms/accodion";
import FotterComponent from "@/components/molecules/Fotter";
import ResponsiveCarousel from "@/components/molecules/ProfileCorousel";
import CustomButton2 from "@/components/atoms/CustomButton2";
import MiddleResponsiveCorousel from "@/components/molecules/LargeProfileCrousel";
import TalentPoolContentComponent from "@/components/molecules/TalentPoolContentComponent";
import TalentPoolCandidateProfile from "@/components/molecules/TalentPoolCandidateProfile";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useRouter } from "next/router";
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        backgroundColor: "white",
        marginTop: "-28px",
      } as any}
      onClick={onClick}
    >
      <NavigateNextIcon sx={{ color: "black", fontSize: "46px" }} />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        backgroundColor: "white",
        marginTop: "-28px",
        '@media("768px"<width and width<="1024px")': {
          marginLeft: "100px",
        }
      } as any}
      onClick={onClick}
    >
      <NavigateBeforeIcon sx={{ color: "black", fontSize: "46px", marginLeft: "-20px" }} />
    </div>
  );
}

const TalentCloudPage = () => {

  const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const data: any = [
    {
      image: devidImage,
      Name: "Devid L",
      bio: "The platform's real-time search and advanced filters have made the hiring process efficient and targeted"
    },
    {
      image: devidImage,
      Name: "James T",
      bio: "The platform's real-time search and advanced filters have made the hiring process efficient and targeted"
    },
    {
      image: devidImage,
      Name: "Jhon B",
      bio: "The platform's real-time search and advanced filters have made the hiring process efficient and targeted"
    },
    {
      image: devidImage,
      Name: "Robert ",
      bio: "The platform's real-time search and advanced filters have made the hiring process efficient and targeted"
    },
    {
      image: devidImage,
      Name: "Greg stuart",
      bio: "The platform's real-time search and advanced filters have made the hiring process efficient and targeted"
    }

  ]
  const router = useRouter();
  function exploreClicked() {
    router.push("/hire-developers")
  }
  function startRecutingFun() {
    alert("startRecutingFun Clicked");
  }


  return (
    <div >
      <section>
      <Navbar />
      </section>
      <Box className={talentPoolStyles.mainPadding}>
        <section style={{ height: "1000px" }}>
          <div className={talentPoolStyles.Pageheading}>
            <h1 className={talentPoolStyles.talentPoolMainHeading}>
              {TalentPoolText.talentPoolHeroHeading}
              <span style={talentPoolHeroSection.boldHeading}>
                {TalentPoolText.talentPoolHeroBoldHeading}
              </span>
            </h1>

            <h2 className={`${talentPoolStyles.talentPoolMainSubHeading} `}>
              {TalentPoolText.talentPoolHeroSubHeading}
            </h2>
          </div>
          <br />
          
          <div className={talentPoolStyles.masterContainer}>
            {/* <div className={talentPoolStyles.profileLeft}> */}
              <ResponsiveCarousel opacityValue={0.7} skillSetValue="sap" />
            {/* </div> */}
            <div>
              <MiddleResponsiveCorousel />
            </div>
            {/* <div className={talentPoolStyles.profileRight}> */}
              <ResponsiveCarousel opacityValue={0.7} skillSetValue="cloud" />
            {/* </div> */}

          </div>
        </section>
        <section className={talentPoolStyles.bestp}>
          <div className={talentPoolStyles.bestProfileText}>
            {" "}
            <h2 className={`${talentPoolStyles.bestProfilesHeading} `}>
              Elite profiles, AI-vetted, certified talent
            </h2>
          </div>
          <TalentPoolCandidateProfile />


        </section>
      </Box>
      <main style={commonStyle.mainPadding}>
        <section style={commonStyle.sectionMarginBottom}>
          <section style={commonStyle.sectionMarginBottom}>
            <section style={{ height: "1200px" }}>
              <section className={talentPoolStyles.backgroundLayout}>
                <div style={blackBox.innerContainer}>
                  <div className={`${talentPoolStyles.hoeAIvettingWorks} `}>
                    How AI vetting works?
                  </div>
                  <div style={{ display: "flex", gap: "110px" }}>
                    <Image
                      src="/TalentPoolImages/Vetting1.png"
                      alt=""
                      width={1000}
                      height={695}
                      style={blackBox.innerImg}
                    />

                    <Image
                      src="/TalentPoolImages/Vetting2.png"
                      alt=""
                      width={1000}
                      height={695}
                      style={blackBox.innerImg}
                    />
                    <Image
                      src="/TalentPoolImages/Vetting3.png"
                      alt=""
                      width={1000}
                      height={695}
                      style={blackBox.innerImg}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "350px",
                      marginLeft: "90px",
                    }}
                  >
                    <div>
                      <div style={blackBox.circleSize}>
                        <div style={blackBox.circleText}>1</div>
                      </div>
                      <div style={blackBox.stepText}>
                        You submit your requirements
                      </div>
                    </div>
                    <div style={blackBox.line1}></div>
                    <div>
                      <div style={blackBox.circleSize}>
                        <div style={blackBox.circleText}>2</div>
                      </div>
                      <div style={blackBox.stepText}>Advanced AI Algorithm</div>
                    </div>
                    <div style={blackBox.line2}></div>
                    <div>
                      <div style={blackBox.circleSize}>
                        <div style={blackBox.circleText}>3</div>
                      </div>
                      <div style={blackBox.stepText}>
                        You will receive the best profiles
                      </div>
                    </div>
                  </div>
                  <video
                    src="https://www.taxmann.com/emailer/images/CompaniesAct.mp4"
                    style={blackBox.videoStyle}
                    controls
                  ></video>
                </div>
              </section>
            </section>
          </section>

          <section className={`${talentPoolStyles.diverseCommunityOuterClass} `}>
            <div className={`${talentPoolStyles.diverseCommunityContainer1} `}>
              <div>
                <h2 className={`${talentPoolStyles.diverseCommunityHeading} `}>
                  {TalentPoolText.bestDeveloperWorldHeading}
                </h2>
                <h3
                  className={`${talentPoolStyles.diverseCommunitySubHeading} `}
                >
                  {TalentPoolText.bestDeveloperWorldSubHeading}
                </h3>
                <p className={`${talentPoolStyles.diverseCommunityPara} `}>
                  {TalentPoolText.bestDeveloperWorldPara}
                </p>
              </div>
              <div>
                <Image
                  src="/TalentPoolImages/1-world.gif"
                  width={500}
                  height={500}
                  alt="WorldImg"
                />
              </div>
            </div>
          </section>
          <section className={`${talentPoolStyles.diverseCommunityOuterContainer} `}>
            <div className={`${talentPoolStyles.diverseCommunityContainer} `}>
              <div>
                <Image
                  src="/TalentPoolImages/2-India.png"
                  width={500}
                  height={500}
                  alt="IndiaImage"
                />
              </div>
              <div>
                <h2 className={`${talentPoolStyles.diverseCommunityHeading} `}>
                  {TalentPoolText.bestDeveloperIndiaHeading}
                </h2>
                <h3
                  className={`${talentPoolStyles.diverseCommunitySubHeading} `}
                >
                  {TalentPoolText.bestDeveloperIndiaSubHeading}
                </h3>
                <p className={`${talentPoolStyles.diverseCommunityPara} `}>
                  {TalentPoolText.bestDeveloperIndiaPara}
                </p>
              </div>
            </div>
          </section>

          <section className={talentPoolStyles.sectionMarginBottom}>
            <div className={css.flexContainer}>
              <div>
                <div>
                  <center>
                    <h2 style={{ color: "#2871FF", fontSize: "2.5rem" }}>
                      {TalentPoolText.talentPoolVendersHeading}
                    </h2>
                  </center>
                </div>
                <p className={`${talentPoolStyles.vendorsSubHeading} `}>
                  {TalentPoolText.talentPoolVendersSubHeading}
                </p>
              </div>
            </div>

            <div className={css.flexContainer}>
              <div className={css.imageColumn1}>
                <div className={css.flexItem}>
                  <Image
                    src="/TalentPoolImages/6-Vendors.png"
                    width={270}
                    height={250}
                    alt="Picture of the author"
                  />
                  <p style={commonStyle.blueColorBold}>
                    {TalentPoolText.talentPoolVendersImgHeading1}
                  </p>
                </div>
                <div className={css.flexItem}>
                  <Image
                    src="/TalentPoolImages/8-FullStackDevelopers.png"
                    width={300}
                    height={250}
                    alt="Picture of the author"
                  />

                  <p style={commonStyle.blueColorBold}>
                    {TalentPoolText.talentPoolVendersImgHeading3}
                  </p>
                </div>
              </div>
              <div>
                <div className={css.flexItem}>
                  <Image
                    src="/TalentPoolImages/7-FreeLancers.png"
                    width={270}
                    height={250}
                    alt="Picture of the author"
                  />

                  <p style={commonStyle.blueColorBold}>
                    {TalentPoolText.talentPoolVendersImgHeading2}
                  </p>
                </div>
                <div className={css.flexItem}>
                  <Image
                    src="/TalentPoolImages/9-PartTimeDevelopers.png"
                    width={300}
                    height={250}
                    alt="Picture of the author"
                  />

                  <p style={commonStyle.blueColorBold}>
                    {TalentPoolText.talentPoolVendersImgHeading4}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className={talentPoolStyles.sectionMargin}>
          <div className={talentPoolStyles.talentPoolSkilledDeveloperSection}>
            <div
              className={
                talentPoolStyles.talentPoolSkilledDeveloperHeadingContainer
              }
            >
              <h2
                className={talentPoolStyles.talentPoolSkilledDeveloperHeading}
              >
                {TalentPoolText.talentPoolSkilledDeveloperHeading}
              </h2>
              <p
                className={
                  talentPoolStyles.talentPoolSkilledDeveloperSubHeading
                }
              >
                {TalentPoolText.talentPoolSkilledDeveloperSubHeading}
              </p>
            </div>
            <br />
            <div
              className={
                talentPoolStyles.talentPoolSkilledDeveloperMainContainer
              }
            >
              <div
                className={
                  talentPoolStyles.talentPoolSkilledDeveloperContentContainer1
                }
              >
                <Image
                  src="/TalentPoolImages/SkilledDeveloper-1.png"
                  width={600}
                  height={500}
                  alt="SkilledDeveloper1"
                />
                <div
                  className={
                    talentPoolStyles.talentPoolSkilledDeveloperContentContainer1points
                  }
                >
                  <h3
                    className={
                      talentPoolStyles.talentPoolSkilledDeveloperPointsHeading
                    }
                  >
                    {TalentPoolText.talentPoolSkilledDeveloperPoint1}
                  </h3>
                  <p
                    className={
                      talentPoolStyles.talentPoolSkilledDeveloperPointsPara
                    }
                  >
                    {TalentPoolText.talentPoolSkilledDeveloperPara1}
                  </p>
                  <p
                    className={
                      talentPoolStyles.talentPoolSkilledDeveloperReadMore1
                    }
                  >
                    Read More
                  </p>
                </div>
              </div>

              <div>
                <div
                  id={
                    talentPoolStyles.aggrigatedTalentcolumn2
                  }
                >
                  <Image
                    src="/TalentPoolImages/SkilledDeveloper-2.png"
                    width={200}
                    height={200}
                    alt="SkilledDeveloper2"
                  />
                  <div>
                    <h3
                      className={
                        talentPoolStyles.talentPoolSkilledDeveloperPointsHeading2
                      }
                    >
                      {TalentPoolText.talentPoolSkilledDeveloperPoint2}
                    </h3>
                    <p
                      className={
                        talentPoolStyles.talentPoolSkilledDeveloperPointsPara2
                      }
                    >
                      {TalentPoolText.talentPoolSkilledDeveloperPara2}
                    </p>
                    <p
                      className={
                        talentPoolStyles.talentPoolSkilledDeveloperReadMore
                      }
                    >
                      Read More
                    </p>
                  </div>
                </div>
                <div
                  id={
                    talentPoolStyles.aggrigatedTalentcolumn2
                  }
                >
                  <Image
                    src="/TalentPoolImages/SkilledDeveloper-3.png"
                    width={200}
                    height={200}
                    alt="SkilledDeveloper3"
                  />
                  <div>
                    <h3
                      className={
                        talentPoolStyles.talentPoolSkilledDeveloperPointsHeading2
                      }
                    >
                      {TalentPoolText.talentPoolSkilledDeveloperPoint3}
                    </h3>
                    <p
                      className={
                        talentPoolStyles.talentPoolSkilledDeveloperPointsPara2
                      }
                    >
                      {TalentPoolText.talentPoolSkilledDeveloperPara3}
                    </p>
                    <p
                      className={
                        talentPoolStyles.talentPoolSkilledDeveloperReadMore
                      }
                    >
                      Read More
                    </p>
                  </div>
                </div>
                <div
                  id={
                    talentPoolStyles.aggrigatedTalentcolumn2
                  }
                >
                  <Image
                    src="/TalentPoolImages/SkilledDeveloper-4.png"
                    width={200}
                    height={200}
                    alt="SkilledDeveloper4"
                  />
                  <div>
                    <h3
                      className={
                        talentPoolStyles.talentPoolSkilledDeveloperPointsHeading2
                      }
                    >
                      {TalentPoolText.talentPoolSkilledDeveloperPoint4}
                    </h3>
                    <p
                      className={
                        talentPoolStyles.talentPoolSkilledDeveloperPointsPara2
                      }
                    >
                      {TalentPoolText.talentPoolSkilledDeveloperPara4}
                    </p>
                    <p
                      className={
                        talentPoolStyles.talentPoolSkilledDeveloperReadMore
                      }
                    >
                      Read More
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why we focus */}
        <section className={talentPoolStyles.whywefocus}>
          <div className={talentPoolStyles.headingText}>
            {TalentPoolText.whyweFocus}
          </div>
          <div className={talentPoolStyles.smalltext}>
            {TalentPoolText.whyweFocusSubtitle}
          </div>
          <div style={{ display: "flex", marginLeft: "50px" }}>
            <div>
              <Image style={{ width: "384px", height: "260.64px", flexShrink: "0" }} src={globalNetworkImage} alt="" />
              <div className={talentPoolStyles.whywefocusImageHeading}>{TalentPoolText.whyweFocusPoint1}</div>
              <div className={talentPoolStyles.whywefocusImageContent}>{TalentPoolText.whyweFocusPoint1Para}</div>
            </div>
            <div>
              <Image style={{ width: "384px", height: "260.64px", flexShrink: "0" }} src={marketdistinctionImage} alt="" />
              <div className={talentPoolStyles.whywefocusImageHeading}>{TalentPoolText.whyweFocusPoint2}</div>
              <div className={talentPoolStyles.whywefocusImageContent}> {TalentPoolText.whyweFocusPoint2Para}</div>
            </div>
            <div>
              <Image style={{ width: "384px", height: "260.64px", flexShrink: "0" }} src={leadershipImage} alt="" />
              <div className={talentPoolStyles.whywefocusImageHeading}>{TalentPoolText.whyweFocusPoint3}</div>
              <div className={talentPoolStyles.whywefocusImageContent}>{TalentPoolText.whyweFocusPoint3Para}</div>
            </div>
          </div>
        </section>

        <section className={talentPoolStyles.ourtalentpool} >
          <h2 className={talentPoolStyles.talentPoolFeaturesHeading}>
            {TalentPoolText.talentPoolFeaturesHeading}
          </h2>
          <div>
            <TalentPoolContentComponent
              order="imageLeft"
              imageUrl={"/TalentPoolImages/10-TalentPoolFeature.png"}
              altText={"WhySkillsCapitalDev"}
              Imgheight={590}
              Imgwidth={635}
              pointsIcons={TalentPoolText.talentPoolFeaturesPointsIcons}
              heading={TalentPoolText.talentPoolFeaturesHeading}
              subHeading={TalentPoolText.talentPoolFeaturesSubHeading}
              noOfPoints={3}
              points={[
                TalentPoolText.talentPoolFeaturesPoint1,
                TalentPoolText.talentPoolFeaturesPoint2,
              ]}
              paraPoints={TalentPoolText.talentPoolFeaturesParaPoints}
              noOflogoImages={4}
              logoImagesUrl={[`1`, "2", "3"]}
              buttonEnable={true}
            />
          </div>
          <div className={talentPoolStyles.integratedAssg}>
            <TalentPoolContentComponent
              order="imageRight"
              imageUrl={"/TalentPoolImages/11-TalentPoolFeature-b.png"}
              altText={"WhySkillsCapitalDev"}
              Imgheight={635}
              Imgwidth={590}
              pointsIcons={TalentPoolText.talentPoolFeaturesPointsIcons}
              heading={TalentPoolText.talentPoolFeaturesHeading}
              subHeading={TalentPoolText.talentPoolFeaturesSubHeading}
              noOfPoints={3}
              points={[
                TalentPoolText.talentPoolFeaturesPoint3,
                TalentPoolText.talentPoolFeaturesPoint4,
              ]}
              paraPoints={TalentPoolText.talentPoolFeaturesParaPoints2}
              noOflogoImages={4}
              logoImagesUrl={[`1`, "2", "3"]}
              buttonEnable={true}
            />
          </div>
        </section>

        <br />
        <br />

        <section style={commonStyle.sectionMargin}>
          <section className={`${talentPoolStyles.diverseCommunitySection} `}>
            <div className={`${talentPoolStyles.diverseCommunityContainer} `}>
              <div>
                <h2 className={`${talentPoolStyles.onlineAssessmentHeading} `}>
                  {TalentPoolText.candidateTestHeading}
                </h2>
                <h3
                  className={`${talentPoolStyles.onlineAssessmentSubHeading} `}
                >
                  {TalentPoolText.candidateTestSubHeading}
                </h3>
                <p className={`${talentPoolStyles.onlineAssessmentPara} `}>
                  {TalentPoolText.candidateTestPara}
                </p>
              </div>
              <div>
                <Image
                  src="/TalentPoolImages/12-OnlineAssessment.png"
                  width={500}
                  height={500}
                  alt="IndiaImage"
                  style={{ borderRadius: "50px" }}
                />
              </div>
            </div>
          </section>
        </section>
      </main>
      <section className={talentPoolStyles.outercarausel} >
        <div className={talentPoolStyles.aboutUsCarausel}>
          <div className={talentPoolStyles.carauselHeading}>{TalentPoolText.clientSayAbout}</div>
          <Slider {...settings}>
            {data.map((item: any, index: any) => (
              <div key={index}>
                <div className={talentPoolStyles.carauselboxstyle}>
                  <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <div>
                      <Image style={{ width: "98px", height: "98px", marginTop: "-20px", borderRadius: "98px" }} src={item.image} alt="" />
                    </div>
                    <div className={talentPoolStyles.name}>
                      {item.Name}
                    </div>
                    <Image style={{ height: "20px", width: "120px" }} src={fiveStart} alt="" />
                    <div className={talentPoolStyles.content}>{item.bio}</div>
                  </CardContent>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className={talentPoolStyles.blackSection}>
        <div className={`${talentPoolStyles.blackSectionContainer}`}>
          <div>
            <h2 className={`${talentPoolStyles.blackSectionHeading}`}>
              {TalentPoolText.talentPoolBlackSection}
            </h2>
            <br />
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CustomButton2
                label={TalentPoolText.talentPoolBlackSectionBtnText}
                onClick={exploreClicked}
                buttonStyle={{
                  background: "transparent",
                  color: `white`,
                  padding: `10px 25px`,
                  border: "2px solid #fff",
                  borderRadius: `5px`,
                  cursor: `pointer`,
                  fontSize: `18px`,
                  justifyContent: `center`,
                  alignItems: `center`,
                  gap: `10px`,
                  margin: `0px 15px 0px 5px`,
                }}
                hoverStyle={{
                  background: `white`,
                  color: `black`,
                  padding: `10px 25px`,
                  border: "2px solid white",
                  borderRadius: `5px`,
                  cursor: `pointer`,
                  fontSize: `18px`,
                  justifyContent: `center`,
                  alignItems: `center`,
                  gap: `10px`,
                  margin: `0px 15px 0px 5px`,
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <main style={commonStyle.mainPadding}>
        <section className={talentPoolStyles.wholeAccodiaon}>
          <section id="faq" >
            <div className="accodiaonHome">
              {" "}
              <h2 className={talentPoolStyles.sectionHeadingfaq}>
                {TalentPoolText.faqHeading}
              </h2>
              <div className={talentPoolStyles.accodionfaq}>
                <div >
                  <AccordionComponent
                    title={TalentPoolText.faqAccordian1Title}
                    content={TalentPoolText.faqAccordian1Content}
                  />
                  <br />
                  <AccordionComponent
                    title={TalentPoolText.faqAccordian2Title}
                    content={TalentPoolText.faqAccordian2Content}
                  />
                  <br />
                  <AccordionComponent
                    title={TalentPoolText.faqAccordian3Title}
                    content={TalentPoolText.faqAccordian3Content}
                  />
                </div>
                 <div >
                  <AccordionComponent
                    title={TalentPoolText.faqAccordian4Title}
                    content={TalentPoolText.faqAccordian4Content}
                  />
                  <br />
                  <AccordionComponent
                    title={TalentPoolText.faqAccordian5Title}
                    content={TalentPoolText.faqAccordian5Content}
                  />
                  <br />
                  <AccordionComponent
                    title={TalentPoolText.faqAccordian6Title}
                    content={TalentPoolText.faqAccordian6Content}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>

      <FotterComponent />
    </div>
  );
};

export default TalentCloudPage;
