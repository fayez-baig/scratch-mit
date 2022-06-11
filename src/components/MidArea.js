import React from "react";
import { allowDrop, drop } from "../utils/dragDrop";

export default function MidArea() {
  return (
    <div className="flex-1 h-full">
      <div
        onDrop={drop}
        onDragOver={allowDrop}
        className="flex-1 h-full overflow-auto"
      />
    </div>
  );
}
