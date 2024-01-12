import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";


const Body = () => {
  const [ListOfRestaurants, setListofRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2513844&lng=81.62964130000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListofRestaurants(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
  };

  return (
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );

            setListofRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key = {restaurant.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
