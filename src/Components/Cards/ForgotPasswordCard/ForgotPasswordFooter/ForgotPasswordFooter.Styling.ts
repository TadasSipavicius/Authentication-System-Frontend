import { SystemStyleObject } from '@mui/system';

const styles: Record<string, SystemStyleObject> = {
    forgotPasswordContainer: {
        marginTop: 2,
        position: "absolute",
        bottom: 15
    },
    forgotPasswordLinkToLoginPage: {
        color: "rgba(255,255,255, 1)",
        fontSize: 17,
        
        "&:hover": {
            color: "rgba(255,255,255, 0.7)",
            cursor: "pointer",
        }
    }
}

export default styles;