// components/ResponsiveCarousel.js
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import MiddleProfileCardComponent from "@/components/atoms/LargeProfileCard";
import talentPoolStyles from "./../../../styles/talentPoolStyles.module.css";
import { DEV_PUBLIC_URL } from "../../../../configs/auth";

interface Profile {
  Name: string;
  CurrentRole: string;
  CurrentLocation: string;
  CandidateProfile: string;
  Salary: string;
  PrefferedLocation: string;
  Skills: string;
}
function HireNowClicked() {
  alert("HireNowClicked");
}

const MiddleResponsiveCorousel = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${DEV_PUBLIC_URL}form/candidates`,
          {
            profiles: { Skill_Set: "SAP" }, pageNumber: Math.floor(Math.random() * 10) + 1
          }
        );
        const candidates = response.data.data.candidatesData;
        setProfiles(candidates);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleButtonExplore = () => {
    // Your button click logic here
    alert("Explore Clicked!");
  };

  if (loading) {
    return <CircularProgress />;
  }

  const profileImageURLs = [
    "https://thepienews.com/wp-content/uploads/2020/01/Profile-Picture-Small.jpg",
    "https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg",
    "https://img.freepik.com/premium-photo/happy-businessman_107420-67978.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1699747200&semt=ais",
    "https://img.freepik.com/premium-photo/photo-young-student-guy-internet-online-meeting-video-call-lesson-conference-study-concept_274222-31085.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699747200&semt=ais",
    "https://img.freepik.com/premium-photo/close-up-happy-bearded-man-suit-laughing-smiling-standing-white-background_1258-49895.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698451200&semt=ais",
  ];

  return (
    <div>
      <div className={talentPoolStyles.middleCrouselContainer}>
        {profiles && profiles.length > 0 ? (
          <Carousel
            showThumbs={false}
            autoPlay={true}
            interval={5000}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
          >
            {profiles.map((profile, index) => (
              <div key={index}>
                <MiddleProfileCardComponent
                  imageUrl={profileImageURLs[index]}
                  profileName={profile.Name}
                  profileDesignation={profile.CurrentRole}
                  profileBio={profile.CandidateProfile}
                  ViewProfileText={"View Profile"}
                  buttonEnabled={true}
                  HireButtonText={"Hire Now"}
                  onButtonClick={HireNowClicked}
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <Carousel
            showThumbs={false}
            autoPlay={true}
            interval={5000}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
          >
            <MiddleProfileCardComponent
              imageUrl={profileImageURLs[0]}
              profileName={"Raj Singania"}
              profileDesignation={"SAP Developer -Google"}
              profileBio={
                "With expertise in maintaining and modernizing legacy systems. Proficient in languages like COBOL and Fortran, I specialize in ensuring the continued functionality and efficiency of legacy applications.  "
              }
              HireButtonText="Hire Now"
              ViewProfileText={"View Profile"}
              onButtonClick={handleButtonExplore}
              buttonEnabled={true}
            />
            <MiddleProfileCardComponent
              imageUrl={profileImageURLs[1]}
              profileName={"Aryan Mahadik"}
              profileDesignation={"AWS CLoud Developer - IBM"}
              profileBio={
                "I thrive in dynamic environments, contributing to the successful deployment and maintenance of cloud-based applications.   I stay abreast of emerging technologies, enabling me to deliver innovative."
              }
              HireButtonText="Hire Now"
              ViewProfileText={"View Profile"}
              onButtonClick={handleButtonExplore}
              buttonEnabled={true}
            />
            <MiddleProfileCardComponent
              imageUrl={profileImageURLs[2]}
              profileName={"Yash Kapoor"}
              profileDesignation={"Legacy Expert - HP India"}
              profileBio={
                "with expertise in maintaining and modernizing legacy systems. Proficient in languages like COBOL and Fortran, I specialize in ensuring the continued functionality and efficiency of legacy applications. "
              }
              HireButtonText="Hire Now"
              ViewProfileText={"View Profile"}
              onButtonClick={handleButtonExplore}
              buttonEnabled={true}
            />
            <MiddleProfileCardComponent
              imageUrl={profileImageURLs[3]}
              profileName={"Virat Singh"}
              profileDesignation={"Cloud Specialist - AWS"}
              profileBio={
                "I thrive in dynamic environments, contributing to the successful deployment and maintenance of cloud-based applications.   I stay abreast of emerging technologies, enabling me to deliver innovative."
              }
              HireButtonText="Hire Now"
              ViewProfileText={"View Profile"}
              onButtonClick={handleButtonExplore}
              buttonEnabled={true}
            />
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default MiddleResponsiveCorousel;
