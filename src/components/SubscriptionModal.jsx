import {Modal, Box, Button, Grid, Typography} from "@mui/material";
import migrosbox from "../assets/Migros-box.png";
import { theme } from "../utils/theme";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '1px solid #f4f4f4',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

const SubscriptionModal = ({openSub, handleClose}) => {
    return (
        <Modal
            open={openSub}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ overflow: "scroll"}}
        >

        <Box sx={style}>
            <Grid container alignItems="center" flexDirection="column">
                <Grid item textAlign="center">
                    <Typography variant="h1">
                        Subscription Options
                    </Typography>
                </Grid>
                <Grid item xs={6} md={6}>
                     <img src={migrosbox} alt="Migros Subscription Box" width="100%" margin-left="auto" margin-right="auto"/>
                </Grid>
                    <Grid item container gap={2} flexDirection="column" alignItems="center">
                    <Grid item container justifyContent="space-between" md={6} sx={{border: `2px solid ${theme.palette.primary.main}`, padding: "1rem", borderRadius : 2}}>
                        <Grid item>
                            <Typography variant="p">1 week</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="p">5.90/month</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h2">CHF 5.90</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container justifyContent="space-between" md={6} sx={{border: `2px solid ${theme.palette.grey[700]}`, padding: "1rem", borderRadius : 2}}>
                        <Grid item>
                            <Typography variant="p">2 weeks</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="p">5.00/week</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h2">CHF 10.00</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container justifyContent="space-between" md={6} sx={{border: `2px solid ${theme.palette.grey[700]}`, padding: "1rem", borderRadius : 2}}>
                        <Grid item>
                            <Typography variant="p">4 weeks</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="p">4.00/month</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h2">CHF 16.00</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button variant="contained" sx={{
                    color: 'white', marginTop: "1rem" }}>Subscribe to delivery pass</Button>
                </Grid>
                
            </Grid>
            

        </Box>
        </Modal>
    )
}

export default SubscriptionModal;