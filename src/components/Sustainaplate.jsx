import { Grid, TextField } from "@mui/material";
import Recipes from "./Recipes";
import axios from "axios";
import Button from '@mui/material/Button';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const Sustainaplate = () => {

  const handleClick = (event) => {
    event.preventDefault();

    let apiUrl = `http://34.65.31.171:8080/recipes`
    axios.post(apiUrl, {
      "ingredients": ["apple"]
      })
      .then(response => {
        console.log(response.data); // do something with the response data
      })
      .catch(error => {
        console.log(error); // handle any errors
      });
  };

  return (
    <Grid container justifyContent="center" my={2}>
      <Grid item xs={12} textAlign="center" my={5}>
        <TextField
          label="Give a recipe for..."
          variant="outlined"
          sx={{width: "80%"}}
        />
        <Button 
          variant="contained"
          onClick={handleClick}
          sx={{
          color: 'white', height: '100%', marginLeft: '1rem', backgroundColor:"secondary.main"}}><AutoFixHighIcon/></Button>
      </Grid>
      <Grid container item justifyContent="center" px={16}>
        <Recipes />
      </Grid>
    </Grid>
  );
};
export default Sustainaplate;
