import { Grid, TextField } from "@mui/material";
import Recipes from "./Recipes";
import axios from "axios";
import Button from "@mui/material/Button";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { useState } from "react";

const Sustainaplate = () => {
  const [recipesData, setRecipesData] = useState([]);
  const handleClick = (event) => {
    event.preventDefault();

    let apiUrl = `http://34.65.31.171:8080/recipes`;
    axios
      .post(apiUrl, {
        ingredients: ["apple"],
      })
      .then((response) => {
        setRecipesData(response.data);
      })
      .catch((error) => {
        console.log(error); // handle any errors
      });
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} textAlign="center">
        <TextField
          label="Give a recipe for..."
          variant="outlined"
          sx={{ width: "80%" }}
        />
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            color: "white",
            height: "100%",
            marginLeft: "1rem",
            backgroundColor: "secondary.main",
          }}
        >
          <AutoFixHighIcon />
        </Button>
      </Grid>
      <Grid container item justifyContent="center">
        <Recipes recipesData={recipesData?.recipes} />
      </Grid>
    </Grid>
  );
};
export default Sustainaplate;
