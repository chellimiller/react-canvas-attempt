
export type Position = {
  x: number;
  y: number;
};

export type Movement = {
  original: Position;
  current: Position;
};

export type MovementHandler = (movement: Movement) => void;

export type Canvas = {
  reference: React.MutableRefObject<HTMLCanvasElement>;
  draw: MovementHandler;
};