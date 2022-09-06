import { HexagonColor, HEXAGON_COLORS } from "./Tree";

type ColoredCircleProps = {
  color?: HexagonColor;
};

/**
 * Utility class to check for nonexhaustive switch statements at compile time
 */
const absurd = (): never => {
  throw new Error("Nonexhaustive switch statemenet");
};

const ColoredCircle = ({ color = HEXAGON_COLORS.Slate }: ColoredCircleProps): JSX.Element => {
  switch (color.display) {
    case "Pink":
      return (
        <div className="inline-block h-full align-middle">
          <div className="inline-block w-6 h-6 rounded-full bg-pink-300" />
        </div>
      );
    case "Rose":
      return (
        <div className="inline-block h-full align-middle">
          <div className="inline-block w-6 h-6 rounded-full bg-rose-300" />
        </div>
      );
    case "Red":
      return (
        <div className="inline-block h-full align-middle">
          <div className="inline-block w-6 h-6 rounded-full bg-red-300" />
        </div>
      );
    case "Orange":
      return (
        <div className="inline-block h-full align-middle">
          <div className="inline-block w-6 h-6 rounded-full bg-orange-300" />
        </div>
      );
    case "Yellow":
      return (
        <div className="inline-block h-full align-middle">
          <div className="inline-block w-6 h-6 rounded-full bg-yellow-300" />
        </div>
      );
    case "Green":
      return (
        <div className="inline-block h-full align-middle">
          <div className="inline-block w-6 h-6 rounded-full bg-green-300" />
        </div>
      );
    case "Teal":
      return (
        <div className="inline-block h-full align-middle">
          <div className="inline-block w-6 h-6 rounded-full bg-teal-300" />
        </div>
      );
    case "Blue":
      return (
        <div className="inline-block h-full align-middle">
          <div className="inline-block w-6 h-6 rounded-full bg-blue-300" />
        </div>
      );
    case "Indigo":
      return (
        <div className="inline-block h-full align-middle">
          <div className="inline-block w-6 h-6 rounded-full bg-indigo-300" />
        </div>
      );
    case "Violet":
      return (
        <div className="inline-block h-full align-middle">
          <div className="inline-block w-6 h-6 rounded-full bg-violet-300" />
        </div>
      );
    case "Slate":
      return (
        <div className="inline-block h-full align-middle">
          <div className="inline-block w-6 h-6 rounded-full bg-slate-300" />
        </div>
      );
    default:
      absurd();
  }

  return (
    <div className="inline-block h-full">
      <div className="inline-block w-6 h-6 rounded-full bg-slate-300" />
    </div>
  );
};

export default ColoredCircle;