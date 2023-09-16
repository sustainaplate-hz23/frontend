import {useState} from 'react';
import Sustainaplate from "./Sustainaplate";
import logo from "../assets/Logo-Sustainaplate.png"
import { Grid, Stack, Box } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import './main.scss';
import Cart from './Cart';
import { CenterFocusStrong } from '@mui/icons-material';

const drawerWidth = 240;


export default function PermanentDrawerLeft({toggleCheckoutModal,isCartAsideOpen}) {
    const [shoppingCart, setShoppingCard] = useState([
        {
            id: 1,
            name: "Milk",
        },
        {
            id: 2,
            name: "Eggs",
        },
        {
            id: 3,
            name: "Banana",
        },
        {
            id: 4,
            name: "Cinnamon",
        }
    ]);

  return (
    <Box sx={{ display: "flex", "z-index": "0" }}>
        <Grid xs={isCartAsideOpen ? 9 : 12}>
            <Stack style={{"padding": "3rem"}}>
                <h1
                    style={{"margin-top": 0}}
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

                <Sustainaplate />
            </Stack>
        </Grid>

        {
            isCartAsideOpen && (
                <Cart
                    shoppingCart={shoppingCart}
                    toggleCheckoutModal={toggleCheckoutModal}
                />
            )
        }

    </Box>
  );
}