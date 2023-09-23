import { Typography } from "@mui/material";
import MiniDrawer from "./../Drawer/Drawer";
import "./conatct.css";

const ContactUs = () => {
  return (
    <div className="p">
      <MiniDrawer />
      <Typography variant="h4" sx={{ color: "#85586F" }}>
        Contact Us
      </Typography>
      <Typography variant="h6" sx={{ color: "#665A48" }}>
        Thank you for your interest in Flavor, the new website dedicated to
        bringing you the best in food and drink from around the world. If you
        have any questions, comments, or feedback, we'd love to hear from you!
        You can contact us by email at info@flavor.com or by phone at (555)
        555-5555. Our customer service representatives are available Monday
        through Friday from 9am to 5pm EST to assist you with any inquiries or
        concerns you may have. We are located in New York City and are always
        happy to connect with fellow foodies in the area. If you would like to
        stop by our office to say hello or discuss potential collaborations,
        please email us at partnerships@flavor.com to schedule a meeting. Thank
        you for choosing Flavor as your go-to source for all things culinary. We
        look forward to hearing from you!
      </Typography>
    </div>
  );
};

export default ContactUs;
