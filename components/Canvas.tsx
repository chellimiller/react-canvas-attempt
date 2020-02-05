import * as React from "react";
import {useCanvas, useOnMouseDownMovement} from "../hooks";

export default ({}) => {
  const { reference, draw } = useCanvas();

  const doDrawOnMouseDown = useOnMouseDownMovement(draw);

  return (
    <canvas
      ref={reference}
      height="500px"
      width="400px"
      style={{ border: "1px solid black" }}
      onMouseMove={doDrawOnMouseDown}
    >
      Get a better browser, bro.
    </canvas>
  );
};
