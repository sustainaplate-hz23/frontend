import { Grid, TextField } from "@mui/material";
import Recipes from "./Recipes";

const Sustainaplate = () => {
  return (
    <Grid container justifyContent="center" my={2}>
      <Grid item xs={12} textAlign="center" my={5}>
        <TextField
          label="Give a recipe for..."
          variant="outlined"
          sx={{width: "80%"}}
        />
      </Grid>
      <Grid container item justifyContent="center" px={16}>
        <Recipes />
      </Grid>
    </Grid>
  );
};
export default Sustainaplate;
