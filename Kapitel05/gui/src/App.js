import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Umrechner from './Umrechner';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';



// xs sm md lg xl

function App() {

  const styledef = {
    backgroundColor: "#000000",
    color: "white",
    margin: 5,
    padding: 5,
  };

  const mygrid = (<Grid container>
  <Grid item xs={12} sm={6} md={3}>
    <Paper style={styledef}>Hello World 1</Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
    <Paper style={styledef}>Hello World 2</Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
    <Paper style={styledef}>
        <Typography align="right" variant="h3">Titel</Typography>
        <Typography align="center">Text bla bla bla. Dies ist effektiv
        kein Text. heute ist Freitag. Bla bla bla</Typography>
    </Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
    <Paper style={styledef}>
      <Typography align="center">Hello World 4. Heute regenet es leider.
        Dehalb habe ich meinen Regenschirm eingepackt. Dieser Text
        ist wirklich lang...
      </Typography>
      <Button variant="contained">Dies ist ein Button</Button>
    </Paper>
  </Grid>
</Grid>);


  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6">Umrechner Meter Kilometer</Typography>
        </Toolbar>

      </AppBar>

        <Umrechner />   
   
    </>
  );
}

export default App;

