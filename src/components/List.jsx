import {useState} from 'react';
import Sustainaplate from "./Sustainaplate";
import logo from "../assets/Logo-Sustainaplate.png"
import { Grid, Stack, Box, Typography } from "@mui/material";
import './main.scss';
import Cart from './Cart';


export default function PermanentDrawerLeft({toggleCheckoutModal,isCartAsideOpen}) {
    const [shoppingCart, setShoppingCart] = useState({
        "milk": 1,
        "eggs": 1,
        "banana": 1,
        "cinnamon": 1,
    });

  return (
    <Box sx={{ display: "flex" }}>
      <Grid container m={5} justifyContent="center">
        <Grid container item justifyContent="center" alignItems="center">
          <Grid item textAlign="right" sx={{ marginBottom: 2 }}>
            <img src={logo} alt="Sustainaplate Logo" width="70px" />
          </Grid>
          <Grid item>
            <Typography variant="h1" textAlign="center">
              Sustainaplate
            </Typography>
          </Grid>
        </Grid>
        <Grid item mt={2} textAlign="center" xs={10} mb={10}>
          <Typography
            variant="h2"
            textAlign="justify"
            sx={{ color: "grey.700" }}
          >
            Sustainaplate is your sustainability-minded culinary companion.
            Discover recipes tailored to your ingredients, dietary preferences,
            or desired dish. Easily create shopping lists for your next grocery
            run or order ingredients online—all while keeping sustainability at
            the forefront, empowering you to make eco-friendly choices. It's
            your ultimate destination for effortless, environmentally-conscious
            cooking and shopping.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Sustainaplate />
        </Grid>
      </Grid>

        {
            isCartAsideOpen && (
                <Cart
                    setShoppingCart={setShoppingCart}
                    shoppingCart={shoppingCart}
                    toggleCheckoutModal={toggleCheckoutModal}
                />
            )
        }

    </Box>
  );
}