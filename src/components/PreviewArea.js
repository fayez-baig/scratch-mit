import React from "react";
import toast from "react-hot-toast";
import Icon from "./Icon";
import CatSprite from "./CatSprite";
import { useSelector } from "react-redux";
import mergeSprite from "../utils/mergeSprite";
import commandParser from "../utils/commandParser";

const PreviewArea = () => {
  const commands = useSelector((state) => state.commands);

  const reset = () => {
    const cat = document.querySelector("#movingCat");
    cat.style = "";
    toast.success("Reset", { position: "bottom-left" });
  };
  const execute = async (e) => {
    if (e.target.dataset.run) await commandParser(mergeSprite(commands));
    if (e.target.dataset.reset) reset();
  };

  return (
    <div
      className="flex-none w-full h-full p-2 overflow-y-auto"
      onClick={execute}
    >
      <CatSprite id="movingCat" className="transition-all" />

      <button
        className="fixed w-12 h-12 bg-green-500 rounded-full right-5 bottom-5 hover:bg-green-700 text-gray-50"
        data-run
      >
        Run
      </button>
      <button
        className="fixed w-12 h-12 bg-red-500 rounded-full right-20 bottom-5 hover:bg-red-700 text-gray-50"
        data-reset
      >
        Reset
      </button>
    </div>
  );
};
export default PreviewArea;
