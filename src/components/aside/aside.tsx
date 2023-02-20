import {
    Box,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";



interface IAccordionData {
    id: string;
    title: string;
    details?: string;
}

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
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                        >
                            <Typography>Accordion</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Details</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            // id={accordion2.id}
                        >
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Details</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </StyledBox>
    );
};

export default Aside;