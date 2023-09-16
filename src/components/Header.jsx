import {
  Avatar,
  Grid,
  AppBar,
  Input,
  Tab,
  Popover,
  List,
  ListItem,
} from "@mui/material";
import logo from "../assets/migros_logo.jpg";
import { useState } from "react";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickAccount = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "common.white",
        boxShadow: "none",
        border: "1px solid lightgrey",
      }}
    >
      <Grid container justifyContent="space-between" p={3} alignItems="center">
        <Grid item>
          <img src={logo} alt="Migros Logo" height="50vh" />
        </Grid>
        <Grid item>
          <Input placeholder="Search Product" variant="outlined" />
        </Grid>
        <Grid item>
          <Tab label="Homepage" value="1" />
          <Tab label="Offers" value="2" />
          <Tab label="Organic" value="3" />
          <Tab label="My products" value="4" />
          <Tab label="Sustainaplate" value="5" />
        </Grid>
        <Grid item textAlign="end">
          <Avatar onClick={handleClickAccount} />
        </Grid>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <List>
            <ListItem>User Name</ListItem>
            <ListItem>Buy Online</ListItem>
            <ListItem>Orders</ListItem>
            <ListItem>Shopping List</ListItem>
            <ListItem>Cumulus Coupons</ListItem>
            <ListItem>Credit</ListItem>
            <ListItem>Newsletter</ListItem>
          </List>
        </Popover>
      </Grid>
    </AppBar>
  );
};
export default Header;
