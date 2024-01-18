import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
 
  const [resInfo, setResInfo] = useState(null);
 
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.2513844&lng=81.62964130000002&restaurantId=85625&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name , cuisines ,costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

const {itemCards} = resInfo?.

  return (
    <div>
      <h1>{name}</h1> 
      <p>{cuisines.join(" , ")}</p> 
      <p>{costForTwoMessage}</p> 
      <h2>Menu</h2>
      <ul>
        <li>biryani</li>
        <li>coco</li>
        <li>moco</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
