import { Opacity, Padding } from "@mui/icons-material";
import { colors } from "@mui/material";
const PRIMARY_COLOR = "#000";
const PRIMARY_BLACK = '#000';
const SECONDARY_BLACK = '#040404';
const PRIMARY_BLUE_COLOR = "#2871FF";

const PRIMARY_FONT_FAMILY = 'Gestura Display TRIAL';
const SECONDARY_FONT_FAMILY = 'SF Pro Display';
const COMMON_FONT_FAMILY = 'Nunito';
const COMMON_FONT_FAMILY2 = 'Poppins';


export const fontStyling = {
  mainHeading: {


    color: `${PRIMARY_BLACK}`,

    fontFamily: "Poppins",
    fontSize: '58px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
    width: '600px',
    // marginBlockStart:"0px",
    marginBlockEnd: "0px",
  },

  spanMainHeading: {
    color: `${PRIMARY_BLUE_COLOR}`,
    fontStyle: 'italic',
    fontFamily: "Poppins",
    fontSize: '65px',
    fontWeight: '700',
    // color:'red',
  },

  mainHeadingHireDev: {

    color: `#424241`,

    fontFamily: `Poppins`,
    fontSize: '58px',
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: '65px',
    width: '600px',
    marginBlockStart: "0px",
    marginBlockEnd: "0px",


  },
  spanmainHeadingHireDev: {
    color: `${PRIMARY_BLUE_COLOR}`,
    fontStyle: 'italic',
    fontFamily: "Poppins",
    fontSize: '65px',
    fontWeight: '600',
    // color:'red',
  },
  mainSubHeadingHireDev: {
    color: '#909090',
    fontFamily: "Poppins",
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.2',
    width: "600px"

  },
  commonSectionHeading: {
    color: '#000',
    fontFamily: "Poppins",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    padding: "0px 12px",
    marginBlockStart: '1em',
    marginBlockEnd: '0.1em',

  },

  commonParagraphStyling: {
    color: `${PRIMARY_BLACK}`,
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.4",

    marginBottom: '40px',
    marginBlock: `0.1em`,

  },

  headingH2: {

    // width: '573px',
    color: '#000',
    fontFamily: "Poppins",
    fontSize: '30px',
    fontSyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    width: "600px"
  },

  mainSubParaStyling: {
    color: `#000`,
    fontFamily: "Poppins",
    fontSize: `18px`,
    fontStyle: `normal`,
    fontWeight: `400`,
    lineHeight: `1.45`,
    width: '516px',

  },


  sectionHeading: {
    color: `#000`,

    fontFamily: "Poppins",
    fontSize: `40px`,
    fontStyle: `normal`,
    fontWeight: `700`,
    lineHeight: `normal`,
    width: '600px',


  },

  sectionBlueSubHeading: {
    color: `${PRIMARY_BLUE_COLOR}`,

    fontFamily: "Poppins",
    fontSize: `22px`,

    fontWeight: `800`,
    lineHeight: `normal`,
    // width: '516px',
    textAlign: "center" as "center",
    marginBottom: "25px",
    marginBlockStart: `0.3em`,
    marginBlockEnd: `0.1em`,
  },

  sectionBlackSubHeading: {
    color: `#000`,

    fontFamily: "Poppins",
    fontSize: `24px`,
    // fontStyle: `italic`,
    fontWeight: `700`,
    lineHeight: `normal`,
    // width: '516px',
    textAlign: "center" as "center",
    marginBottom: "25px",
    marginBlockStart: `0.3em`,
    marginBlockEnd: `0.1em`,


  },

  sectionSubHeading: {
    color: `#000`,

    fontFamily: "Poppins",
    fontSize: `20px`,
    fontStyle: `normal`,
    fontWeight: `400`,
    lineHeight: `normal`,
    width: '600px',
    padding: "0px 12px",
    // marginBottom:'40px'    
    marginBlockStart: `0.3em`,
    marginBlockEnd: `0.1em`,

  },

  pointsStyling: {
    color: "#515151",
    fontFamily: "Poppins",
    fontSize: "22px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  },
  pointsHeading: {
    width: '400px',
    color: `${PRIMARY_BLUE_COLOR}`,
    textAlign: "center" as "center",
    fontFamily: "Poppins",
    fontSize: '35px',
    fontStyle: 'normal',
    fontWeight: '1000',
    lineHeight: 'normal',
  },

  sapCloudLegacySubHeading: {
    color: '#2A282F',
    textAlign: "center" as "center",
    fontFamily: "Poppins",
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    letterSpacing: '-0.96px',
  }
};


export const navLinks = {
  textDecoration: "none",
  // color: 'inherit', // Inherits the color from the parent
  color: "black",
  // border:'solid red',
  padding: "50px 15px",
  fontSize: "1.2rem",
  transition: "color 0.5s ease-in-out", // Optional: smooth color transition on hover
  "&:hover": {
    color: "blue", // Change the color on hover
  },

  logo: {
    // color:"red",
    textDecoration: "none",
    color: "black",
    fontWeight: "400",
    // border:'solid red',
    padding: "25px 0px",
    fontSize: "2.5rem",
    transition: "color 0.5s ease-in-out", // Optional: smooth color transition on hover
    "&:hover": {
      color: "blue", // Change the color on hover
    },
  }

};

export const accordianStylingHomePage = {
  commonSectionHeading: {
    color: `#000`,
    fontFamily: "Poppins",
    fontSize: "42px",
    fontStyle: "normal",
    fontWeight: "700",
    margin: "20px 12px",
    lineHeight: "normal",
    marginBlock: `0.3em 0.1em 0.1em 0em`,



  },
  accordianStylingHeading: {
    color: `#000`,
    fontFamily: "Poppins",
    fontSize: "38px",
    fontStyle: "normal",
    fontWeight: "700",
    width:"800px",
    margin: "20px 12px",
    lineHeight: "normal",
    marginBlock: `0.3em 0.1em 0.1em 0em`,
  },
  accordianStylingSubHeading: {
    color: `#000`,
    fontFamily: "Poppins",
    // fontSize: "22px",
    fontStyle: "normal",
    fontWeight: "700",
    width:"600px",
    margin: "20px 12px",
    lineHeight: "normal",
    marginBlock: `0.3em 0.1em 0.1em 0em`,
  },
  accordianStylingPara: {
    color: `${PRIMARY_BLACK}`,
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.4",
    margin: "0px 12px",
    marginBottom: '40px',
    marginBlockStart: `0em`,
    marginBlockEnd: `0.1em`,
  },
  commonParagraphStyling: {
    color: `${PRIMARY_BLACK}`,
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "1.4",
    margin: "0px 12px",
    marginBottom: '40px',
    marginBlockStart: `0em`,
    marginBlockEnd: `0.1em`,
  },
}






const commonStyle = {
  padding: "4px",
  margin: "10px",
  color: "red",

  mainx: {
    fontFamily: "Poppins",
    color: "red",
  },
  dflex: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center" as "center",
  },
  dflex_1: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },

  flexArounudCenter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  flexCenter: {
    display: "flex",
    justifyContent: "space-around",
  },
  flexCenter2: {
    display: "flex",
    gap:"200px",
    justifyContent: "space-around",
  },

  textCenter: {
    textAlign: "center" as "center",
  },

  sectionMargin: {
    margin: "20px 5px 80px 5px",
  },
  sectionPadding: {
    padding: "2px 60px ",
  },
  blueColorBold: {
    color: `${PRIMARY_BLUE_COLOR}`,
    fontWeight: "600",
    fontSize: '1.5rem'
  },

  sectionMarginBottom: {
    marginBottom: "80px",
  },
  mainPadding: {
    margin: "0 150px",


  },
  sectionHeadingCenter: {
    color: `red`,
    fontFamily: "Poppins",
    fontSize: "80px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  },
  sectionHeading: {
    color: `${PRIMARY_COLOR}`,
    fontFamily: "Poppins",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  },
};

export const blueSection = {
  backGroundBlue: {
    backgroundColor: "#2871FF",
    textAlign: "center" as "center",
    color: "#FFF",
    display: 'flex',
    justifyContent: 'center',
    width: '100w',
    // padding: '0px 80px',
    margin: '60px auto',
    height: '80vh',
    alignItems: 'center',
    // gap: '50px',
  },
  heading: {
    color: "#FFF",
    width: '80vw',
    textAlign: "center" as "center",
    margin: '0px auto',
    fontFamily: "Poppins",
    fontSize: "42px",
    lineHeight: 1.4,
    fontStyle: "normal",
    fontWeight: "1000",

  },
  para: {
    fontFamily: "Poppins",
    fontSize: "28px",
    fontWeight: " 400",
  },
};
export const worldMap = {
  backGroundBlue: {
    backgroundColor: "#2871FF",
    textAlign: "center" as "center",
    color: "#FFF",
    display: 'flex',
    justifyContent: 'center',
    width: '100w',
    // padding: '0px 80px',
    margin: '60px auto',
    height: '100vh',
    // alignItems: 'center',
    // gap: '50px',
  },
  heading: {
    color: "#FFF",
    width: '808px',
    textAlign: "start" as "start",
    // margin:'0px auto',
    fontFamily: "Poppins",
    fontSize: "42px",
    lineHeight: 1.4,
    fontStyle: "normal",
    fontWeight: " 900",

  },
  para: {
    fontFamily: "Poppins",
    textAlign: "start" as "start",
    fontSize: "22px",
    width: '600px',
    fontWeight: " 400",
  },
  worldMapNumber: {
    color: "#FFF",
    // width: '808px',
    textAlign: "center" as "center",
    // margin:'0px auto',
    fontFamily: "Poppins",
    fontSize: "50px",
    // lineHeight: 1.4,
    fontStyle: "normal",
    fontWeight: "1000",

  },
  worldMapNumberTitle: {
    color: "#E7E7E7",
    // width: '808px',
    textAlign: "start" as "start",
    // margin:'0px auto',
    fontFamily: "Poppins",
    fontSize: "18px",

    fontStyle: "normal",
    fontWeight: "400",
    // lineHeight: "32px",
  },

};
export const HireDeveloperHero = {
  HireDeveloperHeroBackground: {
    textAlign: "center" as "center",
    // color: "#FFF",
    display: 'flex',
    justifyContent: 'center',
    width: '100w',
    // padding: '0px 80px',
    // margin: '60px auto',
    height: '90vh',
    alignItems: 'center',
    // gap: '50px',
  },
  heading: {
    // color: "b",
    width: '600px',
    textAlign: "start" as "start",
    // margin:'0px auto',
    fontFamily: "Poppins",
    fontSize: "48px",
    lineHeight: "normal",
    fontStyle: "normal",
    fontWeight: "400",

  },
  para: {
    fontFamily: "Poppins",
    textAlign: "start" as "start",
    fontSize: "24px",
    width: '600px',
    fontWeight: "400",
  },
  worldMapNumber: {
    // color: "#FFF",
    // width: '808px',
    textAlign: "center" as "center",
    // margin:'0px auto',
    fontFamily: "Poppins",
    fontSize: "64px",
    // lineHeight: 1.4,
    fontStyle: "normal",
    fontWeight: "700",

  },
  worldMapNumberTitle: {
    // color: "#E7E7E7",
    // width: '808px',
    textAlign: "start" as "start",
    // margin:'0px auto',
    fontFamily: "Poppins",
    fontSize: "18px",

    fontStyle: "normal",
    fontWeight: "400",
    // lineHeight: "32px",
  },

};

export const profileSlidingCardDesign = {
  card: {

    height: "80vh",
    width: "22vw",
    borderRadius: "20px",

    overflow: "hidden",
    border: "1px solid   #424241",


  },

  cardImage: {
    // border:"2px solid  #0000007a" ,
    borderRadius: "30px",
    width: "300px",
    height: "280px",
    marginTop: "10px"
  },
  // profileName: {
  //   fontFamily: "Poppins",
  //   fontSize: "26px",
  //   fontStyle: "normal",
  //   fontWeight: "1000",
  //   padding: "0px 15px",
  //   textAlign: "start" as 'start',
  // },
  // profileDesignation: {
  //   padding: "0px 0px 0px 15px ",
  //   // fontStyle: 'italic',
  //   fontFamily: `SF Pro Display`,
  //   fontSize: '20px',
  //   fontWeight: '400',
  //   textAlign: "start" as 'start',
  // },

  // profileBio: {
  //   padding: "0px 0px 0px 15px ",
  //   textAlign: "start" as 'start',
  //   // minHeight:"15vh"
  //   color: `#000`,
  //   fontFamily: "Poppins",
  //   fontSize: `14px`,
  //   fontStyle: `normal`,
  //   fontWeight: `400`,
  //   width: `280px`,
  //   lineHeight: `normal`,
  // },
  cardLarge: {

    height: "85vh",
    width: "25vw",
    borderRadius: "10px",
    //  padding:"5px 0px",
    overflow: "hidden",
    border: "1px solid   #424241",



  },
  profileNameLarge: {
    fontFamily: "Poppins",
    fontSize: "26px",
    fontStyle: "normal",
    fontWeight: "1000",
    margin: "0px 15px",
    textAlign: "start" as 'start',
    // border:"solid red",
  },
  profileDesignationLarge: {
    margin: "0px 15px",
    // fontStyle: 'italic',
    fontFamily: "Poppins",
    fontSize: '20px',
    fontWeight: '400',
    textAlign: "start" as 'start',
    // border:"solid red",
  },
  cardImageLarge: {
    // border:"2px solid  #0000007a" ,
    borderRadius: "30px",
    width: "350px",
    height: "310px",
    marginTop: "15px",
    // border:"solid black",
  },
  profileBioLarge: {
    margin: "0px 15px",
    // border:"2px solid red",
    textAlign: "start" as 'start',
    // minHeight:"15vh"
    // color: `red`,
    fontFamily: "Poppins",
    fontSize: `14px`,
    fontStyle: `normal`,
    fontWeight: `400`,
    // width: `280px`,
    lineHeight: `normal`,
    // border:"solid black",
  },
  button: {
    color: "black",

    // textAlign: "center" as "center",
    width: "18vw",

    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
};
export const profileCardDesign = {
  profileName: {
    fontFamily: "Poppins",
    fontSize: "38px",
    fontStyle: "normal",
    fontWeight: "1000",

  },

  profileDesignation: {
    color: `${PRIMARY_BLUE_COLOR}`,
    fontStyle: 'italic',
    fontFamily: "Poppins",
    fontSize: '18px',
    fontWeight: '500',
  },

  profileBio: {
    color: "#201f1f",
    fontFamily: "Poppins",

    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "200",
    padding: "0px 15px"
  },
  profileMainCardName: {
    fontFamily: "Poppins",

    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "1000",
    marginBlockStart: "0em",
    marginBlockEnd: "0.15em",
  },
  profileDesignationMainCard: {
    color: `${PRIMARY_BLUE_COLOR}`,

    fontFamily: "Poppins",
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: "1",
    marginBlockStart: "0em",
    marginBlockEnd: "1.2em",
  },
  profileMainCArdBio: {
    color: "#201f1f",
    fontFamily: "Poppins",
    textAlign: "start" as "start",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "200",

  },
  profileMainCArdTitle: {

    fontFamily: "Poppins",

    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "600",

  },
  profileMainCArdContent: {
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    padding: "0px 30px 0px 0px",
    margin: " auto",
    color: `${PRIMARY_BLUE_COLOR}`

  },
  profileMainCArdSkills: {
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",


    color: `#3d3838`,
    padding: "0px 15px"
  },
  profileTalentPoolName: {
    fontFamily: "Poppins",

    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "1000",
    marginBlockStart: "0em",
    marginBlockEnd: "0.15em",
  },
  profileDesignationTalentPool: {

    fontFamily: "Poppins",


    fontSize: '16px',
    fontWeight: '500',
    lineHeight: "1",
    marginBlockStart: "0em",
    marginBlockEnd: "1.2em",
  },
  profileTalentPoolBio: {
    color: "#201f1f",
    fontFamily: "Poppins",
    textAlign: "start" as "start",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "200",

  },
  profileTalentPoolTitle: {

    fontFamily: "Poppins",

    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",

  },
  profileTalentPoolContent: {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "normal",
    padding: "0px 30px 0px 0px",
    margin: " auto",

  },
  profileTalentPoolSkills: {
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",


    color: `#3d3838`,
    padding: "0px 15px"
  },

};

export const talentPoolHeroSection = {
  heading: {
    // border:"2px solid red",
    color: 'black',
    textAlign: 'center' as 'center',
    fontFamily: "Poppins",
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    width: "617px",
    margin: " auto"
  },
  boldHeading: {
    color: '#2871FF',
    textAlign: 'center' as 'center',
    fontFamily: "Poppins",
    fontSize: "48px",
    fontStyle: "italic",
    fontWeight: "700",
    lineHeight: "normal",

  },
  subHeading: {
    color: 'black',
    textAlign: 'center' as 'center',
    fontFamily: "Poppins",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",

  },
};
export const talentPoolBlackBackground = {
  backGroundBlack: {
    backgroundColor: "#1E1E1E",
    textAlign: "center" as "center",
    color: "#FFFFFF",
    display: 'flex',
    justifyContent: 'center',
    width: '30w',
    padding: '50px 0px',
    margin: '60px auto',
    height: '50vh',
    // alignItems: 'center',
    // gap: '50px',

  },
  heading: {
    color: "#FFFFFF",
    width: '808px',
    textAlign: "center" as "center",
    // margin:'0px auto',
    fontFamily: "Poppins",
    fontSize: "42px",
    lineHeight: 1.4,
    fontStyle: "normal",
    fontWeight: " 700",

  },
  para: {
    fontFamily: "Poppins",
    textAlign: "start" as "start",
    fontSize: "28px",
    width: '600px',
    fontWeight: " 400",
  },
  worldMapNumber: {
    color: "#FFF",
    // width: '808px',
    textAlign: "center" as "center",
    // margin:'0px auto',
    fontFamily: "Poppins",
    fontSize: "64px",
    // lineHeight: 1.4,
    fontStyle: "normal",
    fontWeight: "500",

  },
  worldMapNumberTitle: {
    color: "#E7E7E7",
    // width: '808px',
    textAlign: "start" as "start",
    // margin:'0px auto',
    fontFamily: "Poppins",
    fontSize: "18px",

    fontStyle: "normal",
    fontWeight: "400",
    // lineHeight: "32px",
  },
}

export const cardsStyling = {
  sapCloudLegacyCard: {
    minHeight: "75vh",
    maxHeight: "100vh",
    height: "90vh",
    width: "30vw",
    padding: "25px",
    margin: "10px",
  },
  sapCloudLegacyMainHeading: {
    color: '#000',
    fontFamily: "Poppins",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    padding: "0px 12px",
    marginBlockStart: '1em',
    marginBlockEnd: '0.1em',
  },
  sapCloudLegacySubHeading: {
    color: '#000',
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    padding: "0px 12px",
    marginBlockStart: '1em',
    marginBlockEnd: '0.1em',
  },
  sapCloudLegacyCardNumber: {
    fontSize: "2.5rem",
    textAlign: "center" as "center",
    fontWeight: 600,
    fontFamily: "Poppins",
  },
  sapCloudLegacyHeading: {
    fontSize: "24px",
    textAlign: "center" as "center",
    fontWeight: "900",
    marginBottom: "20px",
    fontFamily: "Poppins",
    // width:"230px",
    marginLeft:"-15px"
  },
  
  sapCloudLegacyPara: {

    textAlign: "center" as "center",

    marginBottom: "20px",

    color: '#000',

    fontFamily: "Poppins",
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '160%',

  },

  card: {
    minHeight: "90vh",
    maxHeight: "100vh",
    height: "80vh",
    width: "30vw",
    padding: "25px",
    margin: "10px",
  },



  numbers: {
    fontSize: "3rem",
    textAlign: "center" as "center",
    fontWeight: 600,
    fontFamily: "Poppins",
  },
  heading: {
    fontSize: "2rem",
    textAlign: "center" as "center",
    fontWeight: 500,
    marginBottom: "20px",
    fontFamily: "Poppins",
  },
  paraText: {
    fontSize: "2rem",
    textAlign: "center" as "center",
    fontWeight: 500,
    marginBottom: "20px",
    fontFamily: "Poppins",
  },
  button: {
    color: "black",

    textAlign: "center" as "center",
    width: "18vw",

    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
};
export const ulLiStyle = {
  fontFamily: "Poppins",
  color: '#000',

  fontSize: '16px',
  fontSyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  textDecoration: "none",
  listStyle: "none",
  padding: "0px 12px",
  margin: "0px"
};
export const logoContainer = {
  logoCont: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
};

export const blackBox: any = {

  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "38px ",
    width: 1000,
    height: 695,
    position: "relative"
  },
  innerText: {
    width: "547px",
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "noraml"
  },
  innerImg: {
    width: "336px",
    height: "341px",
    flexShrink: 0,
  },
  stepText: {
    color: "#FFF",
    width: "240px",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    marginLeft: "-91px"
  },
  videoStyle: {
    width: "998px",
    height: "445px",
    flexShrink: "0",
    borderRadius: "20px",
    background: "#FFF",
    boxShadow: "5px 5px 250px 0px rgba(0, 0, 0, 0.25)"
  },
  circleSize: {
    width: "51px",
    height: "51px",
    flexShrink: "0",
    border: "5px solid var(--Blue, #2871FF)",
    borderRadius: "50px",
  },
  circleText: {
    // x:"50%",
    // y:"50%",
    // dominantBaseline:"middle",
    // textAnchor:"middle",
    // fill:"#2871FF",
    // fontSize:"16",
    // fontFamily:"Arial",
    // fontWeight:"bold"
    color: "var(--Blue, #2871FF)",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal"
  },
  line1: {
    width: "439px",
    height: "1px",
    marginLeft: "61px",
    marginTop: "30px",
    backgroundColor: "var(--Blue, #2871FF)",
    position: "absolute"
  },
  line2: {
    width: "439px",
    height: "1px",
    marginLeft: "556px",
    marginTop: "30px",
    backgroundColor: "var(--Blue, #2871FF)",
    position: "absolute"
  }
};

export const profileStyle: any = {
  outerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    gap: "5px",
  },
  locationBox: {
    display: "flex",
    borderWidth: "1px 0px 1px 0px ",
    borderColor: "grey",
    borderStyle: "solid",
    width: "100%"
  },
  container: {
    width: "80%",
    border: "1px solid #ccc",
    display: "flex",

    borderRadius: "10px",
    padding: "15px",
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    gap: "22px",
    marginTop: "38px",
    paddingBottom: "50px"
  },
  navText: {
    fontSize: ".875rem",
    lineHeight: "140%",
    fontWeight: "700",
    cursor: "pointer",
    display: "flex",
    gap: "5rem",
    margin: "40px",
    font: "Epilogue"
  },
  skillsStyle: {
    border: "1px solid grey",
    padding: "10px",
    backgroundColor: "rgba(1,194,169)",
    borderRadius: "10px",
    color: "white",
    opacity: "0.8"
  },
  skillsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    alignItems: "flex-start"
  },
  accordionStyle: {
    boxShadow: "none",
    border: "none",
    borderWidth: "0px 0px 1px 0px",
    borderColor: "grey",
    borderStyle: "solid",
    borderRadius: "none"
  },
  experienceBoxes: {
    border: "1px solid grey",
    margin: "10px 10px",
    padding: "6px",
    borderRadius: "20px",
    fontSize: "12px",
    color: "#455065"
  }
}

export const quote: any = {
  outerContainer: {
    width: "1470px",
    height: "426px",
    background: "#F1EFEF",
    marginLeft: "-158px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  container: {
    // width:"1470px",
    // height:"426px",
    // background:"#F1EFEF",
    // marginLeft:"-158px",
    display: "flex",
    marginTop: "100px"
    // justifyContent: "center",
    // alignItems:"center",


  },
  quoteText: {
    width: "1300px",
    color: "var(--www-turing-com-mine-shaft, #212121)",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "28px",
    fontStyle: "italic",
    fontWeight: "300",
    lineHeight: "39.76px" /* 142% */
  }
}
export default commonStyle;
