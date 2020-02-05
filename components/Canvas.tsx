import * as React from "react";
import {useCanvas, useOnMouseDownMovement,useOnTouchMovement} from "../hooks";

export default ({}) => {
  const { reference, draw } = useCanvas();

  const doDrawOnMouseDown = useOnMouseDownMovement(draw);
  const doDrawOnTouch = useOnTouchMovement(draw);

  return (
    <canvas
      ref={reference}
      height="500px"
      width="400px"
      style={{ border: "1px solid black" }}
      onMouseMove={doDrawOnMouseDown}
      onTouchMoveCapture={doDrawOnTouch}
    >
      Get a better browser, bro.
    </canvas>
  );
};
