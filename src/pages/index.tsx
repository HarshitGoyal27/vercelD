import commonStyle, {
  accordianStylingHomePage,
  cardsStyling,
  worldMap,
} from "@/constants/commonStyle";
import Link from "next/link";
import { HomePageText } from "../constants/texts";
import Navbar from "@/components/molecules/navbar";
import VideoComponent from "@/components/atoms/video";
import CardComponent from "@/components/atoms/card";
import AccordionComponent from "@/components/atoms/accodion";
import ContentComponent from "@/components/molecules/sectionWithImageAndIcon";
import StructureCard from "@/components/atoms/card2";
import FotterComponent from "@/components/molecules/Fotter";
import SpecialCard from "@/components/atoms/SpecialCard";
import CustomButton2 from "@/components/atoms/CustomButton2";
import commonStyles from "./../styles/best.module.css";
import hireDevStyles from "../styles/hireDevStyles.module.css";
import HourglassEmptyRoundedIcon from "@mui/icons-material/HourglassEmptyRounded";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import tcImage from "../assets/images/17_tcImage.svg";
import forebsImage from "../assets/images/18_forebsImage.svg";
import I_icon from "../assets/images/19_IiconImage.svg";
import SpeedQualityCard from "@/components/atoms/Speed&Quality";
import theinfoImage from "../assets/images/20_theinformationImage.svg";
import fastCompanyImage from "../assets/images/21_fastCompanyImage.svg";
import Image from "next/image";
import HomeCandidateProfile from "@/components/molecules/HomeCandidateProfile";
import homePageStyle from "./../styles/homePageStyles.module.css";
import { useRouter } from "next/router";
import CompaniesCarausel from "@/components/molecules/CompaniesCarausel";
import { GlobalContextProvider } from "../../context/store";
export default function Home({ allData }: { allData: any }) {
  const router = useRouter();
  const launchCareerJourneyClicked = () => {
    window.open("https://talent.skillscapital.io/candidateportal?register=true", "_blank");
  };
  const handleButtonExplore = () => {
    // router.push("/talent-pool");
  };
  const HireDeveloperClicked = () => {
    // router.push("/search-developers");
  };
  const ApplyForJobsClicked = () => {
    window.open("https://talent.skillscapital.io/candidateportal?register=true", "_blank");
  };

  return (
    <>
      <section>
        <Navbar />
      </section>

      <main >
        <section id={homePageStyle.avideoContainer} >
          <div className={homePageStyle.flexCenter}>
            <div className={homePageStyle.topContentSection}>
              <h1 className={homePageStyle.homePageMainHeading}>
                <div>{HomePageText.heading_1}</div>
                <div>{HomePageText.heading_2}</div>
                <div>{HomePageText.heading_3}</div>
                {/* <div>{HomePageText.heading_4}</div> */}
              </h1>

              <h2 className={homePageStyle.homePageMainSubHeading}>
                {HomePageText.heading2}
                <br /> {HomePageText.heading2b}
              </h2>
              <p className={homePageStyle.homePageMainHeadingPara}>
                {HomePageText.heading3} <br /> {HomePageText.heading3b} <br />
                {HomePageText.heading3c}
              </p>

              <div className={homePageStyle.topTwoButtons}>
                <Link href="/hire-developers">
                  <CustomButton2
                    label={"Hire Elite Talent"}
                    buttonStyle={{
                      color: "white",
                      borderRadius: "25px",
                      background: "black",
                      fontSize: "18px",
                      padding: "10px 25px",
                      fontFamily: "Poppins",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      margin: "0px 30px 0px 30px",
                      boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                    }}
                    hoverStyle={{
                      color: "black",
                      borderRadius: "25px",
                      background: "white",
                      fontSize: "18px",
                      padding: "10px 25px",
                      border: "1px solid black",
                      boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      margin: "0px 30px 0px 30px",
                    }}
                  />
                </Link>

                <CustomButton2
                  label={"Explore Talent Pool"}
                  onClick={launchCareerJourneyClicked}
                  buttonStyle={{
                    color: "#2871FF",
                    borderRadius: "25px",
                    background: "#FFF",
                    fontSize: "18px",
                    padding: "10px 25px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    fontFamily: "Poppins",
                    border: "1px solid #2871FF",
                    margin: "0px 15px 0px 0px",
                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                  }}
                  hoverStyle={{
                    color: "#FFF",
                    borderRadius: "25px",
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "60px 30px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingRight: "25px",
                    color: "#000",
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                  }}
                >
                  <HourglassEmptyRoundedIcon
                    style={{
                      fontSize: "32px",
                      paddingRight: "5px",
                    }}
                  />{" "}
                  <div style={{ fontWeight: "600" }}>{HomePageText.threeTagLine[0]}{" "}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingRight: "25px",
                    color: "#000",
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                  }}
                >
                  <LeaderboardOutlinedIcon
                    style={{ fontSize: "32px", paddingRight: "5px" }}
                  />
                  <div style={{ fontWeight: "600" }}>{HomePageText.threeTagLine[1]}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingRight: "25px",
                    color: "#000",
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                  }}
                >
                  <GroupsOutlinedIcon
                    style={{ fontSize: "42px", paddingRight: "10px" }}
                  />
                  <div style={{ fontWeight: "600" }}>{HomePageText.threeTagLine[2]}</div>
                </div>
              </div>
            </div>

            <div>
              {/* <VideoComponent
                videoSrc={"/HomePageImages/HomePageVideo.mp4"}
                videoWidth={"500"}
                videoHeight={"600"} */}
              <Image src="/HomePageImages/tech talent.webp" width={600} height={600} alt="" className={homePageStyle.topImage} />

            </div>
          </div>
        </section>
      </main>
      <section id={homePageStyle.ourEliteNetwork} >
        <div
          style={{ background: "#F1F1F1", padding: "10px 100px 50px 100px" }}
        >
          <div style={commonStyle.textCenter}>
            <br />
            <br />
            <h2 style={cardsStyling.sapCloudLegacyMainHeading}>
              {HomePageText.secondHeading_h1}
            </h2>
            <br />
            <h3 style={cardsStyling.sapCloudLegacySubHeading}>{HomePageText.secondSubHeading_h2}</h3>
            <br />
          </div>
          <div className="cards" style={commonStyle.dflex_1}>
            <CardComponent
              imageUrl={"/HomePageImages/1-SAP.png"}
              imageHeight={210}
              imageWidth={250}
              headingNumber={HomePageText.SAP_number}
              headingText={HomePageText.SAP_heading}
              paragraphText={HomePageText.SAP_content}
              buttonText="Connect with SAP Talent Today - Elevate Your SAP Capabilities"
              onButtonClick={handleButtonExplore}
              buttonEnabled={true}
            />
            <CardComponent
              imageUrl={"/HomePageImages/2-CloudImage.png"}
              imageHeight={210}
              imageWidth={250}
              headingNumber={HomePageText.Cloud_number}
              headingText={HomePageText.Cloud_heading}
              paragraphText={HomePageText.Cloud_content}
              buttonText="Connect with SAP Talent Today - Elevate Your SAP Capabilities"
              onButtonClick={handleButtonExplore}
              buttonEnabled={true}
            />
            <CardComponent
              imageUrl={"/HomePageImages/3-LegacyImage.png"}
              imageHeight={210}
              imageWidth={250}
              headingNumber={HomePageText.Legacy_number}
              headingText={HomePageText.Legacy_heading}
              paragraphText={HomePageText.Legacy_content}
              buttonText="Connect with SAP Talent Today - Elevate Your SAP Capabilities"
              onButtonClick={handleButtonExplore}
              buttonEnabled={true}
            />
          </div>
        </div>
      </section>
      <main className={homePageStyle.onDemandStyle}>
        <section >
          <div className="accodiaonHome">
            <div className={homePageStyle.ondemandflex} >
              <div >
                <h2 style={accordianStylingHomePage.accordianStylingHeading}>
                  {HomePageText.thirdHeadingH1}
                </h2>
                <h3 style={accordianStylingHomePage.accordianStylingSubHeading}>{HomePageText.thirdSubHeadingH2_1}</h3>
                <h3 style={accordianStylingHomePage.accordianStylingSubHeading}>{HomePageText.thirdSubHeadingH2_2}</h3>

                <p style={accordianStylingHomePage.accordianStylingPara}>
                  {HomePageText.thirdPara}
                </p>
                <br />
                <br />
                <AccordionComponent
                  title={HomePageText.accodiaonHeading1}
                  content={HomePageText.accordionContent1}
                />
                <br />
                <AccordionComponent
                  title={HomePageText.accodiaonHeading2}
                  content={HomePageText.accordionContent2}
                />
                <br />
                <AccordionComponent
                  title={HomePageText.accodiaonHeading3}
                  content={HomePageText.accordionContent3}
                />
                <br />
                <AccordionComponent
                  title={HomePageText.accodiaonHeading4}
                  content={HomePageText.accordionContent4}
                />
              </div>
              <div>
                <Image
                  src={"/HomePageImages/4-AccordionHomeImage.png"}
                  alt="Accordian Image"
                  width={502}
                  height={460}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <section id={homePageStyle.ourEliteNetwork} >
        <div
          style={{ background: "#F1F1F1", padding: "10px 100px 50px 100px" }}
        >
          <div style={commonStyle.textCenter}>
            <br />
            <br />
            <h2 style={cardsStyling.sapCloudLegacyMainHeading}>
              {HomePageText.secondHeading_h1}
            </h2>
            <br />
            <h3 style={cardsStyling.sapCloudLegacySubHeading}>{HomePageText.secondSubHeading_h2}</h3>
            <br />
          </div>
          <div className="cards" style={commonStyle.dflex_1}>
            <CardComponent
                imageUrl={"/HomePageImages/1-SAP.png"}
                imageHeight={210}
                imageWidth={250}
                headingNumber={HomePageText.SAP_number2}
                headingText={HomePageText.SAP_heading2}
                paragraphText={HomePageText.SAP_content2}
                buttonText="Explore Now"
                onButtonClick={handleButtonExplore}
                buttonEnabled={true}
              />
            <CardComponent
              imageUrl={"/HomePageImages/2-CloudImage.png"}
              imageHeight={210}
              imageWidth={250}
              headingNumber={HomePageText.Cloud_number2}
              headingText={HomePageText.Cloud_heading2}
              paragraphText={HomePageText.Cloud_content2}
              buttonText="Explore Now"
              onButtonClick={handleButtonExplore}
              buttonEnabled={true}
            />
            <CardComponent
              imageUrl={"/HomePageImages/3-LegacyImage.png"}
              imageHeight={210}
              imageWidth={250}
              headingNumber={HomePageText.Legacy_number2}
              headingText={HomePageText.Legacy_heading2}
              paragraphText={HomePageText.Legacy_content2}
              buttonText="Explore Now"
              onButtonClick={handleButtonExplore}
              buttonEnabled={true}
            />
          </div>
        </div>
      </section>
      <main >
        <section className={homePageStyle.chooseDeveloper} >
          <ContentComponent
            imageUrl={"/HomePageImages/WhyUs.png"}
            altText={"WhySkillsCapitalDev"}
            Imgheight={550}
            Imgwidth={500}
            order="imageLeft"
            pointsIcons={HomePageText.pointsIcons}
            heading={HomePageText.whyOurDevelopersHeading}
            subHeading={HomePageText.whyOurDevelopersPara}
            para={HomePageText.whyOurDevelopersKeyPoint}
            noOfPoints={4}
            points={[
              HomePageText.whyOurDevelopersSubHeading1,
              HomePageText.whyOurDevelopersSubHeading2,
              HomePageText.whyOurDevelopersSubHeading3,
              HomePageText.whyOurDevelopersSubHeading4
            ]}
            paraPoints={HomePageText.paraPoints}
            noOflogoImages={3}
            logoImagesUrl={[`1`, "2", "3","4"]}
            buttonEnable={false}
          />
        </section>
      </main>

      <section >
        <div className={homePageStyle.worldMapStyle} >
          <div style={{ padding: "60px 0px 60px 60px", position: "absolute", zIndex: "1" }}>
            <h1 style={worldMap.heading}>{HomePageText.worldMapHeading}</h1>

            <p style={worldMap.para}>{HomePageText.worldMapPara}</p>

            <br />
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "80px",
              }}
            >
              <div>
                <div style={worldMap.worldMapNumber}>
                  {HomePageText.worldMapNum1}
                </div>
                <span style={worldMap.worldMapNumberTitle}>
                  {HomePageText.worldMapNum1Title}
                </span>
              </div>
              <div>
                <div style={worldMap.worldMapNumber}>
                  {HomePageText.worldMapNum2}
                </div>
                <span style={worldMap.worldMapNumberTitle}>
                  {HomePageText.worldMapNum2Title}
                </span>
              </div>
              <div>
                <div style={worldMap.worldMapNumber}>
                  {HomePageText.worldMapNum3}
                </div>
                <span style={worldMap.worldMapNumberTitle}>
                  {HomePageText.worldMapNum3Title}
                </span>
              </div>

              <br />
            </div>
            <br />
            <br />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                gap: "40px",
                width: "40vw",
              }}
            >
              <CustomButton2
                label={HomePageText.worldMapButton1}
                onClick={HireDeveloperClicked}
                buttonStyle={{
                  color: "#2871FF",
                  borderRadius: "5px",
                  background: "#FFF",
                  fontSize: "18px",
                  padding: "10px 25px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
                hoverStyle={{
                  color: "#FFF",
                  borderRadius: "5px",
                  background: "#2871FF",
                  fontSize: "18px",
                  border: "2px solid #FFF",
                  padding: "10px 25px",
                  justifyContent: "center",
                  boxShadow: " 0px 2px 2px smokeWhite",
                  alignItems: "center",
                  gap: "10px",
                }}
              />
              <CustomButton2
                label={HomePageText.worldMapButton2}
                onClick={ApplyForJobsClicked}
                buttonStyle={{
                  color: "#FFF",
                  borderRadius: "5px",
                  background: "#2871FF",
                  fontSize: "18px",
                  border: "2px solid #FFF",
                  padding: "10px 25px",
                  justifyContent: "center",
                  boxShadow: " 0px 2px 2px smokeWhite",
                  alignItems: "center",
                  gap: "10px",
                }}
                hoverStyle={{
                  color: "#2871FF",
                  borderRadius: "5px",
                  background: "#FFF",
                  fontSize: "18px",
                  padding: "10px 25px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              position: "relative"
            }}
          >
            <Image
              src={"/HomePageImages/WorldImage.png"}
              alt="worldMap"
              width={570}
              height={380}
              className={homePageStyle.worldmapImage}
            />
          </div>
        </div>
      </section>
      <main >
        <section style={commonStyle.sectionMargin}>
          <center>
            {" "}
            <h2 className={homePageStyle.whyChooseUs2}>
              {HomePageText.whyUsHeading}
            </h2>{" "}
          </center>

          <div className={homePageStyle.threeCardStyle} >
            <StructureCard
              imageUrl={"/HomePageImages/deeply-vetted1.jpg"}
              imageHeight={300}
              imageWidth={350}
              cardHeading={HomePageText.whyUsCard1Heading}
              altText="skillsCapital"
              bulletPoints={HomePageText.whyUsCard1Points}
            />
            <SpecialCard
              cardHeading={HomePageText.whyUsMainCardHeading}
              points={HomePageText.whyUsMainCardPoints}
              logoImages={HomePageText.whyUsMainCardBulletIcons}
              btnLabel={HomePageText.whyUsMainCardButton}
            />
            <StructureCard
              imageUrl={"/HomePageImages/whychoose-2.png"}
              imageHeight={280}
              imageWidth={280}
              cardHeading={HomePageText.whyUsCard2Heading}
              altText="skillsCapital"
              bulletPoints={HomePageText.whyUsCard2Points}
            />
          </div>
        </section>

        <section className={homePageStyle.speedcard} >
          <div className={homePageStyle.speedQualityContainer}>
            <SpeedQualityCard
              title={HomePageText.speedHeading}
              subheading={HomePageText.speedSubHeading}
              imageSrc={"/HomePageImages/5-SpeedImage.png"}
              imageHeight={250}
              imageWidth={300}
              paragraph={HomePageText.speedPara}
            />
            <SpeedQualityCard
              title={HomePageText.QualityHeading}
              subheading={HomePageText.QualitySubHeading}
              imageSrc={"/HomePageImages/6-QualityImage.png"}
              imageHeight={230}
              imageWidth={300}
              paragraph={HomePageText.qualityPara}
            />
          </div>
        </section>


        <section>
        <div className={homePageStyle.backGroundBlueHomePage}>
          <div>
            <h1 id={hireDevStyles.heading}>
              {HomePageText.topCompaniesHeading}
            </h1>
            <br />
            <br />
            <br />
            {/* <p style={blueSection.para}>{HomePageText.topCompaniesPara}</p> */}
            <br />
            <br />

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>


              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image 
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_1.png`}
                  alt="Logo"
                  height={90}
                  width={260}
                  style={{marginTop:"0px", borderRadius: "10px" }}
                />
              </div>

              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_2.jpg`}
                  alt="Logo"
                  height={90}
                  width={160}
                  style={{marginTop:"0px", borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_3.jpg`}
                  alt="Logo"
                  height={80}
                  width={160}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_4.jpeg`}
                  alt="Logo"
                  height={90}
                  width={180}
                  style={{ borderRadius: "10px" }}
                />
              </div>

              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_5.jpg`}
                  alt="Logo"
                  height={80}
                  width={270}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_6.png`}
                  alt="Logo"
                  height={60}
                  width={240}
                  style={{borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_7.jpg`}
                  alt="Logo"
                  height={80}
                  width={170}
                  style={{ borderRadius: "10px" }}
                />
              </div>

              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_8.jpeg`}
                  alt="Logo"
                  height={70}
                  width={250}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_9.jpg`}
                  alt="Logo"
                  height={50}
                  width={230}
                  style={{marginTop:"27px"}}
                />
              </div>
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_10.jpeg`}
                  alt="Logo"
                  height={80}
                  width={150}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_11.jpg`}
                  alt="Logo"
                  height={80}
                  width={150}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "00px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_12.jpeg`}
                  alt="Logo"
                  height={90}
                  width={240}
                  style={{ marginTop:"0px",borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_13.jpg`}
                  alt="Logo"
                  height={50}
                  width={240}
                  style={{marginTop:"30px", borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_14.jpg`}
                  alt="Logo"
                  height={60}
                  width={190}
                  style={{marginTop:"20px", borderRadius: "10px" }}
                />
              </div>
              


            </div>
          </div>
        </div>
      </section>
        {/* <section className={homePageStyle.outerContainer}>
          <CompaniesCarausel />
          <div style={{ display: "flex", gap: "100px", marginTop: "200px" }}>
            <Image
              style={{
                width: "172.214px",
                height: "30.94px",
                flexShrink: "0",
              }}
              src={fastCompanyImage}
              alt=""
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-9px",
              }}
            >
              <Image
                style={{
                  width: "49.07px",
                  height: "49.07px",
                  flexShrink: "0",
                }}
                src={I_icon}
                alt=""
              />
              <Image
                style={{
                  width: "225.908px",
                  height: "23.262px",
                  flexShrink: "0",
                }}
                src={theinfoImage}
                alt=""
              />
            </div>
            <Image
              style={{ width: "98px", height: "25px", flexShrink: "0" }}
              src={forebsImage}
              alt=""
            />
            <Image
              style={{
                width: "62px",
                height: "31px",
                flexShrink: "0",
              }}
              src={tcImage}
              alt=""
            />
          </div>
        </section> */}
        {/* <section className={homePageStyle.carauselOutercontainer}>
          <HomeCandidateProfile/>
          </section> */}

      </main>

      <FotterComponent />
    </>
  );
}
