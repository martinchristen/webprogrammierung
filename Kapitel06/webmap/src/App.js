import React from 'react';
import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline, Circle, CircleMarker } from 'react-leaflet'
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


function App() {

  React.useEffect(() => {
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
  }, []);


  var openstreetmap = (<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
/>);

  var swisstopo = (<TileLayer url="https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg"
                  attribution='&copy; swisstopo' ></TileLayer>
  )

  const KKW = [{
      name: "Kernkraftwerk Mühleberg",
      pos: [46.968872773, 7.268042402],
      construction: "01.03.1967 - 30.06.1971",
    },
    {
      name: "Kernkraftwerk Gösgen",
      pos: [47.366075562, 7.966750757],
      construction: "01.12.1973 - 01.02.1979",
    },
    {
      name: "Kernkraftwerk Beznau",
      pos: [47.552019433, 8.228391684],
      construction: "01.09.1965 - 16.07.1969 (Beznau 1)<br/>01.01.1968 - 22.10.1971 (Beznau 2)"
    },
    {
      name: "Kernkraftwerk Leibstadt",
      pos: [47.601455367, 8.182823992],
      construction: "01.01.1974 - 23.05.1984",
    }
  
];

  const blackpaper = {backgroundColor: "black",
  color: "white",
  margin: 5,
  padding: 4};

  const filloptions = {fillcolor: 'red'};

return (
  <>
  <AppBar position='sticky' color="primary" style={{padding: 1}}>
    <Toolbar>
      <Grid container justifyContent="flex-start">
        <Typography variant="h3">Kernkraftwerke der Schweiz</Typography>
      </Grid>
    </Toolbar>
  </AppBar>

  <Grid container>
    <Grid item xs={12} md={3}>
      <Paper style={blackpaper}>
      <Typography variant="h6">Infos</Typography>
      <Typography>
        Jodtabletten werden alle zehn Jahre an Schweizer Haushalte und Betriebe (inklusive Schulen, Kindergärten und KITAs) abgegeben, die im Umkreis von 50 km eines Schweizer KKW liegen.
      </Typography>
      </Paper>
    </Grid>
    <Grid item xs={12} md={9}>
      <MapContainer center={[47.5349, 7.6416]} zoom={10} scrollWheelZoom={true} >
      
      {openstreetmap}

        {KKW.map(item => (
          <>
          <Marker position={item.pos}>
            <Popup>
              {item.name}
            </Popup>
          </Marker>
          <Circle center={item.pos} pathOptions={filloptions} radius={50000} />
          </>
        ))}
        </MapContainer>
      </Grid>
    </Grid>
   </>
  );
}

export default App;