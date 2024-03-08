import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DEV_PUBLIC_URL } from '../../../../configs/auth';
const apiUrl = `${DEV_PUBLIC_URL}form/candidates`;
import Image from 'next/image';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import axios from 'axios';
import homePageStyle from "../../../styles/homePageStyles.module.css"
import { CardContent } from '@mui/material';
import css from "../../../styles/jobs.module.css"
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
function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          backgroundColor: "white",
          marginTop: "-28px",
          // marginRight:"180px"
        } as any}
        onClick={onClick}
      >
        <NavigateNextIcon sx={{color:"black" ,fontSize:"46px"}}/>
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
        <NavigateBeforeIcon sx={{color:"black",fontSize:"46px"}}/>
      </div>
    );
  }
const JobProfileCarausel = () => {
    const [apiResponse, setApiResponse] = useState<Candidates[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async (skills: string) => {
    try {
      console.log("Fetching data for skills:", skills);
      let resp = await axios.post(`${apiUrl}`, {
        profiles: { Skill_Set: skills },
      });
      let candidates = resp.data.data.candidatesData;
      setApiResponse(candidates);
      setLoading(false);
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
  const profileImageURLs = [
    // "https://thepienews.com/wp-content/uploads/2020/01/Profile-Picture-Small.jpg",
    "https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg",
    "https://img.freepik.com/premium-photo/happy-businessman_107420-67978.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1699747200&semt=ais",
    "https://img.freepik.com/premium-photo/photo-young-student-guy-internet-online-meeting-video-call-lesson-conference-study-concept_274222-31085.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699747200&semt=ais",
    "https://img.freepik.com/premium-photo/close-up-happy-bearded-man-suit-laughing-smiling-standing-white-background_1258-49895.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698451200&semt=ais",
  ];
  const settings: any = {
    dots: false,
    arrows: true,
    autoplay: true,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  function truncateSentence(sentence: string, maxLength = 195) {
    if (sentence != undefined && sentence.length > maxLength) {
      return sentence.substring(0, maxLength) + "...";
    } else {
      return sentence;
    }
  }
  return (
    <div className={css.profileSlide}>
      <Slider {...settings}>
          {(apiResponse === undefined) ? ("loading...") : (apiResponse.map((item: any, index: any) => (
            <div className={homePageStyle.slide} key={index}>
              <div className={css.ProfilecardStyle}>
                <CardContent sx={{ display: "flex",flexDirection:"column", alignItems: "center", justifyContent: "center" }}>
                  {/* <div className={css.carauselContainer} > */}
                  <div>
                    <Image height={280} width={240} className={css.carauselImagesProfile} src={profileImageURLs[index % 4]} alt="" />
                  </div>

                  <div className={css.contentCandidate}>
                    <div className={css.name}>{item.Name}</div>
                    <div className={css.candidateskills}>{truncateSentence(item.CandidateProfile)}</div>
                  </div>
                </CardContent>
              </div>
            </div>
          )))}
        </Slider>
    </div>
  )
}

export default JobProfileCarausel
