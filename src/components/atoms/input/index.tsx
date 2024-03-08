
import { TextField, TextFieldProps } from '@mui/material';

type CustomTextFieldProps = TextFieldProps & {
    // Add any additional props specific to CustomTextField
    // For example:
    // customProp?: string;
  };

const CustomInput: React.FC<CustomTextFieldProps> = (props) => {
  return <TextField {...props} />;
};

export default CustomInput;
