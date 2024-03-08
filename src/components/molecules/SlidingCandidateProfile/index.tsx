import { useState, useEffect, useRef } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import { Container, Box, Paper, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CustomButton2 from "@/components/atoms/CustomButton2";
import SlidingCandidateResponsiveCarousel from "../SlidingCandidateCorousel";
import { DEV_PUBLIC_URL } from '../../../../configs/auth';
const apiUrl = `${DEV_PUBLIC_URL}form/candidates`;

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
interface ResponsiveCarouselProps {
  profiles: Candidates[];
}

interface MyButtonProps {
  selectedButton: string;
  handleButtonClick: (buttonType: string) => void;
}
const viewCurrentProfile = () => {
  alert("Current Profile");
};

function truncateSentence(sentence: string, maxLength = 35) {
  if (sentence.length > maxLength) {
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
  const [profiles, setProfile] = useState<Profile>({
    Skill_Set: "",
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

  const fetchData = async (skills: string) => {
    try {
      console.log("Fetching data for skills:", skills);
      let resp = await axios.post(apiUrl, {
        profiles: { Skill_Set: skills },
      });
      let candidates = resp.data.data.candidatesData;
      //   console.log(candidates);
      setApiResponse(candidates);
    } catch (error) {
      console.error("Error fetching data:", error);
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CustomButton2
              label={"SAP"}
              onClick={() => handleButtonClick("SAP")}
              buttonStyle={{
                borderRadius: "20px",
                boxShadow: "5px 5px 70px 0px rgba(0, 0, 0, 0.25)",
                padding: `10px 57px`,
                alignItems: `flex-start`,
                gap: `10px`,
                background: selectedButton === "SAP" ? "rgb(40, 113, 255)" : "white",
                color: selectedButton === "SAP" ? "white" : "black",
                fontSize: "18px",
                justifyContent: "center",
                width: "10vw",
                margin: "0px 15px",
              }}
              hoverStyle={{
                borderRadius: `20px`,
                background: `rgb(40, 113, 255)`,
                color: "white ",
                fontSize: "18px",
                padding: "10px ",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                margin: "0px 15px",
              }}
            />

            <div>
              <CustomButton2
                label={"Cloud"}
                onClick={() => handleButtonClick("Cloud")}
                buttonStyle={{
                  borderRadius: "20px",
                  boxShadow: "5px 5px 70px 0px rgba(0, 0, 0, 0.25)",
                  padding: `10px `,
                  alignItems: `flex-start`,
                  gap: `10px`,
                  background: selectedButton === "Cloud" ? "rgb(40, 113, 255)" : "white",
                  color: selectedButton === "Cloud" ? "white" : "black",
                  fontSize: "18px",
                  justifyContent: "center",
                  width: "10vw",
                  margin: "0px 15px",
                }}
                hoverStyle={{
                  borderRadius: `20px`,
                  background: `rgb(40, 113, 255)`,
                  color: "white",
                  fontSize: "18px",
                  padding: "10px 25px",
                  boxShadow: " 0px 5px 5px grey",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  margin: "0px 15px",
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
                  padding: `10px  `,
                  alignItems: `flex-start`,
                  gap: `10px`,
                  background: selectedButton === "Legacy" ? "rgb(40, 113, 255)" : "white",
                  color: selectedButton === "Legacy" ? "white" : "black",
                  fontSize: "18px",
                  justifyContent: "center",
                  width: "10vw",
                  margin: "0px 15px",
                }}
                hoverStyle={{
                  borderRadius: `20px`,
                  background: `rgb(40, 113, 255)`,
                  color: "white ",
                  fontSize: "18px",
                  padding: "10px 25px",
                  boxShadow: " 0px 5px 5px grey",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  margin: "0px 15px",
                }}
              />
            </div>
          </div>
        </div>
        <br />

        <br />
      </form>

      <Container maxWidth="lg">
        {apiResponse === undefined ? (
          <>
            {/* // Display loader while data is being fetched */}
            <h1>Please be patient while the profile loads</h1>
            <center>
              <CircularProgress />
            </center>
          </>
        ) : (
          // Use Carousel component instead of mapping through profiles manually
          <  SlidingCandidateResponsiveCarousel candidateProfiles={apiResponse} />
        )}
      </Container>
    </>
  );
};

export default CandidateProfile;
