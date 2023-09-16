import { ImageListItem, ImageListItemBar } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Recipe = ({ recipe }) => {
  return (
    <ImageListItem
      key={recipe.image}
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        padding: 2,
        borderRadius: 2,
        textDecoration: "none",
        color: "common.black",
        "&:hover": { color: "primary.main" },
      }}
      to={`/recipe/${recipe.id}`}
      component={RouterLink}
    >
      <img
        src={`${recipe.image}?w=248&fit=crop&auto=format`}
        srcSet={`${recipe.ImageList}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={recipe.title}
        loading="lazy"
      />
      <ImageListItemBar
        title={recipe.title}
        position="below"
        sx={{ marginTop: 2 }}
      />
    </ImageListItem>
  );
};
export default Recipe;
