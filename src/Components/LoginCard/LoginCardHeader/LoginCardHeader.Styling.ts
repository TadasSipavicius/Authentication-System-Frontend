import { SystemStyleObject } from '@mui/system';

const styles: Record<string, SystemStyleObject> = {
    headerContainer: {
        width: "100%",
        height: 200,
        borderBottomRightRadius: "200px 200px",
        backgroundImage: "linear-gradient(to right, #ff512f, #f09819)",
        marginBottom: 4
    },
    headerDescriptionContainer: {
        marginTop: 4,
        color: "#fff",
        margin: "0px 0px 0px 30px",
        height: "100%",
        justifyContent: "center"
    },
    welcomeText: {
        fontSize: "2rem"
    },
    projectNameText: {
        fontFamily: "Lobster, cursive", 
        fontSize: "3rem"
    }
}

export default styles;