import {Grid, TextField, CircularProgress, Stack} from "@mui/material";
import axios from "axios";
import Button from "@mui/material/Button";
import { useState } from "react";
import Header from "./Header";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import './main.scss';

const Lucky = () => {
  const [promptInput, setPromptInput] = useState("");
    const [recipeData, setRecipeData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
      setRecipeData("");

    let apiUrl = `http://34.65.31.171:8080/feeling_lucky`;
    setIsLoading(true);

    let finalPrompt = promptInput;
    let promptPrefix = "I want a recipe with ";
    if (promptInput.split(' ').length <= 3) {
        finalPrompt = `${promptPrefix}${promptInput}`;
    }

    axios
      .post(apiUrl, {
        text_input: finalPrompt
      })
      .then((response) => {
        setRecipeData(response.data.generated_text);
      })
      .catch((error) => {
        console.log(error); // handle any errors
      }).finally(() => {
          setIsLoading(false)
    })
  };

  return (
      <>
        <Header />
        <Grid container>
          <Grid xs={12} mt={3} pl={3}>
              <Stack direction={'row'} alignItems={'center'}>
              <TextField
                  onChange={(e) => {
                      setPromptInput(e.target.value);
                  }}
                  value={promptInput}
                  onKeyPress={(ev) => {
                      if (ev.key === 'Enter' && promptInput !== "") {
                          handleClick(ev)
                      }
                  }}
                  label="Give a recipe for..."
                  variant="outlined"
                  style={{ width: "100%" }}
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
              </Stack>
          </Grid>

            <Grid xs={12}>
                {
                    isLoading ? (<div style={{marginTop: '2rem'}}><CircularProgress /></div>) : (<div className={'genai_box'}>
                        {recipeData}
                    </div>)
                }
            </Grid>

        </Grid>



      </>

  );
};
export default Lucky;
