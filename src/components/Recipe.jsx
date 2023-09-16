import { ImageListItem, ImageListItemBar } from "@mui/material";

const Recipe = ({ recipe }) => {
  return (
    <ImageListItem key={recipe.image}>
      <img
        src={`${recipe.image}?w=248&fit=crop&auto=format`}
        srcSet={`${recipe.ImageList}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={recipe.title}
        loading="lazy"
      />
      <ImageListItemBar title={recipe.title} position="below" />
    </ImageListItem>
  );
};
export default Recipe;
