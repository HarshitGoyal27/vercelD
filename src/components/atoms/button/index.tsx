import React from 'react';

type CustomButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  buttonStyle?: React.CSSProperties;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  disabled = false,
  buttonStyle,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ ...defaultButtonStyle, ...buttonStyle }}
    >
      {label}
    </button>
  );
};

const defaultButtonStyle: React.CSSProperties = {
  backgroundColor: 'black', // Replace with your desired color
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '14px',
  cursor: 'pointer',
};

export default CustomButton;
