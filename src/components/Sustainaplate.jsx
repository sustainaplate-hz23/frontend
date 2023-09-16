import { Grid, TextField, CircularProgress } from "@mui/material";
import Recipes from "./Recipes";
import axios from "axios";
import Button from "@mui/material/Button";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { useState } from "react";

const Sustainaplate = () => {
  const [promptInput, setPromptInput] = useState("");
  const [recipesData, setRecipesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setRecipesData([]);

    let apiUrl = `http://34.65.31.171:8080/recipes_free_text`;
    setIsLoading(true);

    let finalPrompt = promptInput;
    let promptPrefix = "I want a recipe with ";
    if (promptInput.split(' ').length <= 3) {
        finalPrompt = `${promptPrefix}${promptInput}`;
    }

    axios
      .post(apiUrl, {
        text_input: finalPrompt
          // "I'm looking for a vegetarian dinner with onions, carrots and tomatoes",
      })
      .then((response) => {
          console.log(response.data);
        setRecipesData(response.data);
      })
      .catch((error) => {
        console.log(error); // handle any errors
      }).finally(() => {
          setIsLoading(false)
    })
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} textAlign="center">
        <TextField
            onChange={(e) => {
                setPromptInput(e.target.value);
            }}
            value={promptInput}
          label="Give a recipe for..."
          variant="outlined"
          sx={{ width: "80%" }}
        />
        <Button
          variant="contained"
          disabled={promptInput === ""}
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
          {isLoading ? (<div style={{marginTop: '2rem'}}><CircularProgress /></div>) : <Recipes recipesData={recipesData} />}
      </Grid>
    </Grid>
  );
};
export default Sustainaplate;
