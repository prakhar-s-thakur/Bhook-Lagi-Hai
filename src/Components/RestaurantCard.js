import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } =
    resData?.info;

  return (
    <div className=" m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 rounded-lg ">
      <img
        className="res-logo rounded-lg w-[250px] h-52"
        src={CDN_URL + cloudinaryImageId}
        alt="biryani"
      />
      <h3 className=" font-bold py-4 text-lg">{name}</h3>
      <h4>{avgRating + " stars"}</h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
  )
}
};



export default RestaurantCard;
