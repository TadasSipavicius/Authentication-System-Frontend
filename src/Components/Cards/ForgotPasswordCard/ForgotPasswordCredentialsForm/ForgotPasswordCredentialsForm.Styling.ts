import { SystemStyleObject } from '@mui/system';

const styles: Record<string, SystemStyleObject> = {
    resetPasswordContainer: {
        textAlign: "center"
    },
    resetPasswordTitle: {
        fontFamily: 'Source Serif Pro',
        color: "white",
        fontSize: 26,
        marginBottom: 1
    },
    resetPasswordDescription: {
        fontFamily: 'Source Serif Pro',
        color: "white",
        fontSize: 17,
        paddingLeft: 2.5,
        paddingRight: 2.5,
        marginBottom: 2
    },
    resetPasswordEmailTextField: {
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
    resetButton: {
        fontSize: 14,
        width: 200,
        height: 40.5,
        borderRadius: 20,
        backgroundImage: "linear-gradient(to right, #ff512f, #f09819)",
        marginTop: 2.5
    }
}

export default styles;