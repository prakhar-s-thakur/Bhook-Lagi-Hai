import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListOfRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  console.log(ListOfRestaurants);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2513844&lng=81.62964130000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListofRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = UseOnlineStatus();

  if (onlineStatus === false) return <h1>you are offline</h1>;

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className=" border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className=" px-4 py-2 bg-green-200 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter m-4 p-4 flex items-center ">
          <button
            className="filter bg-gray-200 rounded-lg p-2 "
            onClick={() => {
              const filteredList = ListOfRestaurants.filter(
                (res) => res.info?.avgRating > 4
              );

             

              setListofRestaurants(filteredList);
            }}
          >
            Top Rated restaurants
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap items-center justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info?.id}
            to={"/restaurants/" + restaurant.info?.id}
          >
            {restaurant.info?.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
