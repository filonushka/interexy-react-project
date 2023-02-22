import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import {ExpandMore as ExpandMoreIcon} from "@mui/icons-material";

// interface IAccordionData {
//     id: string;
//     title: string;
//     details?: string;
// }

const AccordionList = () => {
    return (
      <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content">
          <Typography>Accordion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Details</Typography>
            </AccordionDetails>
      </Accordion> 
    );
};

export default AccordionList;