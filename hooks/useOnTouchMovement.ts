import * as React from "react";
import { MovementHandler, Position } from "../types";

type UseOnTouchMoveHook = (
  handler: MovementHandler
) => {
  onTouchStart: React.TouchEventHandler;
  onTouchMove: React.TouchEventHandler;
  onTouchEnd: React.TouchEventHandler;
};

function extractChangedTouchEventPosition(event: React.TouchEvent): Position {
  const touch = event.changedTouches[0];
  return touch
    ? {
        x: touch.clientX,
        y: touch.clientY
      }
    : undefined;
}

const useOnTouchMove: UseOnTouchMoveHook = (handler: MovementHandler) => {
  const [original, setOriginal] = React.useState<Position>(null);

  const onTouchMove: React.TouchEventHandler = (event: React.TouchEvent) => {
    const current: Position = extractChangedTouchEventPosition(event);
    if (current) {
      if (original) {
        handler({ current, original });
      }
      setOriginal(current);
    }
  };

  const onTouchStart: React.TouchEventHandler = (event: React.TouchEvent) => {
    const current: Position = extractChangedTouchEventPosition(event);
    if (current) {
      setOriginal(current);
    }
  };

  
  const onTouchEnd: React.TouchEventHandler = (event: React.TouchEvent) => {
    const current: Position = extractChangedTouchEventPosition(event);
    if (current) {
      if (original) {
        handler({ current, original });
      }
      setOriginal(null);
    }
  };

  return {onTouchMove, onTouchStart, onTouchEnd}
};

export default useOnTouchMove;
