import { Grid } from "@mui/material";
import Header from "./Header";
import List from "./List";
import {useState} from "react";
import CheckoutModal from "./CheckoutModal";


const Home = () => {
    const [isCartAsideOpen, setIsCartAsideOpen] = useState(false);
    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

    const toggleCart = () => {
        setIsCartAsideOpen(!isCartAsideOpen);
    }

    const toggleCheckoutModal = () => {
        setIsCheckoutModalOpen(!isCheckoutModalOpen);
    }

  return (
      <>
          <CheckoutModal
              handleClose={toggleCheckoutModal}
              isOpen={isCheckoutModalOpen}
          />
    <Grid container>
      <Header toggleCart={toggleCart}/>
      <List
          isCartAsideOpen={isCartAsideOpen}
          toggleCheckoutModal={toggleCheckoutModal}
      />
    </Grid>
      </>
  );
};
export default Home;
