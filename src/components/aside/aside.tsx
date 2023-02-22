import {Box, Grid} from "@mui/material";
import { styled } from "@mui/material/styles";
import AccordionList from "../accordion/accordion";
import ImageList from "../imageList/imageList"

let StyledBox = styled(Box)`
    height: 100%;
    padding: 15px;
    
    .css-ffjoah-MuiGrid-root {
        flex-grow: 1;
        align-content: bottom;
        & > *:not(:first-of-type) {
            margin-top: 10px;
        }
    }
`;
StyledBox = styled(StyledBox)(({ theme }) => ({
    backgroundColor: "#D0ECE7",
}));

const Aside = () => {
    return (
        <StyledBox>
            <Grid container direction={"column"} spacing={1} sx = {{mt: 3, mb: 3}}>
                <Grid item>
                   <AccordionList/>
                </Grid>
                <Grid item>
                   <AccordionList/>
                </Grid>
                <Grid item>
                   <ImageList/>
                </Grid>
            </Grid>
        </StyledBox>
    );
};

export default Aside;