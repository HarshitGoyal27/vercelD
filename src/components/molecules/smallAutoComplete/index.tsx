import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import Image from 'next/image';
import css from "../../../styles/search.module.css";

interface Option {
    id: number;
    label: string;
}
interface CustomAutocompleteProps {
    setSelectedValue: Function;
    url: string;
    fieldName: string;
    imageurl: string | null;
    name: string;
    widtha: string;
    setAllSkills:React.Dispatch<React.SetStateAction<string[]>> | null;
    setFinalTotalSkills:React.Dispatch<React.SetStateAction<string[]>> | null;
    handleFilter: ((event: React.ChangeEvent<{}>, value: Option | null) => Promise<void>) |null; // Add this line

}
interface type{
    Skill_Set: string;
  Experience_in_Years: string;
  Current_Location: string;
  Current_Timezone: string | null;
  Skill_Name_Version: string;
  Certification: string;
  Preferred_Industry_Domain: string;
}

function SmallAutocompleteFromAPI({handleFilter,setFinalTotalSkills,setAllSkills, setSelectedValue, url, fieldName, imageurl, name, widtha }: CustomAutocompleteProps) {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<Option[]>([]);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');
    let timer: ReturnType<typeof setTimeout> | null = null;

    const fetchData = async (search: string) => {
        setLoading(true);
        try {
            const res = await axios.post(url, { [fieldName]:search });
            if (res.data.code === 'ERR_BAD_REQUEST') {
                alert('backend token expired!!');
                return
            }
            if (res && res.data && res.data.data) {
                
                setOptions(res.data.data);
                setLoading(false);
            } else {
                console.error('Error fetching data:', res);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    const delayedFetch = (searchValue: string) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fetchData(searchValue);
        }, 1000); // Adjust the delay time as needed (500 milliseconds here)
    };

    const handleInputChange = (event: React.ChangeEvent<{}>, newInputValue: string) => {
        setInputValue(newInputValue);
        if (newInputValue !== '') {
            setOpen(true);
            delayedFetch(newInputValue);
        } else {
            setOpen(false);
            setOptions([]);
        }
    };


    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);


    const handleOptionSelect = (event: React.ChangeEvent<{}>, value: Option | null) => {
        if(handleFilter===null){
            if (value !== null) {
                const payload = { [fieldName]: value };
                setAllSkills && setAllSkills((prevSkill: string[]) => [...prevSkill, `${value}`]); 
                setFinalTotalSkills && setFinalTotalSkills((prevFinalSkills) => [...prevFinalSkills, `${value}`]);
                
                if(handleFilter===null){
                    console.log("object")
                    // setSelectedValue( { Current_Location: value });
                    setSelectedValue((prevState:type) => ({
                        ...prevState,
                        Current_Location: value
                      }));
                }
                else{
                    setSelectedValue(payload);
                }
            }
        }else{
            console.log("called")
            if(value){
                handleFilter(event,value);
            }
            
        }
    };

    return (
        <div className='mainWrapper'>
            {imageurl && <Image src={imageurl} height={40} width={40} alt="" />}
            <Autocomplete
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                inputValue={inputValue}
                onInputChange={handleInputChange}
                onChange={handleOptionSelect}
                options={options}
                loading={loading}
                style={!imageurl ? { width: `${widtha}` } : undefined}
                className={css.skillinfo}
                getOptionLabel={(option: Option) => String(option) || ''}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={name}
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </>
                            ),
                        }}
                    />
                )}
            />
            <style jsx>{`
            .mainWrapper {
                // margin: 40px 15% 10px 15%;
                display:flex;
                justify-content: center;
                align-items: center;
                gap:10px;
            }

`}</style>
        </div>
    );
}

export default SmallAutocompleteFromAPI;
