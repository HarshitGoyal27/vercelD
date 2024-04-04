import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { DEV_PUBLIC_URL } from '../../../../configs/auth';
import Chip from '@mui/material/Chip';

interface Option {
    id: number;
    label: string;
}
interface CustomAutocompleteProps {
    setSelectedValue: Function; 
    touched:boolean;
}

function CustomAutocompleteFromAPI({ setSelectedValue,touched }: CustomAutocompleteProps) {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event: any) => {
        console.log(event.target.value);
        setSelectedValue({Skill_Set: event.target.value});
    };
    
    return (
        <div className='mainWrapper'>
            <TextField
                        onChange={handleInputChange}
                        label="Search"
                        variant="outlined"
                        required
                        style={{ width: '100%' }}
                    />
<style jsx>{`
            .mainWrapper {
                margin: 50px 25% 40px 25%;
            }

`}</style>
        </div>
    );
}

export default CustomAutocompleteFromAPI;
