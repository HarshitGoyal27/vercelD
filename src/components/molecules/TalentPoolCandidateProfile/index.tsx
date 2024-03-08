import { useState, useEffect, useRef } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import { Container, Paper, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { profileCardDesign } from "@/constants/commonStyle";
import talentPoolStyle from "../../../styles/talentPoolStyles.module.css";
import CustomButton2 from "@/components/atoms/CustomButton2";
import { DEV_PUBLIC_URL } from '../../../../configs/auth';
const apiUrl = `${DEV_PUBLIC_URL}form/candidates`;
import { useRouter } from 'next/router';
import Image from 'next/image';

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
const viewCurrentProfile = () => {
  alert("Current Profile");
};

function truncateString(input: string, maxLength: number): string {
  if (input != undefined && input.length > maxLength) {
    return input.substring(0, maxLength) + "...";
  } else {
    return input;
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

const TalentPoolCandidateProfile: React.FC = () => {
  const [profiles, setProfile] = useState<Profile>({
    Skill_Set: "sap",
  });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [skills, setSkills] = useState<string>("");

  const [selectedButton, setSelectedButton] = useState("SAP");

  const profileImageURLs = [
    "https://thepienews.com/wp-content/uploads/2020/01/Profile-Picture-Small.jpg",
    "https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg",
    "https://img.freepik.com/premium-photo/happy-businessman_107420-67978.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1699747200&semt=ais",
    "https://img.freepik.com/premium-photo/photo-young-student-guy-internet-online-meeting-video-call-lesson-conference-study-concept_274222-31085.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699747200&semt=ais",
    "https://img.freepik.com/premium-photo/close-up-happy-bearded-man-suit-laughing-smiling-standing-white-background_1258-49895.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698451200&semt=ais",
  ];

  const [apiResponse, setApiResponse] = useState<Candidates[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async (skills: string) => {
    try {
      setLoading(true);

      console.log("Fetching data for skills:", skills);
      let resp = await axios.post(`${apiUrl}`, {
        profiles: { Skill_Set: skills }, pageNumber: Math.floor(Math.random() * 10) + 1
      });
      let candidates = resp.data.data.candidatesData;
      if (candidates === "Data not present") {
        setApiResponse([]);
      } else if (candidates.length !== 0) {
        setApiResponse(candidates);
      } else {
        setApiResponse([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false when data fetching is complete (either success or error)
    }
  };
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
    let element = document.querySelectorAll<HTMLInputElement>(".one");
    let obj: Profile = {
      Skill_Set: element[0].value,
    };
    // console.log(obj);
    setProfile({ ...obj });
  };
  const router = useRouter();
  const HireCurrentDev = () => {
    router.push('/search-developers');
  }
  const ViewProfile = (profileId: string) => {
    router.push(`/talent/${profileId}`);
  }
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
        ></div>

        <div>
          <div className={talentPoolStyle.sapButtons}>
            <div>
              <CustomButton2
                label={"ALL "}
                onClick={() => handleButtonClick("Cloud")}
                buttonStyle={{
                  borderRadius: "20px",
                  boxShadow: "5px 5px 70px 0px rgba(0, 0, 0, 0.25)",
                  padding: `10px 25px 10px 25px`,
                  alignItems: `flex-start`,
                  gap: `10px`,
                  background:
                    selectedButton === "All" ? "rgb(40, 113, 255)" : "white",
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
                padding: `10px 47px`,
                alignItems: `flex-start`,
                gap: `10px`,
                background:
                  selectedButton === "SAP" ? "rgb(40, 113, 255)" : "white",
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
                  alignItems: `flex-start`,
                  gap: `10px`,
                  padding: `10px 47px`,
                  background:
                    selectedButton === "Cloud" ? "rgb(40, 113, 255)" : "white",
                  color: selectedButton === "Cloud" ? "white" : "black",
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
            <div>
              <CustomButton2
                label={"Legacy"}
                onClick={() => handleButtonClick("Legacy")}
                buttonStyle={{
                  borderRadius: "20px",
                  boxShadow: "5px 5px 70px 0px rgba(0, 0, 0, 0.25)",
                  alignItems: `flex-start`,
                  gap: `10px`,
                  padding: `10px 40px`,
                  background:
                    selectedButton === "Legacy" ? "rgb(40, 113, 255)" : "white",
                  color: selectedButton === "Legacy" ? "white" : "black",
                  fontSize: "18px",
                  justifyContent: "center",
                  margin: "0px 15px",
                }}
                hoverStyle={{
                  background: `rgb(40, 113, 255)`,
                  color: "white ",
                  boxShadow: " 0px 5px 5px grey",
                  borderRadius: `20px`,
                }}
              />
            </div>
          </div>
        </div>
        <br />

        <br />
      </form>

      <div className={talentPoolStyle.bestProfileContainer}>
        {apiResponse.length === 0 ? (
          // ... (loading or no data message)
          <>
            <center>
              <CircularProgress />
            </center>
          </>
        ) : (
          // Render profiles in pairs
          <div className={talentPoolStyle.profilegridClass}>
            {apiResponse.slice(0, 4).map((profile, index) => (
              // Render each profile in its own container
              <Grid item key={index} xs={12} sm={6}>
                <Paper
                  className={talentPoolStyle.paperStyle}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-Start",
                      gap: "25px",
                    }}
                  >
                    {/* Profile 1 */}
                    <div>
                      <Image
                        className={talentPoolStyle.imageProfile}
                        src={profileImageURLs[index]}
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                    <div>
                      <p style={profileCardDesign.profileTalentPoolName}>
                        {truncateString(profile.Name, 18)}
                      </p>
                      <h2
                        style={profileCardDesign.profileDesignationTalentPool}
                      >
                        {truncateString(
                          splitSentenceAt(profile.CurrentRole),
                          30
                        )}
                      </h2>
                      {/* <p style={profileCardDesign.profileMainCArdBio}>
                      {profile.CandidateProfile}
                    </p> */}

                      <div>
                        <span style={profileCardDesign.profileTalentPoolTitle}>
                          Salary:
                        </span>{" "}
                        <span
                          style={profileCardDesign.profileTalentPoolContent}
                        >
                          {profile.Salary}{" "}
                        </span>
                      </div>
                      <div>
                        <span style={profileCardDesign.profileTalentPoolTitle}>
                          Location:
                        </span>{" "}
                        <span
                          style={profileCardDesign.profileTalentPoolContent}
                        >
                          {truncateString(profile.PrefferedLocation, 18)}{" "}
                        </span>
                      </div>


                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          gap: "15px",
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
                            // width:"10vw",
                            margin: "25px 0px 0px 0px ",
                            // marginBottom:"10px",
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
                            //  width:"10vw",
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
                </Paper>
              </Grid>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TalentPoolCandidateProfile;
