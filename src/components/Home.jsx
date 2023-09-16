import {  Grid } from "@mui/material";
import Header from "./Header";
import Sustainaplate from "./Sustainaplate";
import List from "./List";


const Home = () => {
  return (
    <Grid container>
      <Header />
      <List />
      <Sustainaplate />
    </Grid>
  );
};
export default Home;
