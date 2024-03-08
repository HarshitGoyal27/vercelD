// pages/index.tsx
import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Card, CardContent, Box } from '@mui/material';
import { HireDeveloperPageText, HomePageText } from '@/constants/texts';
import hireDevStyles from "./../../../styles/hireDevStyles.module.css";
import Image from 'next/image';
interface CardContentProps {
  image: string;
  heading: string;
  paragraph: string;
}
const steps: string[] = HireDeveloperPageText.howItWorksStepsHeading;
let step1 = steps[0];
let step2 = steps[1];
let step3 = steps[2];
const StepComponent: React.FC<{ step: string; onStepClick: (step: string) => void }> = ({ step, onStepClick }) => {
  return (

    <div>
      <Button onClick={() => onStepClick(step)}>
        <h6 style={{ color: "black", fontSize: "16px", width: "300px", textTransform: "capitalize" }}>{step}</h6>
      </Button>
    </div>
  );
};

const CardComponent: React.FC<{ content: CardContentProps }> = ({ content }) => {
  const { image, heading, paragraph } = content;

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div>

        <Card >
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CardContent>
              <center><h2  >{heading}</h2></center>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                <Image src={image} height={300} width={300} alt="Card Image" style={{ maxWidth: '100%' }} />


              </div>
              <p>{paragraph}</p>
            </CardContent>


          </div>
        </Card>
      </div>
    </div>
  );
};

const getCardContent = (step: string): CardContentProps => {
  switch (step) {
    case `${step1}`:
      return {
        image: `${HireDeveloperPageText.howItWorksStepsImages[0]}`,
        heading: 'Step 1',
        paragraph: `Client Submits Job Requirements on Client
        Portal or Shares with
        their Account Manager`,
      };
    case `${step2}`:
      return {
        image: `${HireDeveloperPageText.howItWorksStepsImages[1]}`,
        heading: 'Step 2 ',
        paragraph: `Al Talent Cloud Shares
        the Most Suitable Pre-
        Vetted Matching Profiles
        with the Client`,
      };
    case `${step3}`:
      return {
        image: `${HireDeveloperPageText.howItWorksStepsImages[2]}`,
        heading: 'Step 3 ',
        paragraph: `Profiles        for Further &        Assessment and Selects
        the Final Tarent/Team`,
      };
    default:
      return {
        image: '',
        heading: '',
        paragraph: '',
      };
  }
};

const IndexPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({});

  const handleStepClick = (step: string) => {
    setActiveStep(steps.indexOf(step));
  };

  const handleNext = () => {
    const newActiveStep =
      activeStep === steps.length - 1
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className={hireDevStyles.slippernext} >
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepLabel>
              <StepComponent step={label} onStepClick={handleStepClick} />
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>

        <React.Fragment>

          <Box style={{ textAlign: "center", margin: "15px" }} sx={{ mt: 2, mb: 1, py: 1 }}>

          </Box>
          <center> <h2   > {steps[activeStep]}</h2></center>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>

              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                Previous Step
              </Button>

              <CardComponent content={getCardContent(steps[activeStep])} />

              <Box sx={{ flex: '1 1 auto' }} />
              <Button
                onClick={handleNext}
                sx={{ mr: 1 }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                Next Step
              </Button>


            </Box>
          </div>



        </React.Fragment>

      </div>
      
    </div>
  );
};

export default IndexPage;
