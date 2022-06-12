import React from "react";
import { useSelector } from "react-redux";
import TabArea from "./TabArea";
import { allowDrop, drop } from "../utils/dragDrop";

const MidArea = () => {
  const tabs = useSelector((state) => state.tabs);
  const currentTab = useSelector((state) => state.currentTab);
  return (
    <div className="flex-1 h-full">
      <TabArea />
      {tabs.map((tab) => (
        <div
          key={tab + "div"}
          onDrop={drop}
          onDragOver={allowDrop}
          className={`flex-1 h-full overflow-auto ${
            tab === currentTab ? "block" : "hidden"
          }`}
        />
      ))}
    </div>
  );
};

export default MidArea;
