import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#FBA403",
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        color: '#FFFFFF', 
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#FFFFFF', 
                      },
                      '&:hover .MuiInputBase-input': {
                        color: '#FBA403', 
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#FBA403', 
                      },
                      '&.Mui-focused .MuiInputBase-input': {
                        color: '#FBA403', 
                      },
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
              root: {
                color:"#FFFFFF",
                '&:hover .MuiInputLabel-shrink': {
                    color:"blue"
                },
                '&.Mui-focused': {
                  color: '#FBA403',
                },
                '&.MuiInputLabel-root:hover': {
                    color: '#FBA403',
                  },
              },
            },
          },
    },
});