import React from "react";
import CatSprite from "./CatSprite";
import Flag from "./Flag";

const PreviewArea = () => {
  return (
    <div className="flex-none h-full p-2 overflow-y-auto">
      <CatSprite />

      <button
        className="fixed flex items-center justify-center w-12 h-12 rounded-full right-5 bottom-5 text-gray-50"
        data-run
      >
        <Flag />
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
