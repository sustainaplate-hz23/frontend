import {
  Card,
  ImageListItem,
  ImageListItemBar,
  Modal,
  Typography,
  Grid,
  Chip,
  FormControlLabel,
  Checkbox,
  ListItem,
  FormGroup,
  Button,
  List,
  Stack,
} from "@mui/material";
import { useState } from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import image_bank from '../utils/images_bank.json';
import './main.scss';

const calcSustainValue = (score, max) => {
  return ((1 - (score / max)) * 5).toFixed(2);
}

const getSustainColors = (value) => {
  if (value < 1) {
    return {bg: "#da1e28", color: "#fff"}
  } else if(value < 2.5) {
    return {bg: "#ff832b", color: "#000"}
  } else if (value < 3.5) {
    return {bg: "#f1c21b", color: "#000"}
  } else {
    return {bg: "#24a148", color: "#fff"}
  }
}

const renderSustainStar = (value) => {

  function roundToHalf(number) {
    // Multiply the number by 2 to work with halves
    const multipliedNumber = number * 2;

    // Round to the nearest whole number
    const roundedNumber = Math.round(multipliedNumber);

    // Divide by 2 to get back to halves
    return roundedNumber / 2;
  }

  function renderStarRating(rating) {
    const fullStars = Math.floor(rating); // Get the number of full stars (3 in this case)
    const hasHalfStar = rating - fullStars >= 0.5; // Check if there is a half star (true in this case)

    let ratingHTML = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      ratingHTML.push(<StarOutlinedIcon />); // Add a full star character
    }

    // Render half star if needed
    if (hasHalfStar) {
      ratingHTML.push(<StarHalfOutlinedIcon />); // Add a half star character
    }

    // Render empty stars to reach a total of 5 stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      ratingHTML.push(<StarBorderIcon />); // Add an empty star character
    }

    return ratingHTML;
  }

  const stars = roundToHalf(value);
  return renderStarRating(stars);
}

const Recipe = (props) => {
  const recipe = props.recipe.recipe_info;
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const sustainValue = calcSustainValue(props?.recipe?.sustainability_score, props.maxSustainValue);

  console.log(recipe);

  return (
    <>
      <ImageListItem
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          padding: 2,
          borderRadius: 2,
          textDecoration: "none",
          overflow: "auto",
          color: "common.black",
          "&:hover": { color: "primary.main", cursor: "pointer" },
        }}
        onClick={() => setOpen(true)}
      >
        {
          recipe.name in image_bank ? (
                <img
                    src={image_bank[recipe.name]}
                    alt={recipe.title}
                    loading="lazy"
                />
            ) :
              (
                  <img
                      src={image_bank["generic-food-bg"]}
                      alt={recipe.title}
                      loading="lazy"
                  />
              )
        }


        <ImageListItemBar
          title={
            <Typography variant="h2" sx={{ wordWrap: "break-word" }}>
              {recipe?.name}
            </Typography>
          }
          position="below"
          sx={{ marginTop: 2, textTransform: "capitalize" }}
        />

        <Stack direction={'row'} justifyContent={'space-between'}>
          <div>
            Sustainability:
          </div>
          <Grid item>
            {
              renderSustainStar(sustainValue)
            }
          </Grid>
        </Stack>


      </ImageListItem>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflow: "scroll" }}
      >
        <Card sx={{ margin: 8, padding: 5, height: "fit-contact" }}>
          <Grid container>
            <Grid container item>
              <Grid item xs={5.5} ml={2} my={2}>
                {
                  recipe.name in image_bank ? (
                        <img src={image_bank[recipe.name]} width="90%" />
                    ) :
                      (
                          <img src={image_bank["generic-food-bg"]} width="90%" />
                      )
                }

              </Grid>
              <Grid container item xs={6} flexDirection="column">
                <Grid item>
                  <Stack direction="row" spacing={2} justifyContent={'space-between'}>
                  <Typography
                    variant="h1"
                    sx={{
                      wordWrap: "break-word",
                      marginTop: 2,
                      textTransform: "capitalize",
                    }}
                  >
                    {recipe?.name}
                  </Typography>
                    <div className={'sustain_box'}
                         style={{backgroundColor: getSustainColors(sustainValue).bg,
                           color: getSustainColors(sustainValue).color
                         }}
                    >
                      <div className={'header'}
                      >Sustainability Rating:</div>
                      <div className={'content'}>
                       {sustainValue}
                      </div>
                    </div>
                  </Stack>
                </Grid>
                <Grid container item>
                  <Grid item>
                    <TimerOutlinedIcon />
                  </Grid>
                  <Grid item>
                    <Typography variant="h2" mt={0.5} ml={0.5} fontWeight="400">
                      {recipe?.minutes_to_cook} minutes
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  {recipe?.tags.slice(0, 5).map((tag) => (
                    <Chip key={tag} label={tag} />
                  ))}
                </Grid>

                <Grid
                  item
                  p={2}
                  mt={2}
                  sx={{
                    border: "1px solid lightgrey",
                  }}
                >
                    <Typography variant="h3">{recipe?.description.charAt(0).toUpperCase() + recipe?.description.slice(1)}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item mt={5}>
              <Grid container item xs={5.5} flexDirection="column" ml={2}>
                <Grid item>
                  <Typography variant="h1">Ingredients</Typography>
                </Grid>
                <Grid item mt={3}>
                  <FormGroup>
                    {recipe?.ingredients.map((text) => (
                      <FormControlLabel
                        control={<Checkbox key={text} defaultChecked />}
                        label={<Typography>{text.charAt(0).toUpperCase() + text.slice(1)}</Typography>}
                      />
                    ))}
                  </FormGroup>
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      marginTop: 3,
                    }}
                  >
                    Add Items to Cart
                  </Button>
                </Grid>
              </Grid>
              <Grid container item xs={5.5} flexDirection="column">
                <Grid item>
                  <Typography variant="h1">That's how it's done</Typography>
                </Grid>
                <Grid item>
                  <List>
                    {recipe?.steps.map((step) => (
                      <ListItem>
                        - {step.charAt(0).toUpperCase() + step.slice(1)}
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Modal>
    </>
  );
};
export default Recipe;
