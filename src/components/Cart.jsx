import './main.scss';
import {Grid, Stack, Typography, Card, CardHeader, Button, Checkbox, FormGroup, FormControlLabel} from "@mui/material";

const Cart = ({shoppingCart, toggleCheckoutModal}) => {
    return (
        <Grid xs={3} className={'shopping_cart_aside'}>
            <Stack>
                <Stack mb={2}>
                    <Typography variant="h2" component="h2">
                        Shopping Cart
                    </Typography>

                        <a href={"#"}>
                            <Typography
                                variant="subtitle2"
                                component="a"onClick={() => {
                                    toggleCheckoutModal()
                                }}
                            >
                            View delivery dates
                            </Typography>
                        </a>
                </Stack>

                <Stack>
                    {
                        shoppingCart.map(o => {
                            return (
                                
                                    <FormGroup key={o.id}>
                                        <FormControlLabel control={<Checkbox key={o.id} defaultChecked/>} label={o.name} />
                                    </FormGroup>                                        
                               
                            )
                        })
                    }
                </Stack>
            </Stack>

            <Button variant="contained"
                    sx={{ width: '100%', color: 'white', marginTop: '1rem' }}
            >
                To checkout
            </Button>
        </Grid>
    )
}

export default Cart;