import Image from 'next/image'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { profileStyle } from '@/constants/commonStyle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../../styles/fullProfile.module.css"
import CircularProgress from '@mui/material/CircularProgress';
import css from "./../../styles/fullProfile.module.css";

interface Candidate {
    currentRole: string;
    currentLocation: string;
    profileSummary: string;
    previousRole: string;
    Name: string;
}

interface ProfileData {
    candidates: Candidate;
    skills: any[];
    loading: boolean;
}

const FullProfile = ({ candidates, skills, loading }: ProfileData) => {
    const renderProfileContent = () => {
        if (loading) {
            return (
                <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                    <CircularProgress />
                </div>
            );
        }

        return (
            <div className={css.profileContainer}>

                <div className={css.profileImage}>
                    <Image style={{ borderRadius: "50%", margin: "45px", objectFit: "cover" }}
                        src="/images/dummyPic.png"
                        width={198}
                        height={200}
                        alt="Profile Picture"
                    />
                </div>
                <div className={css.contentContainer}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <div style={{ display: "flex" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                    <div className={css.candidateProfileName}>{candidates.Name}</div>
                                    <div style={{ color: "#2871FF" }}>
                                        <span style={{ fontWeight: "1000" }}>Verified Expert</span> in Engineering
                                    </div>
                                    <div style={{ fontSize: "14px", }}>{candidates.currentRole}</div>
                                </div>
                            </div>

                            <div className={css.locationContainer} >
                                <div style={{ padding: "30px 30px 30px 0px", display: "flex", flexDirection: "column", gap: "5px", marginTop: "-10px" }} >
                                    <div style={{ opacity: "0.6" }}>LOCATION</div>
                                    <div style={{ fontWeight: "600", opacity: "0.7" }}>{candidates.currentLocation}</div>
                                </div>
                                <div className={css.memberseperator}></div>
                                <div className={css.memberYear} >
                                    <div style={{ opacity: "0.6" }}>SKILLS CAPITAL MEMBER SINCE</div>
                                    <div style={{ fontWeight: "600", opacity: "0.7" }}>Date</div>
                                </div>
                            </div>

                            <div className={css.fontsize}>
                                {candidates.profileSummary}
                            </div>
                            <div className={css.skillsContainer}>
                                {
                                    skills.map((item, index) => {
                                        return <div key={index} className={css.skillstyle}>{item}</div>
                                    })
                                }
                            </div>
                            <div style={{ width: "100%", marginTop: "10px", height: "0.8px", backgroundColor: "grey" }}></div>

                            <div className={css.PortfolioOuterContainer}>
                                <div className={css.divsize} >
                                    <div className={css.PortfolioContainer} >
                                        <div style={{ margin: "10px 10px", fontSize: "20px", fontWeight: "400", marginBottom: "30px" }}>Portfolio</div>
                                        <div className={css.portfolioHeading} style={{ color: "#2871FF" }}>{candidates.previousRole}</div>
                                        {/* <div style={{margin:"10px 10px",fontSize:"16px"}}>Architecture, Consulting, Amazon Web Services (AWS), Java, Node.js, Angular...</div>
                                <div style={{margin:"10px 10px",fontSize:"16px", fontWeight:"400",color:"#2871FF"}}>Fidelity Investments</div>
                                <div style={{margin:"10px 10px",fontSize:"16px"}}>Architecture, Consulting, Amazon Web Services (AWS), Java, Node.js, Angular...</div> */}
                                    </div>
                                </div>
                                <div className={css.experienceHeading}>
                                    <div style={{ margin: "10px 10px", fontSize: "20px", fontWeight: "400", marginBottom: "30px" }}>Experience</div>
                                    <div className={css.allExpertise}>
                                        <div className={css.expertise} style={profileStyle.experiencedives}>Java - 17 years</div>
                                        <div className={css.expertise} style={profileStyle.experiencedives}>SQL - 14 years</div>
                                        <div className={css.expertise} style={profileStyle.experiencedives}>C++ - 14 years</div>
                                    </div>

                                </div>
                            </div>

                            <div className={css.portfolioBelowMargin}></div>
                            <Accordion sx={profileStyle.accordionStyle}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ fontSize: "28px" }}
                                >
                                    Expertise
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div style={{ opacity: "0.8" }}>Years of commercial development experience</div>
                                    <div></div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={profileStyle.accordionStyle}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ fontSize: "28px" }}
                                >
                                    Previous role
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>{candidates.previousRole}</div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={profileStyle.accordionStyle}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ fontSize: "28px" }}
                                >
                                    Current role
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>{candidates.currentRole}</div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={profileStyle.accordionStyle}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ fontSize: "28px" }}
                                >
                                    Projects
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div style={{ fontSize: "20px" }}>
                                        ..
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={profileStyle.accordionStyle}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ fontSize: "28px" }}
                                >
                                    Salary
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div style={{ fontSize: "20px" }}>
                                        
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={profileStyle.accordionStyle}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ fontSize: "28px" }}
                                >
                                    Prefered location
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div style={{ fontSize: "20px" }}>
                                        
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={profileStyle.accordionStyle}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ fontSize: "28px" }}
                                >
                                    Experience
                                </AccordionSummary>

                                <AccordionDetails>

                                    {/* <Timeline
                            sx={{
                                [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                                },
                            }}
                            >
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div style={{fontSize:"18px", fontWeight:"600", marginBottom:"10px"}}>Vice President of Architecture</div> 
                                    <div style={{fontSize:"18px", fontWeight:"500", marginBottom:"10px",opacity:"0.8"}}>Fidelity Investments</div>
                                    <div>Led the technical direction and implementation for the department in Fidelity that managed the interplay between Fidelity's two main lines of business—personal and workplace investing.</div>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div style={{fontSize:"18px", fontWeight:"600", marginBottom:"10px"}}>Vice President of Architecture</div> 
                                    <div style={{fontSize:"18px", fontWeight:"500", marginBottom:"10px",opacity:"0.8"}}>Fidelity Investments</div>
                                    <div>Led the technical direction and implementation for the department in Fidelity that managed the interplay between Fidelity's two main lines of business—personal and workplace investing.</div>
                                </TimelineContent>
                            </TimelineItem>
                            </Timeline> */}

                                </AccordionDetails>
                            </Accordion>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div style={profileStyle.outerContainer}>
            {renderProfileContent()}
        </div>
    );
};

export default FullProfile;