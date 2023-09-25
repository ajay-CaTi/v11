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
    <div className="header">
      <div className="logo_container">
        <img className="logo" src={Food} alt="mylogo" />
      </div>
      <div className="nav_items">
        <ul className="ul_li">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"#"}>Cart</Link>
          </li>
          <li>{onlineStatus ? "🟢 online" : "🔴 offline"}</li>
          <li>
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
