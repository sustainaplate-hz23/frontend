import './main.scss';
import {Grid, Stack, Typography, Card, CardHeader, Button} from "@mui/material";

const Cart = ({shoppingCart, toggleCheckoutModal}) => {
    return (
        <Grid xs={3} className={'shopping_cart_aside'}>
            <Stack>
                <Stack mb={2}>
                    <Typography variant="h2" component="h2">
                        Shopping Cart
                    </Typography>

                        <a href={"#"}>
                            <Typography variant="subtitle2" component="a">
                            View delivery dates
                            </Typography>
                        </a>
                </Stack>

                <Stack>
                    {
                        shoppingCart.map(o => {
                            return (
                                <Card key={o.id} style={{marginBottom: '.5rem'}}>
                                    <CardHeader
                                        title={o.name}
                                        subheader=""
                                    />
                                </Card>
                            )
                        })
                    }
                </Stack>
            </Stack>

            <Button variant="contained"
                    onClick={() => {
                        toggleCheckoutModal()
                    }}
                    sx={{ width: '100%', color: 'white' }}
            >
                To checkout
            </Button>
        </Grid>
    )
}

export default Cart;