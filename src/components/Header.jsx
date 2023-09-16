import {
  Avatar,
  Grid,
  AppBar,
  Tab,
  Popover,
  List,
  ListItem,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import logo from "../assets/migros_logo.jpg";
import { useState } from "react";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

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
        <Grid container item xs={10} spacing={2}>
          <Grid item>
            <img src={logo} alt="Migros Logo" height="50vh" />
          </Grid>
          <Grid item>
            <TextField label="Search for a product..." variant="filled" />
          </Grid>
          <Grid item>
            <Tab
              label={<Typography variant="h5">Homepage</Typography>}
              value="1"
            />
            <Tab
              label={<Typography variant="h5">Offers</Typography>}
              value="2"
            />
            <Tab
              label={<Typography variant="h5">Organic</Typography>}
              value="3"
            />
            <Tab
              label={<Typography variant="h5">My products</Typography>}
              value="4"
            />
            <Tab
              label={
                <Typography variant="h5" color="secondary.main">
                  Sustainaplate
                </Typography>
              }
              value="5"
            />
          </Grid>
        </Grid>
        <Grid item textAlign="end">
          <Avatar
            onClick={handleClickAccount}
            sx={{
              color: "primary.main",
              backgroundColor: "common.white",
              border: "2px solid lightgrey",
            }}
          >
            <PermIdentityOutlinedIcon />
          </Avatar>
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
            <ListItem>
              <Button variant="text" sx={{ color: "black", fontWeight: 800 }}>
                Natayra Santos
              </Button>
            </ListItem>
            <ListItem>
              <Button variant="text" sx={{ color: "black", fontWeight: 800 }}>
                BUY ONLINE
              </Button>
            </ListItem>
            <ListItem>
              <Button variant="text" sx={{ color: "black" }}>
                Orders
              </Button>
            </ListItem>
            <ListItem>
              <Button variant="text" sx={{ color: "black" }}>
                Shopping List
              </Button>
            </ListItem>
            <ListItem>
              <Button variant="text" sx={{ color: "black" }}>
                Cumulus Coupons
              </Button>
            </ListItem>
            <ListItem>
              <Button variant="text" sx={{ color: "black" }}>
                Credit
              </Button>
            </ListItem>
            <ListItem>
              <Button variant="text" sx={{ color: "black" }}>
                Newsletter
              </Button>
            </ListItem>
          </List>
        </Popover>
      </Grid>
    </AppBar>
  );
};
export default Header;
