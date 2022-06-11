import React from "react";
import Icon from "./Icon";
import BlockWrapper from "./BlockWrapper";
import getBlockColor from "../utils/getBlockColor.js";
import { getTextIcon } from "../utils/stringFormatter";
import { drag } from "../utils/dragDrop";

const SidebarItem = ({ title, data }) => {
  return (
    <>
      <div className="font-bold"> {title} </div>

      {data.map((_d, i) => (
        <div
          draggable
          onDragStart={drag}
          id={title + i}
          key={title + i}
          className={`flex flex-row flex-wrap bg-${getBlockColor(
            title
          )}-500 text-white px-2 py-1 my-2 text-sm cursor-pointer`}
        >
          <BlockWrapper text={getTextIcon(_d, 0)} />
          {getTextIcon(_d, 1) && (
            <Icon
              name={getTextIcon(_d, 1)}
              size={15}
              className="mx-2 text-green-600"
            />
          )}
          <BlockWrapper text={getTextIcon(_d, 2)} />
        </div>
      ))}
    </>
  );
};

export default SidebarItem;
