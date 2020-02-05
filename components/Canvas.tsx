import * as React from "react";
import {useCanvas, useOnMouseDownMovement,useOnTouchMovement} from "../hooks";

export default ({}) => {
  const { reference, draw } = useCanvas();

  const onMouseMove = useOnMouseDownMovement(draw);
  const {onTouchMove, onTouchEnd, onTouchStart} = useOnTouchMovement(draw);

  return (
    <canvas
      ref={reference}
      height="500px"
      width="400px"
      style={{ border: "1px solid black" }}
      onMouseMove={onMouseMove}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      Get a better browser, bro.
    </canvas>
  );
};
