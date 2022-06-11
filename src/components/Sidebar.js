import React from "react";
import blocks from "../constants/blocks";
import SidebarItem from "./SidebarItem";
import { allowDrop, deleteDiv } from "../utils/dragDrop";

const Sidebar = () => {
  return (
    <div
      onDrop={deleteDiv}
      onDragOver={allowDrop}
      className="flex flex-col items-start flex-none h-full p-2 overflow-y-auto border-r border-gray-200 w-60"
    >
      {Object.keys(blocks).map((blockName) => (
        <SidebarItem
          key={blockName}
          title={blockName}
          data={blocks[blockName]}
        />
      ))}
    </div>
  );
};

export default Sidebar;
