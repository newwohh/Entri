import { useParams } from "react-router-dom";

import Card from "@mui/material/Card";
import MiniDrawer from "./../Drawer/Drawer";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./resView.css";
import Typography from "@mui/material/Typography";
import Reviews from "../Reviews/Reviews";
import DenseTable from "../OpeningHours/OpeningHours";
import Maps from "../Map/Maps";
import { createTheme } from "@mui/material";
import { useEffect } from "react";

let restaurants = require("./../Reastaurants/restaurants.json");

export default function RestaurantView() {
  var id = useParams().id;

  const font = "'Sacramento'";

  // function adds() {
  //   fetch("demo.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }
  // adds();

  const theme = createTheme({
    typography: {
      fontFamily: font,
    },
  });

  return (
    <div className="a">
      <Card sx={{ width: 1000, textAlign: "center" }} className="b">
        <CardMedia
          component="img"
          alt="green iguana"
          height="740"
          image={restaurants.restaurants[id].photograph}
        />
        <CardContent s>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: "cursive" }}
          >
            {restaurants.restaurants[id].name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cuisine Type: {restaurants.restaurants[id].cuisine_type}
          </Typography>
          <Typography gutterBottom variant="h6" sx={{ fontFamily: "cursive" }}>
            {restaurants.restaurants[id].address}
          </Typography>
        </CardContent>
        <Typography
          gutterBottom
          variant="h5"
          className="q"
          sx={{ fontFamily: font, color: "#65647C" }}
        >
          Opening Hours
        </Typography>
        <DenseTable
          operatingHours={restaurants.restaurants[id].operating_hours}
        />
        <Maps
          lat={restaurants.restaurants[id].latlng.lat}
          lng={restaurants.restaurants[id].latlng.lng}
        />
        <Typography
          gutterBottom
          variant="h4"
          sx={{
            fontFamily: font,
            color: "#65647C",
            fontSize: 50,
            fontWeight: 1000,
          }}
        >
          Reviews
        </Typography>
        <Reviews data={restaurants.restaurants[id].reviews} />
      </Card>
    </div>
  );
}
