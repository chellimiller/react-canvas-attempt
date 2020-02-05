import { Movement } from "../types";

export default function drawLine(
  context: CanvasRenderingContext2D,
  { original, current }: Movement
): void {
  context.strokeStyle = "blue";
  context.lineWidth = 5;
  context.moveTo(original.x, original.y);
  context.lineTo(current.x, current.y);
  context.stroke();
}
