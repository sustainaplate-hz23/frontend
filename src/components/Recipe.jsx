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
} from "@mui/material";
import { useState } from "react";
import recipe1 from "../assets/recipe1.jpg";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";

const Recipe = (props) => {
  const recipe = props.recipe.recipe_info;
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
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
        {/*<img
        src={`${recipe.image}?w=248&fit=crop&auto=format`}
        srcSet={`${recipe.ImageList}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={recipe.title}
        loading="lazy"
      />*/}

        <ImageListItemBar
          title={
            <Typography variant="h2" sx={{ wordWrap: "break-word" }}>
              {recipe?.name}
            </Typography>
          }
          position="below"
          sx={{ marginTop: 2, textTransform: "capitalize" }}
        />
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
                <img src={recipe1} width="90%" />
              </Grid>
              <Grid container item xs={6} flexDirection="column">
                <Grid item>
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
                </Grid>
                <Grid item>
                  <Typography>
                    <StarOutlinedIcon />
                    <StarOutlinedIcon />
                    <StarOutlinedIcon />
                    <StarOutlinedIcon />
                    <StarHalfOutlinedIcon />
                  </Typography>
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
                    <Chip label={tag} />
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
