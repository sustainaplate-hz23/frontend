import {Modal, Box, Stack, Popover} from "@mui/material";
import migrosbox from "../assets/Migros-box.png";

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

const SubscriptionModal = ({openSub, handleClose}) => {
    return (
        <Modal
            open={openSub}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

        <Box sx={style}>
            <Stack>
                <h1>
                    Subscription Options
                </h1>
            <img src={migrosbox} alt="Migros Subscription Box" height="50vh" />
            </Stack>

        </Box>
        </Modal>
    )
}

export default SubscriptionModal;