import { SystemStyleObject } from '@mui/system';

const styles: Record<string, SystemStyleObject> = {
    textFieldLabel: {
        marginLeft: 2.4,
        fontSize: 13,
        color: "white",
        letterSpacing: 0.9
    },
    usernameTextInput: {
        "& .MuiInputBase-root": {
            height: 40,
            borderRadius: 20,
            backgroundColor: "rgba(255,255,255, 0.7)",
            "&:hover fieldset": {
                border: "none"
            },
        },
        "& .MuiInputBase-input": {
            width: {
                smallMobile: 265,
                mobile: 300
            },
            fontSize: 15,
            paddingLeft: 2.5,
            fontFamily: "monospace",
        },
    },
    passowordContainer: {
        marginTop: 2
    },
    passowrdTextInput: {
        "& .MuiInputBase-root": {
            height: 40,
            borderRadius: 20,
            backgroundColor: "rgba(255,255,255, 0.7)",
            "&:hover fieldset": {
                border: "none"
            },
        },
        "& .MuiInputBase-input": {
            width: {
                smallMobile: 265,
                mobile: 300
            },
            fontSize: 15,
            paddingLeft: 2.5,
            letterSpacing: 1
        }
    },
    loginButton: {
        fontSize: 14,
        width: 150,
        borderRadius: 20,
        backgroundImage: "linear-gradient(to right, #ff512f, #f09819)",
        marginTop: 3.5,
        marginBottom: 3.5,
        textTransform: "uppercase"
    }
}

export default styles;