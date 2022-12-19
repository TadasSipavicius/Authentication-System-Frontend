import { useMediaQuery } from "@mui/material";

export default function useMobile() {

    return useMediaQuery('(max-width:600px)');
}
