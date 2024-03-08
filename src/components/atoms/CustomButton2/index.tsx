// components/CustomButton.tsx

import React, {  CSSProperties, MouseEvent, useState } from 'react';

interface CustomButtonProps {
  label:String;
  buttonStyle?: CSSProperties;
  hoverStyle?: CSSProperties;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton2: React.FC<CustomButtonProps> = ({
  label,
  buttonStyle,
  hoverStyle,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultStyles: CSSProperties = {
    background: 'black',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const combinedStyles: CSSProperties = {
    ...defaultStyles,
    ...buttonStyle,
    ...(isHovered ? hoverStyle : {}),
  };

  return (
    <button
       
      style={combinedStyles}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </button>
  );
};

export default CustomButton2;
