import './main.scss';
import {
    Grid,
    Stack,
    Typography,
    Card,
    CardHeader,
    Button,
    IconButton
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = ({shoppingCart, toggleCheckoutModal, setShoppingCart}) => {
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
                                component="a"
                                onClick={() => {
                                    toggleCheckoutModal()
                                }}
                            >
                            View delivery dates
                            </Typography>
                        </a>
                </Stack>

                <Stack>
                    {
                        Object.keys(shoppingCart).map(o => {
                            return (
                                <Card key={o} style={{marginBottom: '.5rem'}}>
                                    <Grid>
                                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                            <CardHeader title={o} />
                                            <div>
                                                <Stack direction={'row'} alignItems={'center'} >
                                                    <div>
                                                        <IconButton color="primary" onClick={() => {
                                                            setShoppingCart((state) => {
                                                                if (state[o] - 1 === 0) {
                                                                    const updatedState = { ...state };
                                                                    delete updatedState[o];
                                                                    return updatedState;
                                                                } else {
                                                                    return Object.assign({}, state, {
                                                                        [o]: state[o] - 1
                                                                    });
                                                                }
                                                            })
                                                        }}>
                                                            <RemoveIcon />
                                                        </IconButton>
                                                    </div>
                                                    <div>
                                                        {shoppingCart[o]}
                                                    </div>
                                                    <div>
                                                        <IconButton color="primary" onClick={() => {
                                                            setShoppingCart((state) => {
                                                                return Object.assign({}, state, {
                                                                    [o]: state[o] + 1
                                                                })
                                                            })
                                                        }}>
                                                            <AddIcon />
                                                        </IconButton>
                                                    </div>
                                                </Stack>

                                            </div>
                                        </Stack>

                                    </Grid>
                                </Card>
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