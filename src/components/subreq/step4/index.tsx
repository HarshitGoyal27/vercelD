import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import css from "../../../styles/subreq.module.css";
import Slider from '@mui/material/Slider';
import { Button } from '@mui/material';
import axios from 'axios';
import { DEV_PUBLIC_CALLURL } from '../../../../configs/auth';
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
interface SteponeProps {
    handleYearofExp: (event: Event, newValue: number | number[]) => void;
    ClientData: ClientInfo;
    onNextStep: () => void;
    yearofExpValue: number | number[];
}
const Stepfour: React.FC<SteponeProps> = ({ yearofExpValue, ClientData, handleYearofExp, onNextStep }) => {
    const [yearsliderValue, setyearSliderValue] = useState<number>(0);
    const handleClick = async () => {
        onNextStep();
        const storedData = localStorage.getItem("selectedId");
        const parsedData = storedData ? JSON.parse(storedData) : null;
        const selectedId = parsedData ? parsedData.selectedId : null;
        console.log("id", selectedId);
        try {
            console.log('DATA::::::',{ClientData,selectedId});
            const resp = await axios.post(`${DEV_PUBLIC_CALLURL}call`, { ClientData, selectedId });
            // const candidates = resp.data.data.candidatesData;
            // if (candidates === 'Data not present') {
            //   setApiResponse([]);
            // } else if (candidates.length !== 0) {
            //   setApiResponse(candidates);
            // } else {
            //   setApiResponse([]);
            // }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div className={css.step4Container}>
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
                        step 4/4
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "400px" }}>
                    <div className={css.step4Heading}>{SubreqPageText.helpUs}</div>

                    <div className={css.step4subHeading}>{SubreqPageText.helpUs2}</div>
                    <div className={css.step4subbelowHeading}>{SubreqPageText.helpUs3}</div>
                    <div className={css.step4subHeading}>{yearofExpValue}+ YoE</div>
                    <Slider
                        defaultValue={0}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                        min={0}
                        max={7}
                        onChange={handleYearofExp}
                    />
                    <Button onClick={handleClick} className={css.step1button} variant="contained">Continue</Button>
                </div>
            </div>

        </div>
    )
}

export default Stepfour
