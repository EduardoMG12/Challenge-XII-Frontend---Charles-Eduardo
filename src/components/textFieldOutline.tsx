import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

interface ITextFielProps{
    label:string
    defaultValue?:string
    focused?:boolean
}

const MyTextField:React.FC<ITextFielProps> = ({defaultValue, label, focused}) => {
  const [value, setValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: { target: { value: React.SetStateAction<string | undefined>; }; }) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue('');
  };

  return (
    <TextField
      label={label}
      InputLabelProps={{shrink: true}}
      value={value}
      onChange={handleChange}
      variant="outlined"
      focused={focused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={handleClear}>
            {focused 
            ?
            <img src="https://challengeuolpbcompass.s3.amazonaws.com/Home/focusClearInput.svg" alt=""/>
             : 
             isFocused 
             ? 
             <img src="https://challengeuolpbcompass.s3.amazonaws.com/Home/focusClearInput.svg" alt=""/>
             : 
             
                <img src="https://challengeuolpbcompass.s3.amazonaws.com/Home/clearInput.svg" alt=""/>
                }
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default MyTextField;