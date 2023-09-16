import {useEffect} from "react";
import { ImageList, useMediaQuery } from "@mui/material";
import Recipe from "./Recipe";
import { theme } from "../utils/theme";

const Recipes = ({recipesData}) => {

  useEffect(() => {}, [recipesData])

  const mobileBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <ImageList cols={mobileBreakpoint ? 3 : 1} gap={20}>
      {recipesData?.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </ImageList>
  );
};
export default Recipes;
