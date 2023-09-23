import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import "./card.css";

export default function RecipeReviewCard(props) {
  return (
    <Card sx={{ maxWidth: 345, border: 10, borderColor: "#E3BEC6" }}>
      <CardHeader
        title={
          <Link className="y" to={`/restaurants/${props.index}`}>
            {props.data.name}
          </Link>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={props.data.photograph}
        alt={props.data.name}
        key={props.data.id}
      />
    </Card>
  );
}
