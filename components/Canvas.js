import * as React from "react";

const move = (canvas, { offsetX, offsetY, movementX, movementY }) => {
  const context = canvas.getContext("2d");
  context.strokeStyle = "#222222";
  context.lineWith = 2;

  const currentPosition = {
    x: offsetX,
    y: offsetY
  };

  const originalPosition = {
    x: currentPosition.x - movementX,
    y: currentPosition.y - movementY
  };

  context.moveTo(originalPosition.x, originalPosition.y);
  context.lineTo(currentPosition.x, currentPosition.y);
  context.stroke();
};

const dot = (canvas, { clientX, clientY, radiusX: radius }) => {
  const context = canvas.getContext("2d");
  context.strokeStyle = "#222222";
  context.fillStyle = "green";
  context.lineWith = 2;
  const { left, top } = canvas.getBoundingClientRect();

  const center = {
    x: clientX - left,
    y: clientY - top
  };

  context.arc(center.x, center, radius, 0, 2 * Math.PI, false);

  context.fill();
  context.stroke();

  console.log(context)
};

export default ({}) => {
  const canvasReference = React.useRef(null);

  const [lastTouch, setLastTouch] = React.useState(null);

  console.log(lastTouch);
  React.useEffect(() => {
    if (canvasReference) {
      const canvas = canvasReference.current;
      canvas.addEventListener("mousemove", event => {
        if (event.buttons) {
          move(canvas, event);
        }
      });
      canvas.addEventListener("touchmove", ({changedTouches}) => {
        if (changedTouches[0]) {
          dot(canvas, changedTouches[0]);
        }
      });
    }
  }, [canvasReference]);

  return (
    <canvas
      ref={canvasReference}
      height="500px"
      width="400px"
      style={{ border: "1px solid black" }}
    >
      Get a better browser, bro.
    </canvas>
  );
};
