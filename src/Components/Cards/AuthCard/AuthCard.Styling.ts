import { SystemStyleObject } from '@mui/system';

const styles: Record<string, SystemStyleObject> = {
    authCardContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: 5,
    },
    authCard: {
        height: 600,
        width: 450,
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        backgroundColor: "#39A0C6",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
    },

}
export default styles;