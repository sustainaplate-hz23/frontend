import { ImageList, useMediaQuery } from "@mui/material";
import Recipe from "./Recipe";
import { theme } from "../utils/theme";

const Recipes = (props) => {
  const mobileBreakpoint = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ImageList cols={mobileBreakpoint ? 3 : 1} gap={20}>
      {props?.recipesData?.map((recipe) => (
        <Recipe recipe={recipe} />
      ))}
    </ImageList>
  );
};
export default Recipes;
