import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import talentPoolStyle from "../../../styles/talentPoolStyles.module.css";
type AccordionComponentProps = {
    title: string;
    content: string;
   
  };

  const AccordionComponent: React.FC<AccordionComponentProps> = ({ title, content}) => {
  return (
    <div className={talentPoolStyle.ffqq} >
      <Accordion className={talentPoolStyle.accordionStyle} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box style={{fontSize:"20px" ,  fontFamily: "Poppins",color:"#444E57" , fontWeight:"600" , padding:"0px 10px"}}>{title}</Box>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{ fontFamily: "Nunito" , fontSize: "16px" , letterSpacing: "0.5px", fontWeight:"800", padding:"0px 10px" }}>
            {content}
          </p>
        </AccordionDetails>
      </Accordion>
     
    
     
    </div>
  );
}

export default AccordionComponent;