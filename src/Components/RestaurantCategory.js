import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data , showItems , setShowIndex}) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* header */}
      <div className="w-6/12 bg-gray-100 shadow-lg mx-auto my-4 p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>▼</span>
        </div>

        {/* accordian body */}
       {showItems && <ItemList items={data.itemCards} />}
        
      </div>
    </div>
  );




















};

export default RestaurantCategory;
