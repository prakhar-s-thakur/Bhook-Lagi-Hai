import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = UseOnlineStatus();

  const { loggedInUser } = useContext(userContext);

  // subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-teal-500 shadow-xl mb-2">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className=" items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart" className="link-style mr-4 font-bold">
              🛒 : ({cartItems.length}) items
            </Link>
          </li>

          <button
            className="login"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
