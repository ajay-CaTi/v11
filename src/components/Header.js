import { useEffect, useState } from "react";
import Food from "../food.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    console.log("inside Useffect called");
  }, []);
  console.log("outside Useffect called");
  return (
    <div className="flex items-center justify-between rounded-xl shadow-lg m-2 mb-2 px-1 bg-pink-100 sm:bg-yellow-100  md:bg-blue-100  lg:bg-red-100  xl:bg-green-100">
      <div className="logo_container">
        <img className="w-28" src={Food} alt="mylogo" />
      </div>
      <div className="nav_items">
        <ul className="flex">
          <li className="p-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-2">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="p-2">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="p-2">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="p-2">
            <Link to={"#"}>Cart</Link>
          </li>
          <li className="p-2">{onlineStatus ? "🟢 online" : "🔴 offline"}</li>
          <li className="p-2">
            <button
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
