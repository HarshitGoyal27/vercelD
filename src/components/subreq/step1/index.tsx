import { Button, TextField } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { ChangeEvent, useEffect, useState } from 'react'
import css from "../../../styles/subreq.module.css";
import SmallAutocompleteFromAPI from '@/components/molecules/smallAutoComplete';
import { DEV_PUBLIC_URL } from '../../../../configs/auth';
import { data } from "../../../constants/skillsData";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Dayjs } from 'dayjs';
import { SubreqPageText } from '@/constants/texts';
interface ClientInfo {
    Skills: string[];
    Name: string;
    Email: string;
    workEmail: string;
    Company_name: string;
    contact_number: string;
    meetingDate: string | null;
    Current_Timezone: string | null;
    workType: string;
}
interface detectSelected {
    [key: string]: boolean;
    SAP: boolean;
    React: boolean;
    Cloud: boolean;
    Sql: boolean;
    Python: boolean;
    sap_erp: boolean;
    Java: boolean;
    php: boolean;
    DevOps: boolean;
}
interface errorType {
    workEmail: string;
    contact_number: string;
}
interface SteponeProps {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNextStep: () => void;
    ClientData: ClientInfo;
    handlesetClientData: (dataskill: string[]) => void;
    errors: errorType;
}
interface skilldatatype {
    skill_name: string;
}
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    marginLeft: "-20px",
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        marginLeft: "-20px",
        border: "1px solid lightblue",
        borderRadius: "30px",
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Stepone: React.FC<SteponeProps> = ({ errors, ClientData, handleInputChange, onNextStep, handlesetClientData }) => {
    const [selectedskill, setSelectedSkill] = useState<skilldatatype>({ skill_name: "" });
    const [allSkills, setAllSkills] = useState<string[]>([]);
    const [pluseOpen, setPluseOpen] = useState(false);
    const [finalTotalSkills, setFinalTotalSkills] = useState<string[]>([]);
    const [detect, setdetect] = useState<detectSelected>({
        SAP: false,
        React: false,
        Cloud: false,
        Sql: false,
        Python: false,
        sap_erp: false,
        Java: false,
        php: false,
        DevOps: false,
    });
    useEffect(() => {
        data.map((newSkill) => {
            setdetect((prevDetect) => ({
                ...prevDetect,
                [newSkill.type]: false,
            }));
        })
    }, [])

    // useEffect(() => {
    //     // if (selectedskill.skill_name.length > 2) {
    //         // setAllSkills((prevSkill) => (
    //         //     [...prevSkill, selectedskill.skill_name]
    //         // ))
    //         setFinalTotalSkills((prevFinalSkills) => [...prevFinalSkills, selectedskill.skill_name]);
       
    //     console.log("allSkills", allSkills)
    // }, [allSkills]);
   

    const handleButton = () => {
        handlesetClientData(finalTotalSkills);
        onNextStep();
    }
    const handleSelect = (data: string) => {
        setFinalTotalSkills((prev) => {
            const isPresent = prev.includes(data);
            if (isPresent) {
                return prev.filter((skill) => skill !== data);
            } else {
                return [...prev, data];
            }
        })
        setdetect((prevDetect) => ({
            ...prevDetect,
            [data]: !prevDetect[data],
        }));

    }
    const [search, setSearch] = useState("");
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }
    return (
        <div className={css.step1Container}>
            <div className={css.step1insideContainer}>
                <div className={css.step1navbar}>
                    <Link href="/">
                        <Image
                            src="/HomePageImages/SkillsCapitalLogo.png"
                            width={200}
                            height={60}
                            alt="WorldImg"
                        />
                    </Link>
                    <div className={css.steps}>
                        step 1/4
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div style={{ fontSize: "20px" }}>
                        Lets find your developers
                    </div>
                    {/* <CustomAutocompleteFromAPI setSelectedValue={setProfile} /> */}
                    <div style={{ opacity: "0.8" }}>{SubreqPageText.oneSkill}</div>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={handleSearch}
                        />
                    </Search>
                    <div style={{ width: "700px", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "15px" }}>
                        {
                            data
                                .filter((item) => {
                                    return search.toLowerCase() === ""
                                        ? item
                                        : item.type.toLowerCase().includes(search);
                                })
                                .slice(0, 8)
                                .map((item, index) => (<div key={index}>
                                    {detect[item.type]
                                        ? <div className={css.skillbutton2} onClick={() => (handleSelect(`${item.type}`))}>{item.type}</div>
                                        : <div className={css.skillbutton} onClick={() => (handleSelect(`${item.type}`))}>
                                            {item.type}
                                        </div>}
                                </div>
                                ))
                        }
                    </div>
                </div>
                <div onClick={() => setPluseOpen(!pluseOpen)} style={{ marginBottom: "0px", height: "55px", borderRadius: "5px", border: "1px solid grey", alignItems: "center", display: "flex", opacity: "0.5" }}>
                    <div style={{ width: "93%", cursor: "pointer", display: "flex" }} >
                        <div style={{ display: "flex" }}>
                            {allSkills.length !== 0 ?
                                (
                                    allSkills.map((item: string, index: number) => (
                                        <div key={index} className={css.skillBullet}>{item}</div>
                                    ))
                                )
                                // <div className={css.skillBullet}>{AllskillInfo[0].skill_name} - {AllskillInfo[0].last_used}</div>
                                : <div style={{ fontSize: "18px", margin: "13px", opacity: "0.7" }} >
                                    {SubreqPageText.otherSkills}
                                </div>}
                        </div>
                    </div>
                    <span style={{ fontSize: "40px", cursor: "pointer" }} >+</span>
                </div>
                {pluseOpen
                    && <SmallAutocompleteFromAPI
                        handleFilter={null}
                        widtha="520px"
                        name="Skill name"
                        imageurl=""
                        fieldName="search"
                        setAllSkills = {setAllSkills}
                        setFinalTotalSkills={setFinalTotalSkills}
                        setSelectedValue={setSelectedSkill}
                        url={`${DEV_PUBLIC_URL}searchbar/candidates`}
                    />
                }
                <div>
                    <div style={{ marginBottom: "10px" }}>{SubreqPageText.workEmail}</div>
                    <TextField
                        placeholder="Enter Your Email"
                        name="workEmail"
                        style={{ width: "500px" }}
                        value={ClientData.workEmail}
                        onChange={handleInputChange}
                        className={css.inputContainer}
                        helperText={errors.workEmail}
                        required
                    />
                </div>
                <div>
                    <div style={{ marginBottom: "10px" }}>{SubreqPageText.phoneNumber}</div>
                    <TextField
                        placeholder="Enter Your phone number"
                        name="contact_number"
                        style={{ width: "500px" }}
                        value={ClientData.contact_number}
                        onChange={handleInputChange}
                        className={css.inputContainer}
                        helperText={errors.contact_number}
                        required
                    />

                </div>
                <Button
                    className={css.step1button}
                    disabled={!ClientData.contact_number || !ClientData.workEmail}
                    onClick={handleButton}
                    variant="contained">
                    Continue
                </Button>
            </div>
        </div>
    )
}

export default Stepone
