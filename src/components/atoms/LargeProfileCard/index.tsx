// components/CardComponent.tsx
import React from 'react';
import { Card, CardMedia, CardContent, Box, Button } from '@mui/material';
import { profileSlidingCardDesign } from '@/constants/commonStyle';
import CustomButton2 from '../CustomButton2';
import { useRouter } from 'next/router';
import talentPoolStyle from "../../../styles/talentPoolStyles.module.css";
type ProfileCardComponentProps = {
  imageUrl: string;
  profileName: string;
  profileDesignation: string;
  profileBio: string;
  HireButtonText: string;
  ViewProfileText: string;
  buttonEnabled: boolean;
  onButtonClick: () => void;
};

function truncateString(input: string, maxLength: number): string {
  if (input != undefined && input.length > maxLength) {
    return input.substring(0, maxLength) + "...";
  } else {
    return input;
  }
}
function splitSentenceAt(sentence: string) {
  // Find the index of 'at' in the sentence
  if (sentence == null) {
    return ''; // or handle accordingly based on your use case
  }

  // Find the index of 'at' in the sentence
  const atIndex = sentence.indexOf('at');

  if (atIndex !== -1) {
    // Split the sentence until 'at'
    const splitSentence = sentence.substring(0, atIndex);

    // Remove remaining words after 'at'
    const finalSentence = splitSentence.trim();

    return finalSentence;
  } else {
    // If 'at' is not found, return the original sentence
    return sentence;
  }
};

const MiddleProfileCardComponent: React.FC<ProfileCardComponentProps> = ({ imageUrl, profileBio, profileName, profileDesignation
  , HireButtonText, ViewProfileText, onButtonClick, buttonEnabled }) => {
  const router = useRouter();
  const HireCurrentDev = () => {
    router.push('/search-developers');
  }
  const ViewProfile = () => {
    alert("ViewProfile Clicked")
  }
  return (
    <div className={talentPoolStyle.cardLarge}>
      {/* Card Image */}
      <div className={talentPoolStyle.middleImageContainer} >

        {/* <CardMedia style={{ borderRadius:"25px"}}  component="img" width="50" height={imageHeight} image={imageUrl} alt="Card Image" /> */}
        <CardMedia className={talentPoolStyle.cardImageLarge} component="img" image={imageUrl} alt="Card Image" />
      </div>

      {/* Card Content */}
      <CardContent>
        {/* Paragraph */}

        <div style={profileSlidingCardDesign.profileNameLarge}>
          {truncateString(profileName, 15)}
        </div>

        <div style={profileSlidingCardDesign.profileDesignationLarge}>
          {truncateString(splitSentenceAt(profileDesignation), 25)}
        </div>
        <br />
        <div style={profileSlidingCardDesign.profileBioLarge}>
          {truncateString(profileBio, 90)}
        </div>

        <br />
        <br />

        {/* Button */}
        {buttonEnabled === true ?
          (<div style={{ display: "flex", justifyContent: "flex-start", gap: "15px", marginTop: "-20px" }} >

            <CustomButton2
              onClick={ViewProfile} label={ViewProfileText}
              buttonStyle={{
                background: `whitesmoke`,
                color: `black`,
                padding: `10px 15px`,
                border: `0.5px solid black`,
                borderRadius: `25px`,
                cursor: `pointer`,
                fontSize: `15px`,
                margin: "0px 0px 0px 5px ",
                gap: `10px`,

              }}
              hoverStyle={{
                background: `black`,
                color: `whitesmoke`,
                border: `0.5px solid black`,
                borderRadius: `25px`,
                cursor: `pointer`,
                fontSize: `15px`,
                gap: `10px`,
                boxShadow: " 0px 2px 6px grey",
              }}

            />

            <CustomButton2
              onClick={HireCurrentDev} label={HireButtonText}
              buttonStyle={{
                background: `black`,
                color: `white`,
                border: `black`,
                borderRadius: `25px`,
                cursor: `pointer`,
                fontSize: `15px`,
                gap: `10px`,
              }}
              hoverStyle={{
                background: `white`,
                color: `black`,
                borderRadius: `25px`,
                cursor: `pointer`,
                fontSize: `15px`,
                border: `0.5px solid black`,
                gap: `10px`,
              }}

            />
          </div>
          ) : (
            <></>
          )
        }

      </CardContent>
    </div>
  );
};

export default MiddleProfileCardComponent;
