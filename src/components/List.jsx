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

const drawerWidth = 240;


export default function PermanentDrawerLeft({toggleCheckoutModal,isCartAsideOpen}) {
    const [shoppingCart, setShoppingCard] = useState([
        {
            id: 1,
            name: "Alpenbrot",
        },
    ]);

  return (
    <Box sx={{ display: "flex", "z-index": "0" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar style={{ height: "7rem" }} />
        <FormGroup>
            <div className={'ingredients_list'}>
                <h3>My Shopping List</h3>
                {['Milk', 'Eggs', 'Butter', 'Cinnamon'].map((text, index) => (
                    <FormControlLabel key={index} control={<Checkbox key={text} defaultChecked/>} label={text} />
                ))}
                <Button variant="contained" sx={{
                    color: 'white' }}>Add Items to Cart</Button>
            </div>
        </FormGroup>
      </Drawer>

        <Grid xs={isCartAsideOpen ? 9 : 12}>
            <Stack style={{"padding": "1rem"}}>
                <h1
                    style={{"marginTop": 0}}
                >
                    Sustainaplate
                </h1>

                <Grid container spacing={2} pb={3}>
                    <Grid item xs={6} md={4}>
                        <img
                            className={'main_logo'}
                            src= {logo}
                            alt="Sustainaplate Logo"
                            loading="lazy"
                        />
                    </Grid>
                    <Grid item xs={6} md={8}>
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