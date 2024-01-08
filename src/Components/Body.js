import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData"

  
const Body = () => {
   
  const [ListOfRestaurants ,setlistofrestaurants ] = useState(resList);
  
  return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );

              setlistofrestaurants(filteredList);
              
          }}>
            Top Rated Restaurants
          </button>
          </div>
        
            
            <div className="res-container">
          {
            ListOfRestaurants.map(
              (restaurant => <RestaurantCard key ={restaurant.info.id} resData={restaurant} />) 
            )
         }
        </div>
      </div>
    );
};
  
export default Body;