
import {
    Select,
    MenuItem,
    FormControl,
    InputLabel,
  } from '@mui/material';
  
  import { CustomDropdownProps } from '@/ts/common-types';
  
  const CustomDropdown: React.FC<CustomDropdownProps> = ({
    value,
    onChange,
    placeholder,
    menuItems,
    dropdownStyle,
    itemStyle,
  }) => {
  
    return (
      <FormControl variant="outlined" style={dropdownStyle}>
        <InputLabel id="experience-label">{placeholder}</InputLabel>
        <Select
          labelId="experience-label"
          id="experience-select"
          value={value}
          onChange={() =>{}}
          label={placeholder}
          style={itemStyle}
        >
          {menuItems.map((item, index) => (
            <MenuItem key={index} value={item} style={itemStyle}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };
  
  export default CustomDropdown;
  