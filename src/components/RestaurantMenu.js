import React from "react";

import { CDN_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";
import useOnlineStatus from "./useOnlineStatus";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);

  console.log(resId);
  console.log(resInfo);

  if (resInfo.length === 0) {
    return <ShimmerUI />;
  }

  // DO NOT SHOW/RETURN ANYTHING BEFORE THE DATA REACH OR IT MIL EAT YOUR 1+HRS BY THROUGH ERROR ON YOUR FACE 🤕

  console.log(resInfo?.cards[0].card?.card?.info);
  const { name, cuisines, cloudinaryImageId } =
    resInfo.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const anItemCards =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  const anoItemCards =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      ?.itemCards;

  console.log(itemCards, anItemCards, anoItemCards);

  return (
    <div className="menu text-center">
      <img className="w-56" src={CDN_URL + cloudinaryImageId} alt={name} />
      <h3 className="font-semibold">{name}</h3>
      <h3 className="font-bold">{cuisines.join(",")}</h3>
      <ul>
        {(itemCards || anItemCards || anoItemCards).map((val) => (
          <li key={val.card.info.id}>
            {val.card.info.name + " - " + "₹ " + " "}
            <span className="font-semibold">
              {(val.card.info.price || val.card.info.defaultPrice) / 100}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
