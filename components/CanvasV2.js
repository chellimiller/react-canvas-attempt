import * as React from "react";

const move = (canvas, { offsetX, offsetY, movementX, movementY } ) => {
  const context = canvas.getContext("2d");
  context.strokeStyle = "#222222";
  context.lineWith = 2;

  const currentPosition = {
    x: offsetX,
    y: offsetY,
  };

  const originalPosition = {
    x: currentPosition.x - movementX,
    y: currentPosition.y - movementY,
  };

  context.moveTo(originalPosition.x, originalPosition.y);
  context.lineTo(currentPosition.x, currentPosition.y);
  context.stroke();
};

export default ({}) => {
  const canvasReference = React.useRef(null);

  React.useEffect(() => {
    if (canvasReference) {
      const canvas = canvasReference.current;
      canvas.addEventListener(
        "mousemove",
        (event) => {
          if (event.buttons) {
            move(canvas, event);
          }
        }
      );
    }
  }, [canvasReference]);

  return (
    <canvas
      ref={canvasReference}
      height="500px"
      width="400px"
      style={{ border: '1px solid black'}}
    >
      Get a better browser, bro.
    </canvas>
  );
};
