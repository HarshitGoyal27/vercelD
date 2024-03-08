import Navbar from "@/components/molecules/navbar";
import React from "react";
import homePageStyle from "./../../styles/homePageStyles.module.css";
import vettingPageStyles from "./../../styles/vettingStyles.module.css";
import talentPoolStyles from "../../styles/talentPoolStyles.module.css"
import Image from "next/image";
import commonStyle, { blackBox } from "@/constants/commonStyle";
import AccordionComponent from "@/components/atoms/accodion";
import { HireDeveloperPageText, VettingPageText } from "@/constants/texts";
import { Button } from "@mui/material";
import hireDevStyles from "../../styles/hireDevStyles.module.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CustomButton2 from "@/components/atoms/CustomButton2";
const Vetting = () => {
  const hirenowClick = () => {

  }
  return (
    <>
      <Navbar />
      <main className={vettingPageStyles.mainMarginAllSides}>
        <section className={vettingPageStyles.sectionMargin}>
          <div className={vettingPageStyles.aboutUsHeroContainer}>
            <h1 className={vettingPageStyles.aboutUsHeroHeading}>
              {VettingPageText.vettingHeroHeading}
            </h1>
            <h2 className={vettingPageStyles.aboutUsHeroSubHeading}>
              {VettingPageText.vettingHeroSubHeading}
            </h2>
          </div>
        </section>
      </main>
      <section className={vettingPageStyles.blueSection}>
        <div style={{ fontSize: "52px" }}>Why 3%?</div>
        <div style={{ fontSize: "20px", width: "776px", textAlign: "center" }}>The name &apos;Skills Capital&apos; reflects our commitment to sourcing top talent globally. Through a meticulous screening process, we identify domain experts with exceptional passion and drive.</div>
        <div style={{ fontSize: "20px", width: "776px", textAlign: "center" }}>Among the multitude of monthly applications Skills Capital receives, typically less than 3% meet our acceptance criteria.</div>
        <div style={{ display: "flex", gap: "20px" }}>
          <CustomButton2
            label="Hire Now"
            onClick={hirenowClick}
            buttonStyle={{
              width: "262px",
              height: "51.6px",
              border: "1px solid #2871ff",
              color: "#fff",
              backgroundColor: "#2871ff",
            }}
            hoverStyle={{
              backgroundColor: "lightblue",
              color: "#2871ff",
            }}
          />
          <CustomButton2
            label="Apply for Jobs"
            onClick={hirenowClick}
            buttonStyle={{
              width: "262px",
              height: "51.6px",
              border: "1px solid #2871ff",
              color: "#2871ff",
              backgroundColor: "white",
            }}
            hoverStyle={{
              backgroundColor: "lightblue",
              color: "#fff",
              border: "1px solid #2871ff",
            }}
          />
        </div>
      </section>

      <div className={vettingPageStyles.TrustedCompaniesSection}>
        <div className={hireDevStyles.TrustedCompaniesContainer}>
          {HireDeveloperPageText.BottomImagesHeading}
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          {" "}
          {HireDeveloperPageText.BottomImagesIconsArray.map(
            (source, index) => (
              <Image
                height={25}
                width={100}
                style={{ margin: "0px 10px" }}
                key={index}
                src={`/HireDevImages/Company${index + 1}.png`}
                alt={`Image ${index}`}
              />
            )
          )}{" "}
        </div>
      </div>

      <main className={vettingPageStyles.mainMarginAllSides}>
        <div className={vettingPageStyles.headingdual}>Utilizing a dual-strategy in candidate selection</div>
        <div className={vettingPageStyles.twoboxes} >
          <section className={vettingPageStyles.imageSection}>
            <div className={vettingPageStyles.headingdualsub}>AI-driven candidate selection</div>
            <div className={vettingPageStyles.firstContainer}>
              <div className={vettingPageStyles.rightImage}>We employ a sophisticated AI algorithm to meticulously analyze candidates&apos; CVs, generating comprehensive scores. Our robust algorithm, characterized by its strength and precision, enables us to make recommendations to clients without the necessity of conducting candidate interviews.</div>
            </div>
            <div className={vettingPageStyles.stepsContainer2}>
              <div className={vettingPageStyles.vettingsteps}>
                <div>
                  <div style={{ marginTop: "5px" }}>step</div>
                  <div style={{ fontSize: "34px" }}>1</div>
                </div>
                <div>
                  <div style={{ fontSize: "28px", marginBottom: "10px" }}>Candidate Submission</div>
                  <div>Candidates submit their CVs to the hiring platform.</div>
                </div>
              </div>
              <div className={vettingPageStyles.vettingsteps}>
                <div>
                  <div style={{ marginTop: "5px" }}>step</div>
                  <div style={{ fontSize: "34px" }}>2</div>
                </div>
                <div>
                  <div style={{ fontSize: "28px", marginBottom: "10px" }}>AI Algorithm Utilization</div>
                  <div>The platform employs a sophisticated AI algorithm for candidate evaluation.</div>
                </div>
              </div>
              <div className={vettingPageStyles.vettingsteps}>
                <div>
                  <div style={{ marginTop: "5px" }}>step</div>
                  <div style={{ fontSize: "34px" }}>3</div>
                </div>
                <div>
                  <div style={{ fontSize: "28px", marginBottom: "10px" }}>CV Analysis</div>
                  <div>The AI algorithm meticulously analyzes the content of candidates&apos; CVs.</div>
                </div>
              </div>
              <div className={vettingPageStyles.vettingsteps}>
                <div>
                  <div style={{ marginTop: "5px" }}>step</div>
                  <div style={{ fontSize: "34px" }}>4</div>
                </div>
                <div>
                  <div style={{ fontSize: "28px", marginBottom: "10px" }}>Automated Decision Support</div>
                  <div>The AI-driven process streamlines decision-making for efficient candidate selection.</div>
                </div>
              </div>
              <div className={vettingPageStyles.vettingsteps}>
                <div>
                  <div style={{ marginTop: "5px" }}>step</div>
                  <div style={{ fontSize: "34px" }}>5</div>
                </div>
                <div>
                  <div style={{ fontSize: "28px", marginBottom: "10px" }}>Client Collaboration</div>
                  <div>The platform collaborates with clients using AI-generated insights to facilitate informed decisions in the hiring process.</div>
                </div>
              </div>
            </div>
          </section>

          <section className={vettingPageStyles.stepsmostouterContainer}>
            <div className={vettingPageStyles.headingdualsub}>Candidates chosen using traditional practices</div>
            <section className={vettingPageStyles.stepsouterContainer}>
              <div className={vettingPageStyles.stepsContainer}>
                <div className={vettingPageStyles.vettingsteps}>
                  <div>
                    <div style={{ marginTop: "5px" }}>step</div>
                    <div style={{ fontSize: "44px" }}>1</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "28px", marginBottom: "10px" }}>AI-Enhanced Cognitive Evaluation</div>
                    <div>Resumes are meticulously matched using a sophisticated artificial intelligence algorithm that considers candidate certifications, college background, previous company affiliations, education history, and work experience.</div>
                  </div>
                </div>
                <div className={vettingPageStyles.vettingsteps}>
                  <div>
                    <div style={{ marginTop: "5px" }}>step</div>
                    <div style={{ fontSize: "44px" }}>2</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "28px", marginBottom: "10px" }}>Utilizing external intelligence in the testing process.</div>
                    <div>Incorporating external intelligence into the testing process, assessments on platforms like HackerRank and HackerEarth determine candidates eligible to proceed to the next phase.</div>
                    <div style={{ display: "flex", marginTop: "10px" }}><FiberManualRecordIcon sx={{ fontSize: "10px", marginTop: "5px" }} /><div style={{ marginLeft: "10px" }}> Employing Natural Language Processing (NLP), we analyze candidate responses, ensuring a comprehensive evaluation and scoring mechanism.</div></div>
                  </div>
                </div>
                <div className={vettingPageStyles.vettingsteps}>
                  <div>
                    <div style={{ marginTop: "5px" }}>step</div>
                    <div style={{ fontSize: "44px" }}>3</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "28px", marginBottom: "10px" }}>Live screening with human intelligence.</div>
                    <div>Each candidate is interviewed by Skills capital screeners who are experts in their functional domain. Our screeners provide specific live exercises, looking for problem-solving ability, depth of experience, communication ability, and creativity.</div>
                    <div style={{ display: "flex", marginTop: "10px" }}><FiberManualRecordIcon sx={{ fontSize: "10px", marginTop: "5px" }} /><div style={{ marginLeft: "10px" }}> Skills Capital utilizes AI-driven telephonic rounds, leveraging technology to automate candidate analysis through screening, voice, and language assessment. This approach enhances efficiency and provides valuable insights in the hiring process. </div></div>
                  </div>
                </div>

              </div>
            </section>
          </section>
        </div>
        <section className={vettingPageStyles.top3Section}>
          <div className={vettingPageStyles.top3}>
            <div style={{ fontSize: "60px" }}>The Top 3%</div>
            <div style={{ width: "700px", textAlign: "center" }}>Skills Capital is an elite global network of SAP, Cloud, and Legacy experts unlike any other. The Skills capital network is home to people with exceptional backgrounds: authors, founders, inventors, researchers, thought leaders, mentors, and more. We are problem-solvers who value integrity, and top companies rely on us for their most important initiatives.</div>
            <div style={{ display: "flex", gap: "20px" }}>
              {/* <Button className={vettingPageStyles.hire}>Hire Now</Button> */}
              <CustomButton2
                label="Hire Now"
                onClick={hirenowClick}
                buttonStyle={{
                  width: "262px",
                  height: "51.6px",
                  border: "1px solid #2871ff",
                  color: "#fff",
                  backgroundColor: "#2871ff",
                }}
                hoverStyle={{
                  backgroundColor: "lightblue",
                  color: "#2871ff",
                }}
              />
              <CustomButton2
                label="Apply for Jobs"
                onClick={hirenowClick}
                buttonStyle={{
                  width: "262px",
                  height: "51.6px",
                  border: "1px solid #2871ff",
                  color: "#2871ff",
                  backgroundColor: "white",
                }}
                hoverStyle={{
                  backgroundColor: "lightblue",
                  color: "#fff",
                  border: "1px solid #2871ff",
                }}
              />
            </div>
          </div>
        </section>


      </main>
    </>
  );
};

export default Vetting;