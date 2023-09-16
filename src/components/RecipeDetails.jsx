import { Grid } from "@mui/material";
import { recipes } from "../utils/recipes";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const recipeId = useParams();
  const recipe = recipes.filter((recipe) => recipe?.id === parseInt(recipeId?.recipeId));
  console.log(recipe[0]);
  return (
    <Grid container>
      <Grid container item xs={12}>
        <Grid item> Recipe Name</Grid>
        <Grid item> Recipe Name</Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item> Ingredients</Grid>
        <Grid item> Recipe Name</Grid>
      </Grid>
    </Grid>
  );
};
export default RecipeDetails;
