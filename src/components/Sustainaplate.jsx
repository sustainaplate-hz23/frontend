import { Grid, TextField } from "@mui/material";
import Recipes from "./Recipes";

const Sustainaplate = () => {
  return (
    <Grid container>
      <Grid item>
        <TextField
          id="outlined-multiline-static"
          label="Give a recipe for..."
          multiline
          rows={4}
          defaultValue=""
        />
      </Grid>
      <Grid container item justifyContent="center" p={10}>
        <Recipes />
      </Grid>
    </Grid>
  );
};
export default Sustainaplate;
