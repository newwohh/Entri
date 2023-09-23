import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import RestaurantsPage from "./HomePage/Main/Reastaurants/Restaurants";
import RestaurantView from "./HomePage/Main/RestaurantView/RestaurantView";
import Map from "./HomePage/Main/Map/Maps";
import ContactUs from "./HomePage/Main/ContactUs/ContactUs";
import AboutUs from "./HomePage/Main/AboutUs/AboutUs";
import { Home } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Routes>
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/:id" element={<RestaurantView />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
