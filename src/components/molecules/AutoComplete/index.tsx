import React, { useState, useEffect } from "react";
import {TextField,Select,MenuItem,InputLabel} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { DEV_PUBLIC_URL } from "../../../../configs/auth";
import Chip from "@mui/material/Chip";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from "@mui/material/FormControl";
import CloseIcon from '@mui/icons-material/Close';



interface Option {
  id: number;
  label: string;
}
interface CustomAutocompleteProps {
  setSelectedValue: Function;
  touched: boolean;
}
interface RecentSearchItem {
  Skill_Set: string; 
  Experience_in_Years:string;
  minExp:string;
  maxExp:string;
}

function CustomAutocompleteFromAPI({setSelectedValue,touched}: CustomAutocompleteProps) {
  const [dynamicSkill, setDynamicSkill] = useState("");
  const [skillSuggestions, setSkillSuggesions] = useState([]);
  const [locationSuggestions,setLocationSuggetions] = useState([]);
  const [dynamicLocation,setDynamicLocation]=useState("");
  const [click,setClick]=useState("");
  const [value,setValue]=useState({});
  const [recentSearch, setRecentSearch] = useState<RecentSearchItem[]>([]);

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
          setSkillSuggesions(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }else{
        setSkillSuggesions([]);
      }
    };
    fetchData();
  }, [dynamicSkill]);

  useEffect(() => {
    const fetchData = async () => {
      if (dynamicLocation.length > 0) {
        try {
          const response = await axios.post(
            `${DEV_PUBLIC_URL}location/candidates`,
            { searchLocation: dynamicLocation }
          );
          let data = response.data.data;
          console.log("resp", data);
          setLocationSuggetions(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }else{
        setLocationSuggetions([]);
      }
    };
    fetchData();
  }, [dynamicLocation]);

  useEffect(()=>{
    setSelectedValue({...value});
  },[value])

  useEffect(()=>{
    let data=localStorage.getItem("RecentSearch");
    if(data)
      {
        data=JSON.parse(data);
        typeof(data)==='object' && data && setRecentSearch(data);
      }
    console.log('Reached here',data);
  },[])

  const handleInputChangeSearch = (event: any) => {
    console.log(event.target.value);
    setSelectedValue({ Skill_Set: event.target.value });
    setDynamicSkill(event.target.value);
  };

  const handleInputChangeLocation = (event: any) => {
    console.log(event.target.value);
    // setSelectedValue({ Skill_Set: event.target.value });
    setDynamicLocation(event.target.value);
  };

  const handleInputChangeMinExp = (event: any) => {
    // console.log(event.target.value);
    setValue({...value,minExp: event.target.value });
    // setDynamicSkill(event.target.value);
  };

  const handleInputChangeMaxExp = (event: any) => {
    // console.log(event.target.value);
     setValue({...value, maxExp: event.target.value });
    // setDynamicSkill(event.target.value);
  };

  const handleInputChangeTimeZone = (event: any) => {
    // console.log(event.target.value);
    // setSelectedValue({ Skill_Set: event.target.value });
    // setDynamicSkill(event.target.value);
  };

  const handleClick1= (event:any)=>{
    console.log('CLICK--->',event.target);
    let ele=event.target;
    let elem = document.getElementById('first') as HTMLInputElement;
    if (elem) {
        elem.value = ele.textContent;
    } else {
        console.error("Element with id 'first' not found.");
    }

    setValue({...value, Skill_Set: ele.textContent });
    setDynamicSkill("");
  }

  const handleClick2= (event:any)=>{
    console.log('CLICK--->',event.target);
    let ele=event.target;
    let elem = document.getElementById('second') as HTMLInputElement;
    if (elem) {
        elem.value = ele.textContent;
    } else {
        console.error("Element with id 'second' not found.");
    }
    setValue({...value,Current_Location: ele.textContent });
    setDynamicLocation("");
  }

   const handleClickRecent=(search:any)=>{
    console.log('Inside function',search);
    let skillElem=document.getElementById("first")  as HTMLInputElement;
    let LocElem=document.getElementById("second")  as HTMLInputElement;
    let MinExpElem=document.getElementById("third")  as HTMLInputElement;
    let MaxExpElem=document.getElementById("fourth")  as HTMLInputElement;
    let TimeZoneElem=document.getElementById("fifth")  as HTMLInputElement;
    if(skillElem){
      skillElem.value=search.Skill_Set;
    }
    if(LocElem){
      if(search.Current_Location){
        LocElem.value=search.Current_Location;
      }
    }
    if(MinExpElem){
      if(search.minExp){
        MinExpElem.value=search.minExp;
      }
    }
    if(MaxExpElem){
      if(search.maxExp){
        MaxExpElem.value=search.maxExp;
      }
    }
    console.log('ABCEFGH');
  }

  const handleClose = (index:any) => {
    console.log('hiii')
    let data = localStorage.getItem("RecentSearch");
    if (data) {
      data = JSON.parse(data);
      let arr = Array.isArray(data) ? data.filter((ele, idx) => idx !== index) : [];
      // Update local storage with the filtered data
      localStorage.setItem("RecentSearch", JSON.stringify(arr));
      setRecentSearch(arr);
    }
  }

  return (
    <div className="mainWrapper">
      <div style={{marginBottom:'10vh'}}>
        <TextField
          id='first'
          onChange={handleInputChangeSearch}
          label="Search"
          variant="outlined"
          required
          style={{ width: "100%"}}
        />
        {skillSuggestions.length>0 && 
            <div style={{backgroundColor:'#f7f7f7',borderRadius:'5px',boxShadow:'rgba(0, 0, 0, 0.2) 0px 7px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px'}}>
                {
                  skillSuggestions.map((ele:any,idx:any)=>(
                    <ul key={idx} className="suggestionPoints">
                        <li onClick={handleClick1}>{ele}</li>
                    </ul>
                  ))
                }
            </div>
        }
      </div>
      <div style={{marginBottom:'10vh'}}>
        <TextField
          id='second'
          onChange={handleInputChangeLocation}
          label="Location"
          variant="outlined"
          style={{ width: "100%",zIndex:0}}
        />
        {locationSuggestions.length>0 && 
              <div style={{backgroundColor:'#f7f7f7',borderRadius:'5px',boxShadow:'rgba(0, 0, 0, 0.2) 0px 7px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px'}}>
                  {
                    locationSuggestions.map((ele:any,idx:any)=>(
                      <ul key={idx} className="suggestionPoints">
                          <li onClick={handleClick2}>{ele}</li>
                      </ul>
                    ))
                  }
              </div>
          }
      </div>
      
      <FormControl sx={{ marginBottom: "10vh", width: "25%" }}>
        <InputLabel>Maximum Experience</InputLabel>
        <Select
          label="Minimum Experience"
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          onChange={handleInputChangeMinExp}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 200,
              },
            },
          }}
        >
          {Array.from({ length: 16 }, (_, index) => (
            <MenuItem key={index} value={index + 5}>
              {index + 5}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ marginBottom: "10vh", width: "25%" }}>
        <InputLabel>Maximum Experience</InputLabel>
        <Select
          label="Maximum Experience"
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          onChange={handleInputChangeMaxExp}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 200,
              },
            },
          }}
        >
          {Array.from({ length: 16 }, (_, index) => (
            <MenuItem key={index} value={index + 5}>
              {index + 5}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        onChange={handleInputChangeTimeZone}
        label="TimeZone"
        variant="outlined"
        style={{ width: "100%",marginBottom:'10vh'}}
      />
      <div style={{width:'30%',height:'70vh',backgroundColor:'#f7f7f7',marginRight:'2%',padding:'1.2vw',overflow:'auto'}}>
            <div style={{fontWeight:'500',fontSize:'2rem'}}>RECENT SEARCHES</div>
              <div>
                {
                  recentSearch.length>0 && recentSearch.map((ele,idx)=>(
                    <div style={{display:'flex',marginTop:'4vh'}}  key={idx}>
                      <div><CloseIcon style={{fontSize:'16',color:'grey',cursor:'pointer'}} onClick={()=>handleClose(idx)}/></div>
                      <div style={{marginTop:'2.5vh',backgroundColor:'#f7f7f7',fontSize:'1.5rem'}}>
                        <div>{ele.Skill_Set}</div>
                        <div style={{marginTop:'-0.4rem'}}>
                          <span onClick={(event)=>handleClickRecent(ele)} style={{fontSize:'0.9rem',cursor:'pointer',color:'blue',width:'auto'}}>Fill this Search</span>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
      </div>
      <style jsx>{`
        .suggestionPoints {
            cursor:pointer;
            padding-left: 12px;
            list-style:none;
            margin:0px 0px;
            padding:7px;
        }
        .suggestionPoints:hover{
            background-color:#d4d4d4;            
        }
      `}</style>
    </div>
  );
}

export default CustomAutocompleteFromAPI;
