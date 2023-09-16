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

    const getDeliveryDates = () => {
        const startDate = new Date('2023-09-14');
        const endDate = new Date('2023-09-22');

        // Initialize an empty array to store the formatted dates
        const formattedDates = [];

        // Create a loop to generate formatted dates between the start and end dates
        let currentDate = startDate;
        const options = { day: '2-digit', month: 'short' };

        while (currentDate <= endDate) {
            const formattedDate = currentDate.toLocaleDateString('en-US', options);
            formattedDates.push(formattedDate);

            // Increment the current date by one day
            currentDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
        }
        return formattedDates;
    }

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

                    <Grid mb={3}>
                        <div style={{display: 'flex'}}>
                        {getDeliveryDates().map( (o, i) => {
                            return (
                                <div key={i}
                                     style={{
                                         border: '1px solid black',
                                         padding: '1rem',
                                         borderRadius: '5px',
                                         marginRight: '3px'
                                     }}
                                >
                                    {o}
                                </div>
                            )
                            }
                        )}
                        </div>
                    </Grid>

                    <Stack>
                        <h2>Sustainable delivery</h2>

                    </Stack>
                </Stack>
            </Box>
        </Modal>
    )
}

export default CheckoutModal;