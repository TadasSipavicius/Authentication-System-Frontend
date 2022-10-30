import { SystemStyleObject } from '@mui/system';

const PlayerRowStyling = () => {

    const styles: Record<string, SystemStyleObject> = {
        hex: {
            width: 104,
            height: 60,
            backgroundColor: "#6C6",
            position: "relative"
        }

    }

    return styles;
}

export default PlayerRowStyling;