import { useState, useEffect, useRef } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import { Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { profileCardDesign } from "@/constants/commonStyle";
import { useRouter } from "next/router";
import CustomButton2 from "@/components/atoms/CustomButton2";
import { DEV_PUBLIC_URL } from "../../../../configs/auth";
const apiUrl = `${DEV_PUBLIC_URL}form/candidates`;
const apiU = `${DEV_PUBLIC_URL}allskills/candidates`
import Image from 'next/image';
import hireDevStyle from "../../../styles/hireDevStyles.module.css";
interface Candidates {
  Name: string;
  Email: string;
  Skills: string;
  id: string;
  Experience: string;
  PreviousRole: string;
  CurrentRole: string;
  CandidateProfile: string;
  Salary: string;
  PrefferedLocation: string;
  CurrentLocation: string;
  buttonText: string;
}

interface Profile {
  Skill_Set: string;
}

interface MyButtonProps {
  selectedButton: string;
  handleButtonClick: (buttonType: string) => void;
}


function truncateSentence(sentence: string, maxLength: number) {
  if (sentence != undefined && sentence.length > maxLength) {
    return sentence.substring(0, maxLength) + "...";
  } else {
    return sentence;
  }
}
function splitSentenceAt(sentence: string) {
  // Find the index of 'at' in the sentence
  if (sentence == null) {
    return ""; // or handle accordingly based on your use case
  }

  // Find the index of 'at' in the sentence
  const atIndex = sentence.indexOf("at");

  if (atIndex !== -1) {
    // Split the sentence until 'at'
    const splitSentence = sentence.substring(0, atIndex);

    // Remove remaining words after 'at'
    const finalSentence = splitSentence.trim();

    return finalSentence;
  } else {
    // If 'at' is not found, return the original sentence
    return sentence;
  }
}

const CandidateProfile: React.FC = () => {
  const router = useRouter();
  const [profiles, setProfile] = useState<Profile>({
    Skill_Set: "",
  });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [skills, setSkills] = useState<string>("");

  const [selectedButton, setSelectedButton] = useState("All");
  const HireCurrentDev = () => {
    router.push('/search-developers')
  };
  const ViewProfile = (profileId: any) => {
    router.push(`/talent/${profileId}`);
  };
  const profileImageURLs = [
    "https://thepienews.com/wp-content/uploads/2020/01/Profile-Picture-Small.jpg",
    "https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg",
    "https://img.freepik.com/premium-photo/happy-businessman_107420-67978.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1699747200&semt=ais",
    "https://img.freepik.com/premium-photo/photo-young-student-guy-internet-online-meeting-video-call-lesson-conference-study-concept_274222-31085.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699747200&semt=ais",
    "https://img.freepik.com/premium-photo/close-up-happy-bearded-man-suit-laughing-smiling-standing-white-background_1258-49895.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698451200&semt=ais",
  ];

  const [apiResponse, setApiResponse] = useState<Candidates[]>([]);

  const fetchData = async (skills: string) => {

    try {
      let resp = await axios.post(`${apiUrl}`, {
        profiles: { Skill_Set: skills }, pageNumber: Math.floor(Math.random() * 10) + 1
      });
      let candidates = resp.data.data.candidatesData;
      if (candidates === 'Data not present') {
        setApiResponse([]);
      } else if (candidates.length !== 0) {
        setApiResponse(candidates);
        console.log("hi", candidates);//working
      } else {
        setApiResponse([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleALL = async () => {
    setSelectedButton("All");
    try {
      let resp = await axios.get(`${apiU}`);
      let candidates = resp.data.data.candidatesData;
      if (candidates === 'Data not present') {
        setApiResponse([]);
      } else if (candidates.length !== 0) {
        setApiResponse(candidates);
        console.log("all", candidates);//working
      } else {
        setApiResponse([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  try {
    useEffect(() => {
      // Fetch default data for SAP when the component mounts
      fetchData("sap");
    }, []);
  } catch (error) {
    alert(error);
  }

  // Your component logic goes here
  let handleSubmit = (e: any): void => {
    e.preventDefault();

    // console.log('hello');

    let element = document.querySelectorAll<HTMLInputElement>(".one");
    let obj: Profile = {
      Skill_Set: element[0].value,
    };
    // console.log(obj);
    setProfile({ ...obj });
  };

  const handleButtonClick = (buttonText: string) => {
    // Set the skills based on the button clicked
    let buttonSkills = "";
    switch (buttonText.toLowerCase()) {
      case "sap":
        buttonSkills = "SAP";
        break;
      case "cloud":
        buttonSkills = "Cloud";
        break;
      case "legacy":
        buttonSkills = "Legacy";
        break;
      default:
        // Default case if no matching button is found
        buttonSkills = "";
        break;
    }

    setSkills(buttonSkills); // Set the skills state
    setSelectedButton(buttonText); // Set the selected button

    // Make the API call with the selected skills
    fetchData(buttonSkills);
  };

  return (
    <>
      <form style={{ margin: "auto" }} onSubmit={handleSubmit}>
        <TextField
          inputProps={{ className: "one" }}
          style={{ width: "50vw", display: "none", margin: "20px auto" }}
          disabled={true}
          label="Skills"
          placeholder="Enter Skills"
          name="skills"
          value={skills}
          fullWidth
          margin="normal"
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

        </div>
        <br />

        <br />
        <div>
          {/* <div className={hireDevStyle.buttonsContainer} >
            <div>
              <CustomButton2
                label={"All"}
                onClick={handleALL}
                buttonStyle={{
                  borderRadius: "20px",
                  boxShadow: "5px 5px 70px 0px rgba(0, 0, 0, 0.25)",
                  padding: `10px 15px 10px 15px `,
                  alignItems: `flex-start`,
                  gap: `10px`,
                  background: selectedButton === "All" ? "rgb(40, 113, 255)" : "white",
                  color: selectedButton === "All" ? "white" : "black",
                  fontSize: "18px",
                  justifyContent: "center",
                  margin: "0px 15px",
                }}
                hoverStyle={{
                  background: `rgb(40, 113, 255)`,
                  color: "white",
                  boxShadow: " 0px 5px 5px grey",
                }}
              />
            </div>

            <CustomButton2
              label={"SAP"}
              onClick={() => handleButtonClick("SAP")}
              buttonStyle={{
                borderRadius: "20px",
                boxShadow: "5px 5px 70px 0px rgba(0, 0, 0, 0.25)",
                padding: `10px 30px`,
                alignItems: `flex-start`,
                gap: `10px`,
                background: selectedButton === "SAP" ? "rgb(40, 113, 255)" : "white",
                color: selectedButton === "SAP" ? "white" : "black",
                fontSize: "18px",
                justifyContent: "center",
                margin: "0px 15px",
              }}
              hoverStyle={{
                background: `rgb(40, 113, 255)`,
                color: "white ",
                boxShadow: " 0px 5px 5px grey",
              }}
            />

            <div>
              <CustomButton2
                label={"Cloud"}
                onClick={() => handleButtonClick("Cloud")}
                buttonStyle={{
                  borderRadius: "20px",
                  boxShadow: "5px 5px 70px 0px rgba(0, 0, 0, 0.25)",
                  padding: `10px 20px`,
                  alignItems: `flex-start`,
                  gap: `10px 15px`,
                  background: selectedButton === "Cloud" ? "rgb(40, 113, 255)" : "white",
                  color: selectedButton === "Cloud" ? "white" : "black",
                  fontSize: "18px",
                  justifyContent: "center",
                  margin: "0px 15px",
                }}
                hoverStyle={{
                  background: `rgb(40, 113, 255)`,
                  color: "white",
                  boxShadow: " 0px 5px 5px grey",
                }}
              />
            </div>
            <div>
              <CustomButton2
                label={"Legacy"}
                onClick={() => handleButtonClick("Legacy")}
                buttonStyle={{
                  borderRadius: "20px",
                  boxShadow: "5px 5px 70px 0px rgba(0, 0, 0, 0.25)",
                  padding: `10px 15px `,
                  alignItems: `flex-start`,
                  gap: `10px`,
                  background: selectedButton === "Legacy" ? "rgb(40, 113, 255)" : "white",
                  color: selectedButton === "Legacy" ? "white" : "black",
                  fontSize: "18px",
                  justifyContent: "center",
                  margin: "0px 15px",
                }}
                hoverStyle={{
                  background: `rgb(40, 113, 255)`,
                  color: "white ",
                  boxShadow: " 0px 5px 5px grey",
                }}
              />
            </div>
          </div> */}
          <div className={hireDevStyle.buttonsContainer} >
            <div className={hireDevStyle.buttonsContainerSecond}>
              <div className={hireDevStyle.sapbuttonsecond} onClick={() => handleButtonClick("SAP")}>SAP</div>
              <div className={hireDevStyle.cloudbuttonsecond} onClick={() => handleButtonClick("Cloud")}>CLOUD</div>
              <div className={hireDevStyle.legacybuttonsecond} onClick={() => handleButtonClick("Legacy")}>LEGACY</div>
            </div>
          </div>
        </div>
        <br />

        <br />
      </form>

      <Container className={hireDevStyle.hireProfileContainer} >
        {apiResponse.length === 0 ? (
          <>
            <center>
              <CircularProgress />
            </center>
          </>
        ) : (
          apiResponse.map((profile, index) => (
            <div
              key={index}
              className={hireDevStyle.eachProfileContainer}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Image
                    style={{ marginRight: "30px", borderRadius: "15px", objectFit: "cover" }}
                    src={profileImageURLs[index]}
                    alt=""
                    width={280}
                    height={290}
                  />
                </div>

                <div>
                  <p style={profileCardDesign.profileMainCardName}>
                    {profile.Name}
                  </p>

                  <h2 style={profileCardDesign.profileDesignationMainCard}>
                    {splitSentenceAt(profile.CurrentRole)}
                  </h2>

                  <p style={profileCardDesign.profileMainCArdBio}>
                    {truncateSentence(profile.CandidateProfile, 465)}{" "}
                  </p>

                  <br />

                  <div style={{ display: "flex" }}>
                    <div>
                      <span style={profileCardDesign.profileMainCArdTitle}>
                        Salary:
                      </span>{" "}
                      <span style={profileCardDesign.profileMainCArdContent}>
                        {profile.Salary}{" "}
                      </span>
                    </div>
                    <div>
                      <span style={profileCardDesign.profileMainCArdTitle}>
                        Location:
                      </span>{" "}
                      <span style={profileCardDesign.profileMainCArdContent}>
                        {truncateSentence(profile.PrefferedLocation, 35)}{" "}
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      gap: "30px",
                    }}
                  >
                    <CustomButton2
                      onClick={HireCurrentDev}
                      label={"Hire Now"}
                      buttonStyle={{
                        background: `black`,
                        color: `white`,
                        border: `black`,
                        borderRadius: `25px`,
                        cursor: `pointer`,
                        fontSize: `15px`,
                        margin: "25px 0px 0px 0px ",
                        gap: `10px`,
                      }}
                      hoverStyle={{
                        background: `white`,
                        color: `black`,
                        borderRadius: `25px`,
                        cursor: `pointer`,
                        fontSize: `15px`,
                        border: `0.5px solid black`,
                        gap: `10px`,
                      }}
                    />
                    <CustomButton2
                      onClick={() => ViewProfile(profile.id)}
                      label={"View Profile"}
                      buttonStyle={{
                        background: `whitesmoke`,
                        color: `black`,
                        border: `0.5px solid black`,
                        borderRadius: `25px`,
                        cursor: `pointer`,
                        fontSize: `15px`,
                        margin: "25px 0px 0px 0px ",
                        gap: `10px`,
                      }}
                      hoverStyle={{
                        background: `black`,
                        color: `whitesmoke`,
                        border: `0.5px solid black`,
                        borderRadius: `25px`,
                        cursor: `pointer`,
                        fontSize: `15px`,
                        gap: `10px`,
                        boxShadow: " 0px 2px 6px grey",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </Container>
    </>
  );
};

export default CandidateProfile;
