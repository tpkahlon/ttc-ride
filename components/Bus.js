import React from "react";
import { buses } from "../common";

const Bus = ({ handleClick }) => {
  return (
    <>
      {buses.map(({ type, line, direction, video, disabled }, idx) => {
        return (
          <div
            key={idx}
            className={
              type === "express"
                ? "line line--express"
                : type === "dt"
                ? "line line--dt"
                : disabled
                ? "line line--disabled"
                : "line"
            }
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

export default Bus;
