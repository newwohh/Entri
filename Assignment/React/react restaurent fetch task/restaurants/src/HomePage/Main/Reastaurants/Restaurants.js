import "./resstyles.css";
import RecipeReviewCard from "../Card/Card";
import MiniDrawer from "../Drawer/Drawer";
let restaurantsJson = require("./restaurants.json");

const RestaurantsPage = () => {
  let data = restaurantsJson.restaurants;

  return (
    <div>
      <MiniDrawer />
      <div className="grid-div">
        {data.map((el, i) => (
          <RecipeReviewCard
            data={el}
            reviews={el.reviews}
            index={i}
            key={restaurantsJson.restaurants.id}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsPage;
