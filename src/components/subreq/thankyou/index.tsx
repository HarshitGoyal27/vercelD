import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import css from "../../../styles/subreq.module.css";
import { SubreqPageText } from '@/constants/texts';
interface ClientInfo {
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
    ClientData:ClientInfo;
  }
const Thankyou: React.FC<SteponeProps> = ({ClientData}) => {
    return (
        <div className={css.thankyouContainer}>
            <div className={css.thankyouinnerContainer}>
                <Link href="/">
                    <Image
                        src="/HomePageImages/SkillsCapitalLogo.png"
                        width={200}
                        height={60}
                        alt="WorldImg"
                    />
                </Link>
                <div className={css.imagethank}>
                    <Image
                        src="/subreqImages/Ashish-Jadhav.jpg"
                        width={60}
                        height={60}
                        alt="WorldImg"
                        className={css.image}
                    />
                    <div className={css.thankyouContent}>
                        <div style={{color:"#212121", fontSize:"20px",fontWeight:"600"}}>{SubreqPageText.thankyou}</div>
                        <div style={{color:"#444444"}}>{SubreqPageText.thankyou1}</div>
                        <div style={{color:"#444444"}}>{SubreqPageText.thankyou2}</div>
                    </div>
                </div>
                <div className={css.learnmore}>
                    <div className={css.learnmoreContent}>
                        <div style={{marginBottom:"10px"}}>{SubreqPageText.thankyou3}</div>
                        <Button className={css.learnButton}>{SubreqPageText.thankyou4}</Button>
                    </div>
                    <Image
                        src="/subreqImages/devBuild2.jpg"
                        width={160}
                        height={160}
                        alt="WorldImg"
                        className={css.image}
                    />
                </div>
            </div>
        </div>
    )
}

export default Thankyou
