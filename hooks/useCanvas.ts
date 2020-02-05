import * as React from "react";
import { Movement, Canvas } from "../types";
import { drawLine } from "../util";

export type UseCanvasHook = () => Canvas;

const useCanvas: UseCanvasHook  = () => {
  const reference = React.useRef<HTMLCanvasElement>(null);
  const draw = (movement: Movement) => {
    if (reference) {
      drawLine(reference.current.getContext("2d"), movement);
    }
  };

  return { reference, draw };
};

export default useCanvas;