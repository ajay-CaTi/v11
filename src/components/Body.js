import React, { useEffect, useState } from "react";
import RestCard from "./RestCard";
import ShimmerUI from "./ShimmerUI";
import useOnlineStatus from "./useOnlineStatus";
// import restaurants from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const { restaurants } =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle;
    console.log(restaurants);
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  if (onlineStatus === false) {
    return (
      <div>
        <h1>Looks you are Offline</h1>
      </div>
    );
  }

  if (listOfRestaurants.length === 0) {
    return <ShimmerUI />;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            console.log(searchText);
          }}
          type="text"
          name=""
          placeholder="Search here"
        />
        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText)
            );
            console.log(filteredRestaurant);
            setFilteredRestaurant(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="filter_btn"
          onClick={() => {
            console.log("clicked");
            const filteredList = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4.3;
            });
            setFilteredRestaurant(filteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>

      <div className="res_container">
        {filteredRestaurant.map((val, index) => {
          return <RestCard key={index} restaurants={val} />;
        })}
      </div>
    </div>
  );
};

export default Body;
