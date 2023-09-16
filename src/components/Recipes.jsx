import { ImageList, useMediaQuery } from "@mui/material";
import Recipe from "./Recipe";
import recipe1 from "../assets/recipe1.jpg";
import recipe2 from "../assets/recipe2.webp";
import recipe3 from "../assets/recipe3.jpeg";
import recipe4 from "../assets/recipe4.jpg";
import recipe5 from "../assets/recipe5.jpg";
import recipe6 from "../assets/recipe6.jpg";
import { theme } from "../utils/theme";

const recipes = [
  {
    title: "First Recipe",
    image: recipe1,
  },
  {
    title: "Second Recipe",
    image: recipe2,
  },
  {
    title: "Third Recipe",
    image: recipe3,
  },
  {
    title: "Fourth Recipe",
    image: recipe4,
  },
  {
    title: "Fifth Recipe",
    image: recipe5,
  },
  {
    title: "Recipe Six",
    image: recipe6,
  },
];

const Recipes = () => {
  const mobileBreakpoint = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ImageList cols={mobileBreakpoint ? 3 : 1} gap={80}>
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} />
      ))}
    </ImageList>
  );
};
export default Recipes;
