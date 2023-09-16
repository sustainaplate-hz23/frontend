import {
  Card,
  ImageListItem,
  ImageListItemBar,
  Modal,
  Typography,
  Grid,
} from "@mui/material";
import { useState } from "react";
import recipe1 from "../assets/recipe1.jpg";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";

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
      >
        <Card>
          <Grid container>
            <Grid container item>
              <Grid item>
                <img src={recipe1} />
              </Grid>
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
                <Typography>
                  <StarOutlinedIcon />
                  <StarOutlinedIcon />
                  <StarOutlinedIcon />
                  <StarOutlinedIcon />
                  <StarHalfOutlinedIcon />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Modal>
    </>
  );
};
export default Recipe;
