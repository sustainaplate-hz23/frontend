import { Grid, TextField } from "@mui/material";
import Recipes from "./Recipes";
import Button from '@mui/material/Button';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const Sustainaplate = () => {
  return (
    <Grid container justifyContent="center" my={2}>
      <Grid item xs={12} textAlign="center" my={5}>
        <TextField
          label="Give a recipe for..."
          variant="outlined"
          sx={{width: "80%"}}
        />
        <Button variant="contained" sx={{
          color: 'white', height: '100%', marginLeft: '1rem', backgroundColor:"secondary.main"}}><AutoFixHighIcon/></Button>
      </Grid>
      <Grid container item justifyContent="center" px={16}>
        <Recipes />
      </Grid>
    </Grid>
  );
};
export default Sustainaplate;
