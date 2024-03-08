import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import Link from 'next/link';
import Image from 'next/image';
import css from "../../../styles/subreq.module.css";
import { Autocomplete, Button, TextField } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
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
interface SteponeProps {
    onNextStep: () => void;
    handleTimeZone: (event: React.ChangeEvent<{}>, value: string | null) => void;
    ClientData:ClientInfo;
    handledateTime: (data: Dayjs) => void;
  }
const Steptwo: React.FC<SteponeProps>= ({ handledateTime, onNextStep ,handleTimeZone})=> {
    const [selectedDateTime, setSelectedDateTime] = useState<any>();
    const [selectedTimeZone, setSelectedTimeZone] = useState<string|null>();
    const handleDateTimeChange = (newDateTime: Dayjs | null) => {
      if (newDateTime) {
        setSelectedDateTime(newDateTime);
        handledateTime(newDateTime);
      }
    };
    const handleZone = (event: React.ChangeEvent<{}>, value: string | null) => {
        setSelectedTimeZone(value);
        handleTimeZone(event,value);
      }
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
                <div className={css.datetimeContainer}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <StaticDateTimePicker className={css.datetime} 
                        orientation="portrait" 
                        value={selectedDateTime}
                        onChange={handleDateTimeChange}
                        />
                    </LocalizationProvider>
                    <div style={{display:"flex", gap:"100px"}}>
                        <Autocomplete
                        disablePortal
                        id="Current_Timezone"
                        options={["IST","CET","ET", "none"]}
                        sx={{ width: "300px",marginLeft:"10px" }}
                        onChange={handleZone}
                        renderInput={(params) => <TextField {...params} label="Enter Time Zone" />}
                        />
                        <Button onClick={onNextStep} disabled={!selectedDateTime || !selectedTimeZone}  variant="contained">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steptwo
