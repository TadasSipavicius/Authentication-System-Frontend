import { SystemStyleObject } from '@mui/system';

const styles: Record<string, SystemStyleObject> = {

    badge: {
        position: "relative",
        margin: "1.5em 3em",
        width: "2.1em",
        height: "2.9em",
        borderRadius: "10px",
        display: "inline-block",
        top: 0,
        transition: "all 0.2s ease",

        "&:before, &:after": {
            position: "absolute",
            width: "inherit",
            height: "inherit",
            borderRadius: "inherit",
            background: "inherit",
            content: '" "',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
        },
        "&: before": {
            transform: "rotate(60deg)"
        },
        "&: after": {
            transform: "rotate(-60deg)"
        },
        "&: hover": {
            top: -4
        }
    },

    yellow: {
        background: "linear-gradient(to bottom right, #ab47bc 0%, #4527a0 100%)"
    },
    circle: {
        width: "30px",
        height: "30px",
        position: "absolute",
        background: "#fff",
        zIndex: 10,
        borderRadius: "35%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto",
    },
    ribbon: {
        position: "absolute",
        borderRadius: "4px",
        paddingLeft: "18px",
        width: "55px",
        zIndex: 11,
        color: " #fff",
        bottom: "5px",
        left: "50%",
        marginLeft: "-28px",
        height: "13px",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.27)",
        textShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
        textTransform: "uppercase",
        background: "linear-gradient(to bottom right, #555 0%, #333 100%)",
        cursor: "default",
        fontSize: 10
    }



}

export default styles;
