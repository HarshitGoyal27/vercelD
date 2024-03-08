// components/ResponsiveCarousel.js
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import talentPoolStyle from "../../../styles/talentPoolStyles.module.css";
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import ProfileCardComponent from '@/components/atoms/ProfileCard';
import { DEV_PUBLIC_URL } from '../../../../configs/auth';
const apiUrl = `${DEV_PUBLIC_URL}form/candidates`;
import { useRouter } from 'next/router';

interface Profile {
  Name: string;
  CurrentRole: string;
  CurrentLocation: string;
  CandidateProfile: string;
  Salary: string;
  PrefferedLocation: string;
  Skills: string;
}
interface ResponsiveCarouselProps {
  opacityValue: number;
  skillSetValue: string;
}

const ResponsiveCarousel: React.FC<ResponsiveCarouselProps> = ({ opacityValue, skillSetValue }) => {
  const router = useRouter();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  const HireNowClicked = () => {
    router.push('/search-developers');
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${apiUrl}`, {
          profiles: { Skill_Set: `${skillSetValue}` }, pageNumber: Math.floor(Math.random() * 10) + 1 // Set default skills (you can modify this)
        });
        const candidates = response.data.data.candidatesData;
        console.log("hello->", candidates);
        setProfiles(candidates);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [skillSetValue]);

  const handleButtonExplore = () => {
    router.push('/search-developers');
  };

  if (loading) {
    return <CircularProgress />;
  }

  const profileImageURLs = ['https://thepienews.com/wp-content/uploads/2020/01/Profile-Picture-Small.jpg', 'https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg', 'https://img.freepik.com/premium-photo/happy-businessman_107420-67978.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1699747200&semt=ais', 'https://img.freepik.com/premium-photo/photo-young-student-guy-internet-online-meeting-video-call-lesson-conference-study-concept_274222-31085.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699747200&semt=ais', 'https://img.freepik.com/premium-photo/close-up-happy-bearded-man-suit-laughing-smiling-standing-white-background_1258-49895.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698451200&semt=ais'];

  return (
    <div>
      <div className={talentPoolStyle.profileCarauselContainer} style={{ opacity: `${opacityValue}` }} >
        {profiles && profiles.length > 0 ? (
          <Carousel
            showThumbs={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}

          >
            {profiles.map((profile, index) => (
              <div key={index}>

                <ProfileCardComponent
                  imageUrl={profileImageURLs[index]}
                  opacityValue={opacityValue}
                  profileName={profile.Name}
                  profileDesignation={profile.CurrentRole}
                  profileBio={profile.CandidateProfile}
                  buttonEnabled={true}
                  HireButtonText={"Hire Now"}
                  onButtonClick={HireNowClicked}
                  ViewProfileText={"View Profile"}
                />

              </div>
            ))}
          </Carousel>
        ) : (
          <Carousel
            showThumbs={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
          >
            <ProfileCardComponent
              imageUrl={profileImageURLs[0]}
              opacityValue={opacityValue}
              profileName={"Raj Singania"}
              profileDesignation={"SAP Developer -Google"}
              profileBio={"With expertise in maintaining and modernizing legacy systems. Proficient in languages like COBOL and Fortran, I specialize in ensuring the continued functionality and efficiency of legacy applications. "}
              HireButtonText="Hire Now"
              onButtonClick={handleButtonExplore}
              ViewProfileText={"View Profile"}
              buttonEnabled={true}
            />
            <ProfileCardComponent
              imageUrl={profileImageURLs[1]}
              opacityValue={opacityValue}
              profileName={"Aryan Mahadik"}
              profileDesignation={"AWS CLoud Developer - IBM"}
              profileBio={"I thrive in dynamic environments, contributing to the successful deployment and maintenance of cloud-based applications. I stay abreast of emerging technologies, enabling me to deliver innovative."}
              HireButtonText="Hire Now"
              onButtonClick={handleButtonExplore}
              ViewProfileText={"View Profile"}
              buttonEnabled={true}
            />
            <ProfileCardComponent
              imageUrl={profileImageURLs[2]}
              opacityValue={opacityValue}
              profileName={"Yash Kapoor"}
              profileDesignation={"Legacy Expert - HP India"}
              profileBio={"With expertise in maintaining and modernizing legacy systems. Proficient in languages like COBOL and Fortran, I specialize in ensuring the continued functionality and efficiency of legacy applications. "}
              HireButtonText="Hire Now"
              onButtonClick={handleButtonExplore}
              ViewProfileText={"View Profile"}
              buttonEnabled={true}
            />
            <ProfileCardComponent
              imageUrl={profileImageURLs[3]}
              opacityValue={opacityValue}
              profileName={"Virat Singh"}
              profileDesignation={"Cloud Specialist - AWS"}
              profileBio={"I thrive in dynamic environments, contributing to the successful deployment and maintenance of cloud-based applications. I stay abreast of emerging technologies, enabling me to deliver innovative."}
              HireButtonText="Hire Now"
              onButtonClick={handleButtonExplore}
              ViewProfileText={"View Profile"}
              buttonEnabled={true}

            />

          </Carousel>
        )}
      </div>
    </div>
  );
};

export default ResponsiveCarousel;
