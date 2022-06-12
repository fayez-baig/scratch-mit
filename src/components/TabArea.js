import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { drag } from "../utils/dragDrop";
import { switchTab, appendTab } from "./../redux/actions";

function TabArea() {
  const tabs = useSelector((state) => state.tabs);
  const currentTab = useSelector((state) => state.currentTab);
  const dispatch = useDispatch();

  const getName = (id) => {
    const integers = id.match(/(\d+)/);
    return "Sprite " + integers[0];
  };

  const toggleTab = (e) => dispatch(switchTab(e.target.dataset.tab));

  const addTabs = () => {
    if (tabs.length > 6) return;
    dispatch(appendTab());
  };
  return (
    <>
      <div className="relative">
        <div
          onClick={toggleTab}
          onDragStart={drag}
          className="flex flex-no-wrap items-start w-full overflow-x-auto scrolling-touch"
        >
          {tabs.map((tab) => (
            <button
              draggable
              id={"sprite-" + tab}
              key={tab + "btn"}
              className={`${
                tab === currentTab
                  ? "bg-green-600"
                  : "bg-blue-400 hover:bg-blue-700"
              }  text-white font-bold py-2 px-4 rounded inline-flex items-center`}
              data-tab={tab}
            >
              {getName(tab)}
            </button>
          ))}
        </div>

        <button
          onClick={addTabs}
          className="absolute bottom-0 right-0 px-4 py-2 font-bold text-white bg-red-500 rounded"
        >
          +
        </button>
      </div>
      <p className="text-center bg-purple-100">
        Drop your {getName(currentTab)} here
      </p>
    </>
  );
}

export default TabArea;
