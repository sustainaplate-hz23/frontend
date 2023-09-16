import {Modal, Box, Stack, Grid} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 'calc(100% - 150px)',
    bgcolor: 'background.paper',
    border: '1px solid #f4f4f4',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

const CheckoutModal = ({isOpen, handleClose}) => {
    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Stack>
                    <h1>
                        Information about the delivery
                    </h1>
                    <h3>
                        Delivery times for Halle 550, Zurich
                    </h3>

                    <Grid>

                    </Grid>
                </Stack>
            </Box>
        </Modal>
    )
}

export default CheckoutModal;