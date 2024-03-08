export type CustomDropdownProps = {
    value: string;
    onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
    placeholder: string;
    menuItems: string[];
    dropdownStyle?: React.CSSProperties; 
    itemStyle?: React.CSSProperties; 
  }