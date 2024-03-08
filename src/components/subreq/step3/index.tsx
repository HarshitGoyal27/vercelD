import React from 'react'
import css from "../../../styles/subreq.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { Button, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Dayjs } from 'dayjs';
import { SubreqPageText } from '@/constants/texts';
interface ClientInfo {
    Skills: string[];
    Name: string;
    Email: string;
    workEmail:string;
    Company_name: string;
    contact_number: string;
    meetingDate:string|null;
    Current_Timezone:string|null;
    workType:string;
}
interface errorType{
    Email: string;
    contact_number: string;
}
interface SteponeProps {
    onNextStep: () => void;
    ClientData:ClientInfo;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRadioButton:(event: React.ChangeEvent<HTMLInputElement>)=>void;
    errors:errorType;
  }
const Stepthree: React.FC<SteponeProps>= ({errors,ClientData,handleInputChange,handleRadioButton,  onNextStep }) => {
    const [value, setValue] = React.useState('fulltime');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
    return (
        <div className={css.step2container}>
            <div className={css.step2innercontainer}>
                <div>
                    <div className={css.logo}>
                        <Link href="/">
                            <Image
                                src="/HomePageImages/SkillsCapitalLogo.png"
                                width={200}
                                height={60}
                                alt="WorldImg"
                            />
                        </Link>
                    </div>
                    <div className={css.content}>
                        <div className={css.insidecontent}>
                            <div className={css.headingskills}>{SubreqPageText.companyName}</div>
                            <div className={css.call}>{SubreqPageText.hiringCall}</div>
                        </div>
                        <div className={css.morecontent}>
                            <div>{SubreqPageText.bookinfo}</div>
                            <div><span>•</span> &nbsp;&nbsp;{SubreqPageText.bookinfoPoint1}</div>
                            <div><span>•</span> &nbsp;&nbsp;{SubreqPageText.bookinfoPoint2}</div>
                        </div>
                    </div>
                </div>
                <div className={css.fieldcontainer}>
                    <div className={css.fieldinnercontainer}>
                        <div className={css.enterdetails} >Enter Details</div>
                        <div>
                            <div className={css.namecontainer}>Name*</div>
                            <TextField
                                placeholder="Enter Your Name"
                                name="Name"
                                sx={{ width: "300px" }}
                                value={ClientData.Name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <div  className={css.namecontainer}>Email*</div>
                            <TextField
                                placeholder="Enter Your Email"
                                name="Email"
                                sx={{ width: "300px" }}
                                value={ClientData.Email}
                                onChange={handleInputChange}
                                helperText={errors.Email}
                            />
                        </div>
                        <div>
                            <div  className={css.namecontainer}>Your hiring needs*</div>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={ClientData.workType}
                                    onChange={handleRadioButton}
                                >
                                    <FormControlLabel value="fulltime" control={<Radio />} label="Full-time" />
                                    <FormControlLabel value="parttime" control={<Radio />} label="Part-time" />
                                    <FormControlLabel value="contract" control={<Radio />} label="Contract" />
                                    <FormControlLabel value="freelancer" control={<Radio />} label="Freelancer" />
                                </RadioGroup>
                                </FormControl>
                        </div>
                        <Button 
                            onClick={onNextStep} 
                            disabled={!ClientData.workType || !ClientData.Name || !ClientData.Email}
                            style={{width:"190px",padding:"15px 15px",borderRadius:"45px"}}  
                            variant="contained">
                                schedule event
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Stepthree
