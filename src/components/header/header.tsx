import AppBar from "@mui/material/AppBar";
import { Grid, Typography } from "@mui/material";
import DropDown from "../dropDown/dropDown";
import MyWorker from "../worker/worker";

export function Header() {
  return (
    <AppBar
      sx={{
        position: "sticky",
        background: "#2c2b30",
        height: "80px",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent={"flex-end"}
        height="60px"
      >
        <Grid item xs={12}>
          <Typography color="#f2f3f4" variant="h5">
            Header
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <DropDown />
        </Grid>
        <Grid item xs={12}>
          <MyWorker />
        </Grid>
      </Grid>
    </AppBar>
  );
}

// return (
//   <Box
//     sx={{
//       width: "100%",
//       height: "auto",
//       backgroundColor: "#2c2b30",
//       paddingTop: "1rem",
//       paddingBottom: "1rem",
//     }}
//   >
//     <Container maxWidth="lg">
//       <Grid container direction="column" alignItems="center">
//         <Grid item xs={12}>
//           <Typography color="#f2f3f4" variant="h5">
//             Footer
//           </Typography>
//         </Grid>
//       </Grid>
//     </Container>
//   </Box>
// );

export default Header;
