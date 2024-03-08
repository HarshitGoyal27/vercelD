import Image from 'next/image'
import React from 'react'
import css from "../../styles/subreq.module.css";
import { Button } from '@mui/material';
import { useRouter } from "next/router";
import { AskclientPageText } from '@/constants/texts';
interface searchdevProps {
  handleYouSelect: () => void;
} 
const AskClient: React.FC<searchdevProps>=({handleYouSelect}) => {
  const router = useRouter();
  const handleClick = ()=>{
    router.push('/subreq');
  }
  return (
    <div className={css.askclient}>
      <div className={css.askclient1}>
        <div className={css.askclienttext} >{AskclientPageText.point1}</div>
        <Image
          src="/subreqImages/select-candidates2.jpg"
          width={200}
          height={200}
          alt="WorldImg"
          className={css.image}
        />
        <Button onClick={handleYouSelect} type="submit" variant="contained" color="primary">
              Get candidates
            </Button>
      </div>
      <div className={css.askclient1}>
        <div className={css.askclienttext}>{AskclientPageText.point2}</div>
        <Image
          src="/subreqImages/select-candidates.jpg"
          width={200}
          height={200}
          alt="WorldImg"
          className={css.image}
        />
        <Button onClick={handleClick} type="submit" variant="contained" color="primary"> 
              fill information
        </Button>
      </div>
    </div>
  )
}

export default AskClient
