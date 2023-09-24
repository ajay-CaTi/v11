import React, { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { CDN_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    console.log(json);

    console.log(json.data);
    setResInfo(json.data);
  };

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
    <div className="menu">
      <img className="res_logo" src={CDN_URL + cloudinaryImageId} alt={name} />
      <h3>{name}</h3>
      <h3>{cuisines.join(",")}</h3>
      <ul>
        {(itemCards || anItemCards || anoItemCards).map((val) => (
          <li key={val.card.info.id}>
            {val.card.info.name +
              " - " +
              "₹ " +
              (val.card.info.price || val.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
