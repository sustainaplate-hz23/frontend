import * as React from "react";
import Sustainaplate from "./Sustainaplate";
import logo from "../assets/Logo-Sustainaplate.png";
import { Grid, ListItemSecondaryAction } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex", "z-index": "0" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar style={{ height: "7rem" }} />
        <FormGroup>
          <h3>My Shopping List</h3>
          {["Milk", "Eggs", "Butter", "Cinnamon"].map((text, index) => (
            <FormControlLabel
              control={<Checkbox key={text} defaultChecked />}
              label={text}
            />
          ))}
          <Button
            variant="contained"
            sx={{
              color: "white",
            }}
          >
            Add Items to Cart
          </Button>
        </FormGroup>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <h1 style={{ "margin-top": 0 }}>Sustainaplate</h1>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <img src={logo} alt="Sustainaplate Logo" loading="lazy" />
          </Grid>
          <Grid item xs={6} md={8}>
            <strong>
              Sustainaplate is your sustainability-minded culinary companion.
              Discover recipes tailored to your ingredients, dietary
              preferences, or desired dish. Easily create shopping lists for
              your next grocery run or order ingredients online—all while
              keeping sustainability at the forefront, empowering you to make
              eco-friendly choices. It's your ultimate destination for
              effortless, environmentally-conscious cooking and shopping.
            </strong>
          </Grid>
        </Grid>
        <Sustainaplate />
      </Box>
    </Box>
  );
}
