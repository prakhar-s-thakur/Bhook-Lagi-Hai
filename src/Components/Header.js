import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = UseOnlineStatus();

  return (
    <div className="flex justify-between bg-teal-500 shadow-lg mb-2">
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
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
