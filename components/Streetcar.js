import React from "react";
import { streetcars } from "../common";

const Streetcar = ({ handleClick }) => {
  return (
    <>
      {streetcars.map(({ line, direction, video }, idx) => {
        return (
          <div
            key={idx}
            className="line"
            onClick={() => handleClick(line, video)}
          >
            {line}
            <span>{direction}</span>
          </div>
        );
      })}
    </>
  );
};

export default Streetcar;
