import React, { ComponentProps, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

interface ITextFielProps extends ComponentProps<"input">{
    label:string
    defaultValue?:string
    focused?:boolean
    setErrFather: React.Dispatch<React.SetStateAction<boolean>>
    err: boolean
    setValueFather: React.Dispatch<React.SetStateAction<string>>
}

const MyTextField:React.FC<ITextFielProps> = ({defaultValue, label, focused, value:valueProp, setErrFather, err, setValueFather}) => {
  const [value, setValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setValue(newValue);
    setValueFather(newValue)
    setErrFather(false)
  };

  const handleClear = () => {
    setValue('');
  };

  useEffect(() => {
    setValue(valueProp as string);
  }, [valueProp])
  return (
    <TextField
      error={err}
      label={label}
      InputLabelProps={{shrink: true}}
      value={!defaultValue ? value ?? "" : defaultValue}
      onChange={handleChange}
      variant="outlined"
      focused={focused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={handleClear}>
            {value ? focused 
            ?
            <img src="https://challengeuolpbcompass.s3.amazonaws.com/Home/focusClearInput.svg" alt="Yellow icon of an ‘X’"/>
             : 
             isFocused 
             ? 
             <img src="https://challengeuolpbcompass.s3.amazonaws.com/Home/focusClearInput.svg" alt="Yellow icon of an ‘X’"/>
             : 
             
                <img src="https://challengeuolpbcompass.s3.amazonaws.com/Home/clearInput.svg" alt="White icon of an ‘X’"/>
               : null }
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default MyTextField;