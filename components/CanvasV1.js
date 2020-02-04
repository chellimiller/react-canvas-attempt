import * as React from "react";

const getMousePos = (canvasDom, mouseEvent) => {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: mouseEvent.clientX - rect.left,
    y: mouseEvent.clientY - rect.top
  };
};

export default ({}) => {
  const canvasReference = React.useRef(null);
  const [isDrawing, setIsDrawing] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [lastPosition, setLastPosition] = React.useState(mousePosition);

  React.useEffect(() => {
    if (canvasReference && isDrawing) {
      const canvas = canvasReference.current;
      const context = canvas.getContext("2d");
      context.moveTo(lastPosition.x, lastPosition.y);
      context.lineTo(mousePosition.x, mousePosition.y);
      context.stroke();
      setLastPosition(mousePosition)
    }
  }, [isDrawing]);

  React.useEffect(() => {
    if (canvasReference) {
      const canvas = canvasReference.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = "#222222";
      context.lineWith = 2;

      canvas.addEventListener(
        "mousedown",
        e => {
          setIsDrawing(true);
          setLastPosition(getMousePos(canvas, e));
        },
        false
      );
      canvas.addEventListener(
        "mouseup",
        e => {
          setIsDrawing(false);
        },
        false
      );
      canvas.addEventListener(
        "mousemove",
        event => {
          setMousePosition(getMousePos(canvas, event));
        },
        false
      );
    }
  }, [canvasReference]);

  return (
    <canvas
      ref={canvasReference}
      width="320"
      height="160"
      style={{ border: "1px solid red" }}
    >
      Get a better browser, bro.
    </canvas>
  );
};
