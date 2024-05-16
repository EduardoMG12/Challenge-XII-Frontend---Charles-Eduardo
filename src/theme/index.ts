import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#FBA403",
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiInputBase-input": {
                        color: "#FFFFFF",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#FFFFFF",
                    },
                    "&:hover .MuiInputBase-input": {
                        color: "#FBA403",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#FBA403",
                    },
                    "&.Mui-focused .MuiInputBase-input": {
                        color: "#FBA403",
                    },
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: "#FFFFFF",
                    "&:hover .MuiInputLabel-shrink": {
                        color: "blue",
                    },
                    "&.Mui-focused": {
                        color: "#FBA403",
                    },
                    "&.MuiInputLabel-root:hover": {
                        color: "#FBA403",
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                icon: {
                    color: "#FFFFFF",
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    maxHeight: "6.25rem",
                    backgroundColor: "#383838",
                    color: "#FFFFFF",
                },
            },
        },
    },
});
