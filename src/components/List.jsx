import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Grid, TextField } from "@mui/material";
import Recipes from "./Recipes";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex', 'z-index': '0' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar style={{"height": "7rem"}}/>
        <FormGroup>
        <h3>My Shopping List</h3>
          {['Milk', 'Eggs', 'Butter', 'Cinnamon'].map((text, index) => (
                <FormControlLabel control={<Checkbox key={text} defaultChecked/>} label={text} />
          ))}
        <Button variant="contained" sx={{
          color: 'white' }}>Add Items to Cart</Button>
        </FormGroup>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
            <Grid container item justifyContent="center" p={10}>
                <Recipes />
            </Grid>
      </Box>
    </Box>
  );
}