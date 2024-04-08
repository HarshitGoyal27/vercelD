import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { DEV_PUBLIC_URL } from "../../../../configs/auth";
import Chip from "@mui/material/Chip";

interface Option {
  id: number;
  label: string;
}
interface CustomAutocompleteProps {
  setSelectedValue: Function;
  touched: boolean;
}

function CustomAutocompleteFromAPI({
  setSelectedValue,
  touched,
}: CustomAutocompleteProps) {
  const [inputValue, setInputValue] = useState("");
  const [dynamicSkill, setDynamicSkill] = useState("");
  const [suggestions, setSuggesions] = useState([]);
  const [click,setClick]=useState("");
  useEffect(() => {
    const fetchData = async () => {
      if (dynamicSkill.length > 0) {
        try {
          const response = await axios.post(
            `${DEV_PUBLIC_URL}searchbar/candidates`,
            { search: dynamicSkill }
          );
          let data = response.data.data;
          console.log("resp", data);
          setSuggesions(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();

   
 }, [dynamicSkill]);



  const handleInputChange = (event: any) => {
    console.log(event.target.value);
    setSelectedValue({ Skill_Set: event.target.value });
    setDynamicSkill(event.target.value);
  };

  const handleClick= (event:any)=>{
    console.log('CLICK--->',event.target);
    let ele=event.target;
    console.log(ele.textContent);
    // setSelectedValue({ Skill_Set: event.target.value });
    // setDynamicSkill(event.target.value);
  }

  return (
    <div className="mainWrapper">
      <TextField
        onChange={handleInputChange}
        label="Search"
        variant="outlined"
        required
        style={{ width: "100%" }}
      />
      <div style={{backgroundColor:"red",borderRadius:"5px"}}>
        {suggestions.map((suggestion, index) => (
          <div key={index} className='suggestionPoints' onClick={handleClick}>{suggestion}</div>
        ))}
      </div>
      <style jsx>{`
        .mainWrapper {
          margin: 50px 25% 40px 25%;
        }
        .suggestionPoints {
            cursor:pointer;
            padding-left: 12px;
            margin-top: 4px
        }
        .suggestionPoints:hover{
            background-color:grey;            
        }
      `}</style>
    </div>
  );
}

export default CustomAutocompleteFromAPI;
