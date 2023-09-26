import React from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestCard = ({ restaurants }) => {
  // console.log(restaurants);
  return (
    <Link to={"/restaurants/" + restaurants.info.id} className="">
      <div className="w-56 border-2 rounded-lg my-2 p-2 hover:bg-gray-200">
        <img
          className="w-56 rounded-xl"
          src={
            `${CDN_URL}` +
            `${restaurants.info.cloudinaryImageId || "byilgyrcfz690ryoasww"}`
          }
        />
        <h3 className="text-lg font-semibold">{restaurants.info.name}</h3>
        <h3 className="">{restaurants.info.avgRating}</h3>
        <h3 className="">{restaurants.info.costForTwo}</h3>
        <h3 className="">{restaurants.info.cuisines.join(", ")}</h3>
        <h3 className="">45 min</h3>
      </div>
    </Link>
  );
};

export const withPromotedLabel = (RestCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg ">
          IsOpen
        </label>
        <RestCard {...props} />
      </div>
    );
  };
};

export default RestCard;
