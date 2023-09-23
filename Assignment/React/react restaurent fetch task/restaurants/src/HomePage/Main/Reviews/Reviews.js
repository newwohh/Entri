import * as React from "react";
import { Paper, Typography, Button, Rating, createTheme } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import BasicRating from "./../Rating";

import "./review.css";

const font = "'Charm'";

const theme = createTheme({
  typography: {
    fontFamily: font,
  },
});

const Reviews = (props) => (
  <Carousel className="x">
    {/* Change above line to <> and it works, maybe some issues in carousel */}
    <Paper>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "monospace",
          fontSize: 20,
          textDecoration: "underline",
        }}
      >
        {props.data[0].name}
      </Typography>
      <Typography variant="p" sx={{ fontFamily: font, fontSize: 20 }}>
        {props.data[0].comments}
      </Typography>
      <BasicRating rating={props.data[0].rating} />
    </Paper>
    <Paper>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "monospace",
          fontSize: 20,
          textDecoration: "underline",
        }}
      >
        {props.data[1].name}
      </Typography>
      <Typography variant="p" sx={{ fontFamily: font, fontSize: 20 }}>
        {props.data[1].comments}
      </Typography>
      <BasicRating rating={props.data[1].rating} />
    </Paper>
    <Paper>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "monospace",
          fontSize: 20,
          textDecoration: "underline",
        }}
      >
        {props.data[2].name}
      </Typography>
      <Typography variant="p" sx={{ fontFamily: font, fontSize: 20 }}>
        {props.data[2].comments}
      </Typography>
      <BasicRating rating={props.data[2].rating} />
    </Paper>
  </Carousel>
);

export default Reviews;
