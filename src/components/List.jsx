import {useState} from 'react';
import Sustainaplate from "./Sustainaplate";
import logo from "../assets/Logo-Sustainaplate.png"
import { Grid, Stack, Box } from "@mui/material";
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
    <Box sx={{ display: "flex", "z-index": "0" }}>
        <Grid xs={isCartAsideOpen ? 9 : 12}>
            <Stack style={{"padding": "3rem"}}>
                <h1
                    style={{"marginTop": 0}}
                >
                    Sustainaplate
                </h1>
                <Grid container spacing={6} pb={4} ml={.5}>
                    <Grid item xs={2} md={3}>
                        <img
                            className={'main_logo'}
                            src= {logo}
                            alt="Sustainaplate Logo"
                            loading="lazy"
                            max-width="100%"
                            height="auto"
                        />
                    </Grid>
                    <Grid item xs={6} md={6} mt={5}>
                        <strong>Sustainaplate is your sustainability-minded culinary companion. Discover recipes tailored to your ingredients, dietary preferences, or desired dish. Easily create shopping lists for your next grocery run or order ingredients online—all while keeping sustainability at the forefront, empowering you to make eco-friendly choices. It's your ultimate destination for effortless, environmentally-conscious cooking and shopping.</strong>
                    </Grid>
                </Grid>

                <Sustainaplate setShoppingCart={setShoppingCart} />
            </Stack>
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