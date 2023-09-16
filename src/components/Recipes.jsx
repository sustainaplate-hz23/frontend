import { ImageList, useMediaQuery } from "@mui/material";
import Recipe from "./Recipe";
import { theme } from "../utils/theme";
import {recipes} from "../utils/recipes";

const Recipes = () => {
  const mobileBreakpoint = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ImageList cols={mobileBreakpoint ? 3 : 1} gap={60}>
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} />
      ))}
    </ImageList>
  );
};
export default Recipes;
