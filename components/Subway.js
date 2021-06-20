import React from "react";
import { subway } from "../common";

const Subway = ({ handleClick }) => {
  return (
    <>
      {subway.map(({ line, direction, video }, idx) => {
        return (
          <div
            key={idx}
            className={`line line--${line}`}
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

export default Subway;
