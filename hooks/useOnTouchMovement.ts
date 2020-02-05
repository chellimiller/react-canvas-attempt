import * as React from "react";
import { MovementHandler, Position } from "../types";

export default function useOnTouchMovement(
  handler: MovementHandler
): React.TouchEventHandler {
  const [original, setOriginal] = React.useState<Position>(null);

  return (event: React.TouchEvent) => {
    const touch = event.changedTouches[0];

    if (touch) {
      const current: Position = {
        x: touch.clientX,
        y: touch.clientY
      };

      if (original) {
        handler({current, original});
      }

      setOriginal(current);
    }
  };
}
