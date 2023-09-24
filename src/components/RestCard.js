import React from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestCard = ({ restaurants }) => {
  // console.log(restaurants);
  return (
    <Link to={"/restaurants/" + restaurants.info.id} className="change_a_style">
      <div className="res_card">
        <img
          className="res_logo"
          src={
            `${CDN_URL}` +
            `${restaurants.info.cloudinaryImageId || "byilgyrcfz690ryoasww"}`
          }
        />
        <h3>{restaurants.info.name}</h3>
        <h3>{restaurants.info.avgRating}</h3>
        <h3>{restaurants.info.costForTwo}</h3>
        <h3>{restaurants.info.cuisines.join(", ")}</h3>
        <h3>45 min</h3>
      </div>
    </Link>
  );
};

export default RestCard;
