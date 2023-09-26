import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2"
        >
          <div className="flex justify-between ">
            <div className="text-left m-2 w-9/12">
              <h3>{item.card.info.name}</h3>
              <h3>₹-{item.card.info.price}</h3>
              <p className="text-justify">{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
              <div className="absolute">
                <button className="p-1 rounded-lg shadow-lg mx-6 text-white bg-black">
                  Add +
                </button>
              </div>
              <img
                className="min-w-[100px] max-h-[100px] rounded-lg"
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
