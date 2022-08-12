import { SystemStyleObject } from '@mui/system';

const styles: Record<string, SystemStyleObject> = {
    forgotPasswordText: {
        fontSize: 13, 
        marginTop: 1, 
        color: "rgba(255,255,255, 0.7)"
    },
    footerOtherOptions: {
        display: "flex", 
        flexDirection: "row", 
        marginTop: 4
    },
    noAccountText: {
        fontSize: 14, 
        marginTop: 1, 
        color: "rgba(255,255,255, 0.7)"
    },
    signInText: {
        fontSize: 14, 
        marginTop: 1, 
        color: "rgba(255,255,255, 0.7)", 
        marginLeft: 1
    }
}

export default styles;