import { Typography } from "@mui/material";
import MiniDrawer from "./../Drawer/Drawer";
// import "./conatct.css";

const AboutUs = () => {
  return (
    <div className="p">
      <MiniDrawer />
      <Typography variant="h4" sx={{ color: "#85586F" }}>
        About Us
      </Typography>
      <Typography variant="h6" sx={{ color: "#665A48" }}>
        Welcome to Flavor, the culinary destination for food lovers around the
        globe. Founded in 2021 by Nevin Raju, our mission is to explore the
        world's diverse cuisines and bring the best of them to your plate. Nevin
        Raju, a New York-based entrepreneur with a passion for food, envisioned
        a website that would serve as a hub for food lovers to discover and
        explore new flavors. With his years of experience in the food industry
        and a team of passionate writers, chefs, and foodies, Flavor was born.
        Our team of experts curates the best recipes, food trends, and culinary
        experiences from around the world to bring you the ultimate foodie
        experience. From Michelin-starred restaurants to hidden local gems, we
        strive to showcase the unique flavors and stories behind each dish. At
        Flavor, we believe that food is more than just sustenance – it's an
        experience that brings people together. We celebrate diversity in all
        its forms, whether it's through the ingredients in our recipes or the
        stories behind the chefs who create them. We are proud to be based in
        New York City, a melting pot of cultures and cuisines. Our team is
        always on the lookout for the latest food trends and exciting new
        restaurants to share with our readers. Thank you for joining us on this
        culinary journey. We hope that our website inspires you to try new
        flavors and explore the world through food.
      </Typography>
    </div>
  );
};

export default AboutUs;
