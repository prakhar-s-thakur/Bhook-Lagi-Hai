import { CDN_URL } from "../utils/constants";
import {  useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };


  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div>
              <span className=" py-2">{item.card.info.name}</span> - ₹
              <span>
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}{" "}
              </span>
            </div>
            <p className="text-xs ">{item.card.info.description}</p>
            
          </div>
          <div className="w-2/12">
          <div className="absolute flex ">
              <button className="p-1 mx-16 bg-black text-white shadow-lg rounded-lg text-sm "
              onClick={() => handleAddItem(item)}>
                Add+
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
