import { SystemStyleObject } from '@mui/system';

const styles: Record<string, SystemStyleObject> = {
    loginContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: 5,
    },
    loginCard: {
        height: 600,
        width: 450,
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        backgroundColor: "#39A0C6",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
    },
    topLoginCardContainer: {
        width: "100%",
        height: 200,
        borderBottomRightRadius: "200px 200px",
        backgroundImage: "linear-gradient(to right, #ff512f, #f09819)",
        marginBottom: 4
    },
    topLoginCardDescriptionContainer: {
        marginTop: 4,
        color: "#fff",
        margin: "0px 0px 0px 30px",
        height: "100%",
        justifyContent: "center"
    },
    welcomeToText: {
        fontSize: "2rem"
    }

}
export default styles;