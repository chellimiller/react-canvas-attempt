import * as React from "react";

type Canvas = {
  reference: React.MutableRefObject<HTMLCanvasElement>;
  draw: MovementHandler;
};

function drawLine(
  context: CanvasRenderingContext2D,
  { original, current }: Movement
): void {
  context.strokeStyle = "blue";
  context.lineWidth = 5;
  context.moveTo(original.x, original.y);
  context.lineTo(current.x, current.y);
  context.stroke();
}

const useCanvas: () => Canvas = () => {
  const reference = React.useRef<HTMLCanvasElement>(null);
  const draw = (movement: Movement) => {
    if (reference) {
      drawLine(reference.current.getContext("2d"), movement);
    }
  };

  return { reference, draw };
};

type Position = {
  x: number;
  y: number;
};

type Movement = {
  original: Position;
  current: Position;
};

type MovementHandler = (movement: Movement) => void;

function useOnMouseDraw<T extends HTMLElement>(handler: MovementHandler): React.MouseEventHandler {
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

export default ({}) => {
  const { reference, draw } = useCanvas();

  const onMouseMove = useOnMouseDraw(draw);

  return (
    <canvas
      ref={reference}
      height="500px"
      width="400px"
      style={{ border: "1px solid black" }}
      onMouseMove={onMouseMove}
    >
      Get a better browser, bro.
    </canvas>
  );
};
