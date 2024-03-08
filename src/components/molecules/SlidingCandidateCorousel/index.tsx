// components/ResponsiveCarousel.js
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { Container } from '@mui/material';
import { profileCardDesign } from '@/constants/commonStyle';
import CustomButton from '@/components/atoms/button';
import { DEV_PUBLIC_URL } from '../../../../configs/auth';
import Image from 'next/image';

const apiUrl = `${DEV_PUBLIC_URL}form/candidates`;

interface Profile {
  Name: string;
  CurrentRole: string;
  CurrentLocation: string;
  CandidateProfile: string;
  Salary: string;
  PrefferedLocation: string;
  Skills: string;
}
interface profiless {
  Name: string;
  CurrentRole: string;
  CurrentLocation: string;
  CandidateProfile: string;
  Salary: string;
  PrefferedLocation: string;
  Skills: string;
}
interface Candidates {
  Name: string;
  Email: string;
  Skills: string;
  id: string;
  // ... (add the rest of the properties)
}
interface SlidingCandidateResponsiveCarouselProps {
  candidateProfiles: Candidates[]; // Rename the prop to avoid conflict
}

function HireNowClicked() {
  alert("HireNowClicked");
}

function truncateSentence(sentence: string, maxLength = 35) {
  if (sentence.length > maxLength) {
    return sentence.substring(0, maxLength) + "...";
  } else {
    return sentence;
  }
}
function viewCurrentProfile() {
  alert("Currentvawhcwjn  ")
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
const trimBioTo80Words = (bio: string): string => {
  const words = bio.split(' ');
  const trimmedWords = words.slice(0, 20);
  return trimmedWords.join(' ');
};
const SlidingCandidateResponsiveCarousel: React.FC<SlidingCandidateResponsiveCarouselProps> = ({ candidateProfiles }) => {
  // ...
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(apiUrl, {
          profiles: { Skill_Set: 'SAP' }, // Set default skills (you can modify this)
        });
        const candidates = response.data.data.candidatesData;
        setProfiles(candidates);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleButtonExplore = () => {
    // Your button click logic here
    alert('Explore Clicked!');
  };

  if (loading) {
    return <CircularProgress />;
  }

  const profileImageURLs = ['https://thepienews.com/wp-content/uploads/2020/01/Profile-Picture-Small.jpg', 'https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg', 'https://img.freepik.com/premium-photo/happy-businessman_107420-67978.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1699747200&semt=ais', 'https://img.freepik.com/premium-photo/photo-young-student-guy-internet-online-meeting-video-call-lesson-conference-study-concept_274222-31085.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699747200&semt=ais', 'https://img.freepik.com/premium-photo/close-up-happy-bearded-man-suit-laughing-smiling-standing-white-background_1258-49895.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698451200&semt=ais'];

  return (
    <div>
      <div>
        {profiles && profiles.length > 0 ? (
          <div style={{ border: "2px solid red", width: "80vw" }}>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              interval={3000}
              infiniteLoop={true}
              showArrows={false}
              showStatus={false}
            >
              {/* {profiles.map((profile, index) => (
             <div key={index}>
               
 
             </div> */}
              <Container maxWidth="lg">



                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <Image
                      style={{ marginRight: "30px", borderRadius: "10px" }}
                      src={profileImageURLs[4]}
                      alt=""
                      width={330}
                      height={305}
                    />
                  </div>

                  <div>
                    <p style={profileCardDesign.profileMainCardName}>
                      {"Jay"}
                    </p>

                    <h2 style={profileCardDesign.profileDesignationMainCard}>
                      {splitSentenceAt("SAP Developer")}
                    </h2>

                    <p style={profileCardDesign.profileMainCArdBio}>
                      {"I am a skilled SAP developer with a decade of experience in SAP ECC, S/4HANA, and Fiori. My expertise lies in translating complex business needs into efficient technical solutions. I have a proven track record of delivering high-quality SAP solutions that streamline business processes and enhance overall efficiency."}
                    </p>

                    <br />

                    <div style={{ display: "flex" }}>
                      <div>
                        <span style={profileCardDesign.profileMainCArdTitle}>
                          Salary:
                        </span>{" "}
                        <span style={profileCardDesign.profileMainCArdContent}>
                          {"20Lach"}{" "}
                        </span>
                      </div>
                      <div>
                        <span style={profileCardDesign.profileMainCArdTitle}>
                          Location:
                        </span>{" "}
                        <span style={profileCardDesign.profileMainCArdContent}>
                          {truncateSentence("Delhi")}{" "}
                        </span>
                      </div>
                    </div>
                    <br />
                    <br />
                    <CustomButton
                      label={"View Full Profile"}
                      onClick={viewCurrentProfile}
                      buttonStyle={{
                        background: "rgb(25, 118, 210)",
                        fontSize: "1rem",
                        width: "12vw",
                        borderRadius: " 5px",
                        color: "white",
                      }}
                    />
                  </div>
                </div>


              </Container>
              <Container maxWidth="lg">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <Image
                      style={{ marginRight: "30px", borderRadius: "10px" }}
                      src={profileImageURLs[0]}
                      alt=""
                      width={330}
                      height={305}
                    />
                  </div>

                  <div>
                    <p style={profileCardDesign.profileMainCardName}>
                      {"Jay"}
                    </p>

                    <h2 style={profileCardDesign.profileDesignationMainCard}>
                      {splitSentenceAt("SAP Developer")}
                    </h2>

                    <p style={profileCardDesign.profileMainCArdBio}>
                      {"I am a skilled SAP developer with a decade of experience in SAP ECC, S/4HANA, and Fiori. My expertise lies in translating complex business needs into efficient technical solutions. I have a proven track record of delivering high-quality SAP solutions that streamline business processes and enhance overall efficiency."}
                    </p>

                    <br />

                    <div style={{ display: "flex" }}>
                      <div>
                        <span style={profileCardDesign.profileMainCArdTitle}>
                          Salary:
                        </span>{" "}
                        <span style={profileCardDesign.profileMainCArdContent}>
                          {"20Lach"}{" "}
                        </span>
                      </div>
                      <div>
                        <span style={profileCardDesign.profileMainCArdTitle}>
                          Location:
                        </span>{" "}
                        <span style={profileCardDesign.profileMainCArdContent}>
                          {truncateSentence("Delhi")}{" "}
                        </span>
                      </div>
                    </div>
                    <br />
                    <br />
                    <CustomButton
                      label={"View Full Profile"}
                      onClick={viewCurrentProfile}
                      buttonStyle={{
                        background: "rgb(25, 118, 210)",
                        fontSize: "1rem",
                        width: "12vw",
                        borderRadius: " 5px",
                        color: "white",
                      }}
                    />
                  </div>
                </div>
              </Container>
              <Container maxWidth="lg">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <Image
                      style={{ marginRight: "30px", borderRadius: "10px" }}
                      src={profileImageURLs[1]}
                      alt=""
                      width={330}
                      height={305}
                    />
                  </div>

                  <div>
                    <p style={profileCardDesign.profileMainCardName}>
                      {"Raj"}
                    </p>

                    <h2 style={profileCardDesign.profileDesignationMainCard}>
                      {splitSentenceAt("SAP Developer")}
                    </h2>

                    <p style={profileCardDesign.profileMainCArdBio}>
                      {"I am a skilled SAP developer with a decade of experience in SAP ECC, S/4HANA, and Fiori. My expertise lies in translating complex business needs into efficient technical solutions. I have a proven track record of delivering high-quality SAP solutions that streamline business processes and enhance overall efficiency."}
                    </p>

                    <br />

                    <div style={{ display: "flex" }}>
                      <div>
                        <span style={profileCardDesign.profileMainCArdTitle}>
                          Salary:
                        </span>{" "}
                        <span style={profileCardDesign.profileMainCArdContent}>
                          {"20Lach"}{" "}
                        </span>
                      </div>
                      <div>
                        <span style={profileCardDesign.profileMainCArdTitle}>
                          Location:
                        </span>{" "}
                        <span style={profileCardDesign.profileMainCArdContent}>
                          {truncateSentence("Delhi")}{" "}
                        </span>
                      </div>
                    </div>
                    <br />
                    <br />
                    <CustomButton
                      label={"View Full Profile"}
                      onClick={viewCurrentProfile}
                      buttonStyle={{
                        background: "rgb(25, 118, 210)",
                        fontSize: "1rem",
                        width: "12vw",
                        borderRadius: " 5px",
                        color: "white",
                      }}
                    />
                  </div>
                </div>
              </Container>
              <Container maxWidth="lg">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <Image
                      style={{ marginRight: "30px", borderRadius: "10px" }}
                      src={profileImageURLs[2]}
                      alt=""
                      width={330}
                      height={305}
                    />
                  </div>

                  <div>
                    <p style={profileCardDesign.profileMainCardName}>
                      {"Aman"}
                    </p>

                    <h2 style={profileCardDesign.profileDesignationMainCard}>
                      {splitSentenceAt("SAP Developer")}
                    </h2>

                    <p style={profileCardDesign.profileMainCArdBio}>
                      {"I am a skilled SAP developer with a decade of experience in SAP ECC, S/4HANA, and Fiori. My expertise lies in translating complex business needs into efficient technical solutions. I have a proven track record of delivering high-quality SAP solutions that streamline business processes and enhance overall efficiency."}
                    </p>

                    <br />

                    <div style={{ display: "flex" }}>
                      <div>
                        <span style={profileCardDesign.profileMainCArdTitle}>
                          Salary:
                        </span>{" "}
                        <span style={profileCardDesign.profileMainCArdContent}>
                          {"20Lach"}{" "}
                        </span>
                      </div>
                      <div>
                        <span style={profileCardDesign.profileMainCArdTitle}>
                          Location:
                        </span>{" "}
                        <span style={profileCardDesign.profileMainCArdContent}>
                          {truncateSentence("Delhi")}{" "}
                        </span>
                      </div>
                    </div>
                    <br />
                    <br />
                    <CustomButton
                      label={"View Full Profile"}
                      onClick={viewCurrentProfile}
                      buttonStyle={{
                        background: "rgb(25, 118, 210)",
                        fontSize: "1rem",
                        width: "12vw",
                        borderRadius: " 5px",
                        color: "white",
                      }}
                    />
                  </div>
                </div>
              </Container>
            </Carousel>
          </div>
        ) : (
          <Carousel
            showThumbs={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            width={800}
            dynamicHeight={true}
          >



            <Container maxWidth="lg">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Image
                    style={{ marginRight: "30px", borderRadius: "10px" }}
                    src={profileImageURLs[4]}
                    alt=""
                    width={330}
                    height={305}
                  />
                </div>

                <div>
                  <p style={profileCardDesign.profileMainCardName}>
                    {"Jay"}
                  </p>

                  <h2 style={profileCardDesign.profileDesignationMainCard}>
                    {splitSentenceAt("SAP Developer")}
                  </h2>

                  <p style={profileCardDesign.profileMainCArdBio}>
                    {"I am a skilled SAP developer with a decade of experience in SAP ECC, S/4HANA, and Fiori. My expertise lies in translating complex business needs into efficient technical solutions. I have a proven track record of delivering high-quality SAP solutions that streamline business processes and enhance overall efficiency."}
                  </p>

                  <br />

                  <div style={{ display: "flex" }}>
                    <div>
                      <span style={profileCardDesign.profileMainCArdTitle}>
                        Salary:
                      </span>{" "}
                      <span style={profileCardDesign.profileMainCArdContent}>
                        {"20Lach"}{" "}
                      </span>
                    </div>
                    <div>
                      <span style={profileCardDesign.profileMainCArdTitle}>
                        Location:
                      </span>{" "}
                      <span style={profileCardDesign.profileMainCArdContent}>
                        {truncateSentence("Delhi")}{" "}
                      </span>
                    </div>
                  </div>
                  <br />
                  <br />
                  <CustomButton
                    label={"View Full Profile"}
                    onClick={viewCurrentProfile}
                    buttonStyle={{
                      background: "rgb(25, 118, 210)",
                      fontSize: "1rem",
                      width: "12vw",
                      borderRadius: " 5px",
                      color: "white",
                    }}
                  />
                </div>
              </div>


            </Container>
            <Container maxWidth="lg">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Image
                    style={{ marginRight: "30px", borderRadius: "10px" }}
                    src={profileImageURLs[0]}
                    alt=""
                    width={330}
                    height={305}
                  />
                </div>

                <div>
                  <p style={profileCardDesign.profileMainCardName}>
                    {"Jay"}
                  </p>

                  <h2 style={profileCardDesign.profileDesignationMainCard}>
                    {splitSentenceAt("SAP Developer")}
                  </h2>

                  <p style={profileCardDesign.profileMainCArdBio}>
                    {"I am a skilled SAP developer with a decade of experience in SAP ECC, S/4HANA, and Fiori. My expertise lies in translating complex business needs into efficient technical solutions. I have a proven track record of delivering high-quality SAP solutions that streamline business processes and enhance overall efficiency."}
                  </p>

                  <br />

                  <div style={{ display: "flex" }}>
                    <div>
                      <span style={profileCardDesign.profileMainCArdTitle}>
                        Salary:
                      </span>{" "}
                      <span style={profileCardDesign.profileMainCArdContent}>
                        {"20Lach"}{" "}
                      </span>
                    </div>
                    <div>
                      <span style={profileCardDesign.profileMainCArdTitle}>
                        Location:
                      </span>{" "}
                      <span style={profileCardDesign.profileMainCArdContent}>
                        {truncateSentence("Delhi")}{" "}
                      </span>
                    </div>
                  </div>
                  <br />
                  <br />
                  <CustomButton
                    label={"View Full Profile"}
                    onClick={viewCurrentProfile}
                    buttonStyle={{
                      background: "rgb(25, 118, 210)",
                      fontSize: "1rem",
                      width: "12vw",
                      borderRadius: " 5px",
                      color: "white",
                    }}
                  />
                </div>
              </div>


            </Container>
            <Container maxWidth="lg">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Image
                    style={{ marginRight: "30px", borderRadius: "10px" }}
                    src={profileImageURLs[1]}
                    alt=""
                    width={330}
                    height={305}
                  />
                </div>

                <div>
                  <p style={profileCardDesign.profileMainCardName}>
                    {"Raj"}
                  </p>

                  <h2 style={profileCardDesign.profileDesignationMainCard}>
                    {splitSentenceAt("SAP Developer")}
                  </h2>

                  <p style={profileCardDesign.profileMainCArdBio}>
                    {"I am a skilled SAP developer with a decade of experience in SAP ECC, S/4HANA, and Fiori. My expertise lies in translating complex business needs into efficient technical solutions. I have a proven track record of delivering high-quality SAP solutions that streamline business processes and enhance overall efficiency."}
                  </p>

                  <br />

                  <div style={{ display: "flex" }}>
                    <div>
                      <span style={profileCardDesign.profileMainCArdTitle}>
                        Salary:
                      </span>{" "}
                      <span style={profileCardDesign.profileMainCArdContent}>
                        {"20Lach"}{" "}
                      </span>
                    </div>
                    <div>
                      <span style={profileCardDesign.profileMainCArdTitle}>
                        Location:
                      </span>{" "}
                      <span style={profileCardDesign.profileMainCArdContent}>
                        {truncateSentence("Delhi")}{" "}
                      </span>
                    </div>
                  </div>
                  <br />
                  <br />
                  <CustomButton
                    label={"View Full Profile"}
                    onClick={viewCurrentProfile}
                    buttonStyle={{
                      background: "rgb(25, 118, 210)",
                      fontSize: "1rem",
                      width: "12vw",
                      borderRadius: " 5px",
                      color: "white",
                    }}
                  />
                </div>
              </div>


            </Container>
            <Container maxWidth="lg">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Image
                    style={{ marginRight: "30px", borderRadius: "10px" }}
                    src={profileImageURLs[2]}
                    alt=""
                    width={330}
                    height={305}
                  />
                </div>

                <div>
                  <p style={profileCardDesign.profileMainCardName}>
                    {"Aman"}
                  </p>

                  <h2 style={profileCardDesign.profileDesignationMainCard}>
                    {splitSentenceAt("SAP Developer")}
                  </h2>

                  <p style={profileCardDesign.profileMainCArdBio}>
                    {"I am a skilled SAP developer with a decade of experience in SAP ECC, S/4HANA, and Fiori. My expertise lies in translating complex business needs into efficient technical solutions. I have a proven track record of delivering high-quality SAP solutions that streamline business processes and enhance overall efficiency."}
                  </p>

                  <br />

                  <div style={{ display: "flex" }}>
                    <div>
                      <span style={profileCardDesign.profileMainCArdTitle}>
                        Salary:
                      </span>{" "}
                      <span style={profileCardDesign.profileMainCArdContent}>
                        {"20Lach"}{" "}
                      </span>
                    </div>
                    <div>
                      <span style={profileCardDesign.profileMainCArdTitle}>
                        Location:
                      </span>{" "}
                      <span style={profileCardDesign.profileMainCArdContent}>
                        {truncateSentence("Delhi")}{" "}
                      </span>
                    </div>
                  </div>
                  <br />
                  <br />
                  <CustomButton
                    label={"View Full Profile"}
                    onClick={viewCurrentProfile}
                    buttonStyle={{
                      background: "rgb(25, 118, 210)",
                      fontSize: "1rem",
                      width: "12vw",
                      borderRadius: " 5px",
                      color: "white",
                    }}
                  />
                </div>
              </div>


            </Container>

          </Carousel>
        )}
      </div>
    </div>
  );
};

export default SlidingCandidateResponsiveCarousel;
