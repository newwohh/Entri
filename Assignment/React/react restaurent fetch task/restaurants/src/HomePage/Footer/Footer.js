import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Link>
        <InstagramIcon />
      </Link>

      <Link>
        <CopyrightIcon />
      </Link>
    </footer>
  );
};
export default Footer;
