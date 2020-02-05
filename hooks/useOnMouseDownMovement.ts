
import { MovementHandler } from "../types";

export default function useOnMouseDownMovement(handler: MovementHandler): React.MouseEventHandler {
  return ({
    clientX,
    clientY,
    movementX,
    movementY,
    buttons
  }: React.MouseEvent) => {
    if (buttons) {
      handler({
        original: {
          x: clientX - movementX,
          y: clientY - movementY
        },
        current: {
          x: clientX,
          y: clientY
        }
      });
    }
  };
}