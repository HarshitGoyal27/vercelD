import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { DEV_PUBLIC_URL } from '../../../../configs/auth';

interface Option {
    id: number;
    label: string;
}
interface CustomAutocompleteProps {
    setSelectedValue: Function; 
    touched:boolean;
}

function CustomAutocompleteFromAPI({ setSelectedValue,touched }: CustomAutocompleteProps) {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<Option[]>([]);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');
    

    let timer: ReturnType<typeof setTimeout> | null = null;

    const fetchData = async (search: string) => {
        setLoading(true);
        try {
            const res = await axios.post(`${DEV_PUBLIC_URL}searchbar/candidates`, { search });
            
            if(res.data.code === 'ERR_BAD_REQUEST'){
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
        setSelectedValue({ Skill_Set: value });
    };

    return (
        <div className='mainWrapper'>
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
                getOptionLabel={(option: Option) => String(option) || ''}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search"
                        variant="outlined"
                        required
                        error={touched}
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
                margin: 50px 25% 40px 25%;
            }

`}</style>
        </div>
    );
}

export default CustomAutocompleteFromAPI;
