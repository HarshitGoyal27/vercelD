import React, { useState ,useEffect} from 'react'
import css1 from "../../styles/sapSearchStyle.module.css";
import css2 from "../../styles/search.module.css";
import CustomAutocompleteFromAPI from '@/components/molecules/AutoComplete';
import { Button, Input, MenuItem, Select, TextField } from '@mui/material';
import { DEV_PUBLIC_SAPURL } from "../../../configs/auth";
import { Box, Paper } from "@mui/material";
import Image from "next/image";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CloseIcon from '@mui/icons-material/Close';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CircularProgress from '@mui/material/CircularProgress';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';

interface Profile {
    keyword: string;
    primary_module: string;
    secondary_module: string;
    role_type:string;
    technical_skills:string;
    country:string;
    experience:string;
}

interface Response {
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
    MayAlsoKnow: string;
    Education:string;
  }
const SapSearch = () => {
    const [profiles, setProfile] = useState<Profile>({
        keyword:'',
        primary_module: '',
        secondary_module: '',
        role_type:'',
        technical_skills:'',
        country:'',
        experience:''
    });
    const [candidates,setCandidates]=useState<Response[]>([]);
    const [loading,setLoading]=useState(false);
    const [zero,setZero]=useState(false);
    const [pageArr,setPageArr]=useState<Response[]>([]);
    const [pageNoDisplay,setPageNoDisplay]=useState(1);
    const [pageNoAxios,setPageNoAxios]=useState(1);
    const [disable,setDisable]=useState(false);
    const [arrLoad,setArrLoad]=useState(false);

    const handleChangeKeyword=(ele:any)=>{
        console.log(ele.target.value);
        setProfile({...profiles,keyword:ele.target.value});
    }
    const handleChangePrimary=(ele:any)=>{
        console.log(ele.target.value);
        setProfile({...profiles,primary_module:ele.target.value});
    }
    const handleChangeSecondary=(ele:any)=>{
        console.log(ele.target.value);
        setProfile({...profiles,secondary_module:ele.target.value});
    }
    const handleChangeRoleType=(ele:any)=>{
        console.log(ele.target.value);
        setProfile({...profiles,role_type:ele.target.value});
    }
    const handleChangeTechnical=(ele:any)=>{
        console.log(ele.target.value);
        setProfile({...profiles,technical_skills:ele.target.value});
    }
    const handleOption1=(ele:any)=>{
        console.log(ele);
        setProfile({...profiles,role_type:ele});
    }
    const handleCountry=(ele:any)=>{
        setProfile({...profiles,country:ele.target.value});
    }
    const handleExperience=(ele:any)=>{
        setProfile({...profiles,experience:ele.target.value});
    }
    const handleSubmit=async()=>{
        try{
            console.log(profiles);
            setArrLoad(true);
            let resp=await axios.post(`${DEV_PUBLIC_SAPURL}sap/candidates`,{profiles,pageNoAxios});
            let {finalCandidates}=resp.data.data;
            console.log('LENGTH OF DATA IS ',finalCandidates.length);
            if(finalCandidates.length<10){
                console.log('Length is less than 10');
                if(finalCandidates.length===0){
                    setZero(true);
                }else{
                    setCandidates([...finalCandidates]);
                }
                setDisable(true);
                setLoading(!loading);
                setArrLoad(false);
            }else{
                console.log('Length is greater than 10');
                let candidatesonPage=finalCandidates.slice(0,10);
                let remaining_candidates=finalCandidates.slice(10);
                setCandidates([...candidatesonPage]);
                setPageArr([...remaining_candidates]);
                setLoading(!loading);
                setPageNoAxios(pageNoAxios+1);
                setArrLoad(false);
            }
        }catch(err){
            console.log(err);
        }
    }
    const handleNextPage=async()=>{
        setPageNoDisplay(pageNoDisplay+1);
        let len_in_page_Arr=pageArr.length;
        if(len_in_page_Arr<10){
            try{
                let resp=await axios.post(`${DEV_PUBLIC_SAPURL}sap/candidates`,{profiles,pageNoAxios});
                let {finalCandidates}=resp.data.data;
                let len_of_new_page=finalCandidates.length;
                let candidatesToShowOnPage=[];
                if(len_of_new_page===0){
                    candidatesToShowOnPage=pageArr.slice(0,10);
                    if(candidatesToShowOnPage.length===0){
                        setZero(true);
                    }else{
                        setCandidates([...candidatesToShowOnPage]);
                    }
                    setDisable(true);
                }else{
                    let remaining_len=10-len_in_page_Arr
                    let remaining_arr_of_new_page=finalCandidates.slice(0,remaining_len);
                    let new_page_arr=finalCandidates.slice(remaining_len);
                    setCandidates([...remaining_arr_of_new_page]);
                    setPageArr([...new_page_arr]);
                    setPageNoAxios(pageNoAxios+1);
                }
            }catch(err){

            }
            console.log('hello the length is',len_in_page_Arr);
        }else{
            let candidatesToShowOnPage=pageArr.slice(0,10);
            let RemainingCandidates=pageArr.slice(10);
            setCandidates([...candidatesToShowOnPage]);
            setPageArr([...RemainingCandidates]);
        }

    }

    return (
        <>
            {
                arrLoad===false?
                <div>
                    {
                        !loading ? 
                        <section id={css1.mostOuter}>
                        <div id={css1.outerform}>
                            <div >
                                <div id={css1.fieldname}>Key word</div>
                                <TextField size="small" id={css1.longSearch} onChange={(ele:any)=>handleChangeKeyword(ele)}/>
                            </div>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                    <div id={css1.fieldname}>Primary Module</div>
                                    <TextField size="small" id={css1.smallSearch} onChange={(ele:any)=>handleChangePrimary(ele)} />
                                </div>
                                <div>
                                    <div id={css1.fieldname}>Secondary Module</div>
                                    <TextField size="small" id={css1.smallSearch} onChange={(ele:any)=>handleChangeSecondary(ele)} />
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "20px" }}>
                                {/* <div>
                                    <div id={css1.fieldname}>Role Type</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div> */}
                                <div>
                                    <div id={css1.fieldname}>Role Type</div>
                                    <select id={css1.selectStyle} onChange={(e) => handleOption1(e.target.value)}>
                                        <option>Select an option</option>
                                        <option value="Technical">Technical</option>
                                        <option value="Functional">Functional</option>
                                        <option value="Techno-Functional">Techno-Functional</option>
                                    </select>
                                </div>
                                <div>
                                    <div id={css1.fieldname}>Technical Skills</div>
                                    <TextField size="small" id={css1.smallSearch} onChange={(ele:any)=>handleChangeTechnical(ele)}/>
                                </div>
                            </div>
                        </div>
                        <div id={css1.outerform}>
        
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                    <div id={css1.fieldname}>Functional Experties</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
                                <div>
                                    <div id={css1.fieldname}>Integration Skills</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                    <div id={css1.fieldname}>SAP S/4HANA Experties</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
                                <div>
                                    <div id={css1.fieldname}>Certifications</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                    <div id={css1.fieldname}>Version-Specific Experties</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
        
                            </div>
        
        
                        </div>
                        <div id={css1.outerform}>
                            <div style={{ display: "flex", gap: "20px" }}>
                                {/* <div>
                                    <div id={css1.fieldname}>Project Type</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div> */}
                                <div>
                                    <div id={css1.fieldname}>Project Type</div>
                                    <select id={css1.selectStyle}>
                                    <option>Select an option</option>
                                        <option value="Implementation">Implementation</option>
                                        <option value="Enhancement">Enhancement</option>
                                        <option value="Migration">Migration</option>
                                        <option value="Upgrade">Upgrade</option>
                                        <option value="Support">Support</option>
                                        <option value="Testing">Testing</option>
                                        <option value="Hypercare">Hypercare</option>
                                        <option value="AMS">AMS</option>
                                    </select>
                                </div>
                                <div>
                                    <div id={css1.fieldname}>Position Type</div>
                                    <select id={css1.selectStyle}>
                                    <option>Select an option</option>
                                        <option value="Consultant">Consultant</option>
                                        <option value="Developer">Developer</option>
                                        <option value="Architect">Architect</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Support">Support</option>
                                        <option value="Tester">Tester</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                    <div id={css1.fieldname}>Industry-Specific Solution</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
                                <div>
                                    <div id={css1.fieldname}>Experience level</div>
                                    <TextField size="small" id={css1.smallSearch} onChange={(e:any)=>handleExperience(e)} />
                                </div>
                            </div>
                        </div>
                        <div id={css1.outerform}>
                        <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                    <div id={css1.fieldname}>Country</div>
                                    <TextField size="small" id={css1.smallSearch} onChange={(e:any)=>handleCountry(e)}/>
                                </div>
                                <div>
                                    <div id={css1.fieldname}>State</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                    <div id={css1.fieldname}>City</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
                                <div>
                                    <div id={css1.fieldname}>Availability</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                    <div id={css1.fieldname}>Employee Type</div>
                                    <select id={css1.selectStyle}>
                                    <option>Select an option</option>
                                        <option value="fulltime">Full Time</option>
                                        <option value="parttime">Part Time</option>
                                        <option value="contract">Contract</option>
                                    </select>
                                </div>
                                <div>
                                    <div id={css1.fieldname}>Sap project Type</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button onClick={handleSubmit}>CLICK ME</Button>
                        </div>
                        </section>:
                        <section>    
                            <div>
                                {
                                zero?<div>NO CANDIDATES FOUND</div>:
                                <div>
                                    {
                                        candidates.map((ele,idx)=>(
                                            <div className={css2.outerContainer} key={idx}>
                                                <div>{idx+1}</div>
                                                <Paper elevation={3} className={css2.paperr}>
                                                    <div style={{height:'100%',width:'100%',backgroundColor:'green'}}>
                                                    <div>{ele.Name}</div>
                                                    <div style={{ display: "flex"}}>
                                                        <div className={css2.icon_info_box}>
                                                        {/* icon box starts*/}
                                                        <div className={css2.icons}>
                                                            <div style={{ display: "flex" }}>
                                                            <BusinessCenterIcon />
                                                            <div className={css2.icontext}>
                                                                {ele.Experience} Years
                                                            </div>
                                                            </div>
                                                            <div style={{ display: "flex" }}>
                                                            <AttachMoneyIcon />
                                                            <div className={css2.icontext}>{ele.Salary}</div>
                                                            </div>
                                                            <div style={{ display: "flex" }}>
                                                            <LocationOnOutlinedIcon />
                                                            <div className={css2.icontext}>
                                                                {ele.CurrentLocation}
                                                            </div>
                                                            </div>
                                                        </div>
                                                        {/* icon box ends*/}
                                                        {/* info box starts*/}
                                                        <div className={css2.infobox}>
                                                            <div>Current</div>
                                                            <div>{ele.CurrentRole}</div>
        
                                                            <div>Previous</div>
                                                            <div>{ele.PreviousRole}</div>
        
                                                            <div>Education</div>
                                                            <div>{ele.Education}</div>
        
                                                            <div>Key Skills</div>
                                                            <div>{ele.Skills}</div>
        
                                                            <div>May also know</div>
                                                            <div>{ele.MayAlsoKnow}</div>
                                                        </div>
                                                        {/* info box ends*/}
                                                        </div>
                                                        <div className={css2.candidate_profile_box}>
                                                        <div>
                                                        <center>
                                                            <Image
                                                            src="/images/dummyPic.png"
                                                            width={50}
                                                            height={50}
                                                            alt="Profile Picture"
                                                            />
                                                        </center>
                                                        <div className={css2.cp}>
                                                            {ele.CandidateProfile}
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </Paper>
                                            </div>
                                        ))
                                    }
                                </div>
                                }
                            </div>
                            <div style={{width:'50px',marginLeft:'auto',marginRight:'auto'}}>
                                {
                                    <div style={{width:'100px',display:'flex',justifyContent:'space-around'}}>
                                        <div style={{fontWeight:800,color:'red',fontSize:'50px'}}>{pageNoDisplay}</div>
                                        <Button variant="contained" onClick={handleNextPage} disabled={disable} color="secondary">
                                            <ArrowForwardIosIcon/>
                                        </Button> 
                                    </div>
                                }
                            </div>        
                        </section>
                    }
                </div>:               
                <div style={{width:'50px',marginLeft:'auto',marginRight:'auto',marginTop:'30vh'}}>
                    <CircularProgress size={50} color="secondary"/>
                </div>
                
            }
        </>

    )
}

export default SapSearch