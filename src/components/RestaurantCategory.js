import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    console.log("click");
    setShowItems(!showItems);
  };
  console.log(data);
  return (
    <div>
      {/* Header  */}

      <div className=" bg-gray-50 shadow-lg p-4 w-10/12 mx-auto  my-2 rounded-lg border-black">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} - ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>

      {/* Accordian Body  */}
    </div>
  );
};

export default RestaurantCategory;
