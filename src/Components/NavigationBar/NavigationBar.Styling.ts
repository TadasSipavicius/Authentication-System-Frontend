import { SystemStyleObject } from '@mui/system';

const styles: Record<string, SystemStyleObject> = {
    appBar: {
        height: 70,
        justifyContent: "center",
        background: 'transparent',
        borderBottom: "1px solid white",
        boxShadow: "none"
    },
    appBarContainer: {
        display: "flex",
        flexDirection: "row",
        float: "right",
        justifyContent: "space-between"
    },
    logoBox: {
        display: "flex",
        alignItems: "center"
    },
    logoLink: {
        fontSize: 24,
        fontFamily: "PT Sans Narrow, sans-serif",
        color: "white",
        textDecoration: "none"
    },
    buttonsBox: {
        float: "right"
    },
    signUpButton: {
        color: "white",
        fontSize: 16,
        marginRight: 1
    },
    registerButton: {
        color: "white", 
        fontSize: 16 
    }
}
export default styles;