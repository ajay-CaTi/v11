import React from "react";

import { CDN_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";
import useOnlineStatus from "./useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";

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

  console.log(resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  // Category of restaurants
  const categories =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  const anItemCards =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  const anoItemCards =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      ?.itemCards;

  console.log(itemCards, anItemCards, anoItemCards);

  return (
    <div className="menu text-center">
      <div className="mx-auto w-56">
        <img className="w-56" src={CDN_URL + cloudinaryImageId} alt={name} />
      </div>
      <h3 className="font-bold">{name}</h3>
      <h3 className="font-semibold">Cuisines:- {cuisines.join(",")}</h3>
      {categories.map((category, index) => (
        <RestaurantCategory key={index} data={category?.card?.card} />
      ))}

      {/* <ul>
        {(itemCards || anItemCards || anoItemCards).map((val) => (
          <li key={val.card.info.id}>
            {val.card.info.name + " - " + "₹ " + " "}
            <span className="font-semibold">
              {(val.card.info.price || val.card.info.defaultPrice) / 100}
            </span>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
