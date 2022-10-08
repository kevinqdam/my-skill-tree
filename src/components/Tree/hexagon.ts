import { Skill } from '.';

type QCoordinate = number;
type RCoordinate = number;
type SCoordinate = number;
export type HexagonCoordinates = readonly [ QCoordinate, RCoordinate, SCoordinate ];

export type HexagonColor =
  | {
      display: "Pink";
      default: "pink-300";
      selected: "pink-500";
      bgSelected: "bg-pink-500";
      fillDefault: "fill-pink-300";
      hoverFillSelected: "hover:fill-pink-500";
      strokeSelected: "stroke-pink-500";
    }
  | {
      display: "Rose";
      default: "rose-300";
      selected: "rose-500";
      bgSelected: "bg-rose-500";
      fillDefault: "fill-rose-300";
      hoverFillSelected: "hover:fill-rose-500";
      strokeSelected: "stroke-rose-500";
    }
  | {
      display: "Red";
      default: "red-300";
      selected: "red-500";
      bgSelected: "bg-red-500";
      fillDefault: "fill-red-300";
      hoverFillSelected: "hover:fill-red-500";
      strokeSelected: "stroke-red-500";
    }
  | {
      display: "Orange";
      default: "orange-300";
      selected: "orange-500";
      bgSelected: "bg-orange-500";
      fillDefault: "fill-orange-300";
      hoverFillSelected: "hover:fill-orange-500";
      strokeSelected: "stroke-orange-500";
    }
  | {
      display: "Yellow";
      default: "yellow-300";
      selected: "yellow-500";
      bgSelected: "bg-yellow-500";
      fillDefault: "fill-yellow-300";
      hoverFillSelected: "hover:fill-yellow-500";
      strokeSelected: "stroke-yellow-500";
    }
  | {
      display: "Green";
      default: "green-300";
      selected: "green-500";
      bgSelected: "bg-green-500";
      fillDefault: "fill-green-300";
      hoverFillSelected: "hover:fill-green-500";
      strokeSelected: "stroke-green-500";
    }
  | {
      display: "Teal";
      default: "teal-300";
      selected: "teal-500";
      bgSelected: "bg-teal-500";
      fillDefault: "fill-teal-300";
      hoverFillSelected: "hover:fill-teal-500";
      strokeSelected: "stroke-teal-500";
    }
  | {
      display: "Blue";
      default: "blue-300";
      selected: "blue-500";
      bgSelected: "bg-blue-500";
      fillDefault: "fill-blue-300";
      hoverFillSelected: "hover:fill-blue-500";
      strokeSelected: "stroke-blue-500";
    }
  | {
      display: "Indigo";
      default: "indigo-300";
      selected: "indigo-500";
      bgSelected: "bg-indigo-500";
      fillDefault: "fill-indigo-300";
      hoverFillSelected: "hover:fill-indigo-500";
      strokeSelected: "stroke-indigo-500";
    }
  | {
      display: "Violet";
      default: "violet-300";
      selected: "violet-500";
      bgSelected: "bg-violet-500";
      fillDefault: "fill-violet-300";
      hoverFillSelected: "hover:fill-violet-500";
      strokeSelected: "stroke-violet-500";
    }
  | {
      display: "Slate";
      default: "slate-300";
      selected: "slate-500";
      bgSelected: "bg-slate-500";
      fillDefault: "fill-slate-300";
      hoverFillSelected: "hover:fill-slate-500";
      strokeSelected: "stroke-slate-500";
    };

type HexagonColorKey =
  | "Pink"
  | "Rose"
  | "Red"
  | "Orange"
  | "Yellow"
  | "Green"
  | "Teal"
  | "Blue"
  | "Indigo"
  | "Violet"
  | "Slate";

export const HEXAGON_COLORS: Record<HexagonColorKey, HexagonColor> = {
  Pink: {
    display: "Pink",
    default: "pink-300",
    selected: "pink-500",
    bgSelected: "bg-pink-500",
    fillDefault: "fill-pink-300",
    hoverFillSelected: "hover:fill-pink-500",
    strokeSelected: "stroke-pink-500",
  },
  Rose: {
    display: "Rose",
    default: "rose-300",
    selected: "rose-500",
    bgSelected: "bg-rose-500",
    fillDefault: "fill-rose-300",
    hoverFillSelected: "hover:fill-rose-500",
    strokeSelected: "stroke-rose-500",
  },
  Red: {
    display: "Red",
    default: "red-300",
    selected: "red-500",
    bgSelected: "bg-red-500",
    fillDefault: "fill-red-300",
    hoverFillSelected: "hover:fill-red-500",
    strokeSelected: "stroke-red-500",
  },
  Orange: {
    display: "Orange",
    default: "orange-300",
    selected: "orange-500",
    bgSelected: "bg-orange-500",
    fillDefault: "fill-orange-300",
    hoverFillSelected: "hover:fill-orange-500",
    strokeSelected: "stroke-orange-500",
  },
  Yellow: {
    display: "Yellow",
    default: "yellow-300",
    selected: "yellow-500",
    bgSelected: "bg-yellow-500",
    fillDefault: "fill-yellow-300",
    hoverFillSelected: "hover:fill-yellow-500",
    strokeSelected: "stroke-yellow-500",
  },
  Green: {
    display: "Green",
    default: "green-300",
    selected: "green-500",
    bgSelected: "bg-green-500",
    fillDefault: "fill-green-300",
    hoverFillSelected: "hover:fill-green-500",
    strokeSelected: "stroke-green-500",
  },
  Teal: {
    display: "Teal",
    default: "teal-300",
    selected: "teal-500",
    bgSelected: "bg-teal-500",
    fillDefault: "fill-teal-300",
    hoverFillSelected: "hover:fill-teal-500",
    strokeSelected: "stroke-teal-500",
  },
  Blue: {
    display: "Blue",
    default: "blue-300",
    selected: "blue-500",
    bgSelected: "bg-blue-500",
    fillDefault: "fill-blue-300",
    hoverFillSelected: "hover:fill-blue-500",
    strokeSelected: "stroke-blue-500",
  },
  Indigo: {
    display: "Indigo",
    default: "indigo-300",
    selected: "indigo-500",
    bgSelected: "bg-indigo-500",
    fillDefault: "fill-indigo-300",
    hoverFillSelected: "hover:fill-indigo-500",
    strokeSelected: "stroke-indigo-500",
  },
  Violet: {
    display: "Violet",
    default: "violet-300",
    selected: "violet-500",
    bgSelected: "bg-violet-500",
    fillDefault: "fill-violet-300",
    hoverFillSelected: "hover:fill-violet-500",
    strokeSelected: "stroke-violet-500",
  },
  Slate: {
    display: "Slate",
    default: "slate-300",
    selected: "slate-500",
    bgSelected: "bg-slate-500",
    fillDefault: "fill-slate-300",
    hoverFillSelected: "hover:fill-slate-500",
    strokeSelected: "stroke-slate-500",
  },
};

export const getHexagonClassName = (
  skill?: Skill
) => {
  const classes = ["stroke-[0.2]", "transition-all", "duration-300"];
  const color = skill?.color ?? HEXAGON_COLORS.Slate;
  classes.push(color.fillDefault);
  classes.push(color.hoverFillSelected);
  classes.push(color.strokeSelected);
  if (color !== HEXAGON_COLORS.Slate) classes.push();

  return classes.join(" ");
};
