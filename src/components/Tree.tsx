import createPanZoom from "panzoom";
import { useEffect, useState } from "react";
import { GridGenerator, Hexagon, HexGrid, Layout } from "react-hexgrid";
import Modal from "./Modal";

const HEX_GRID_ID = "hexgrid";
const HEX_GRID_RADIUS = 6; // TODO: take this as a prop
const HEX_RADIUS = 3;

type QCoordinate = number;
type RCoordinate = number;
type SCoordinate = number;
export type HexagonKey = `(${QCoordinate}, ${RCoordinate}, ${SCoordinate})`;

export type HexagonColor =
  | { display: "Pink"; default: "pink-300"; selected: "pink-500" }
  | { display: "Rose"; default: "rose-300"; selected: "rose-500" }
  | { display: "Red"; default: "red-300"; selected: "red-500" }
  | { display: "Orange"; default: "orange-300"; selected: "orange-500" }
  | { display: "Yellow"; default: "yellow-300"; selected: "yellow-500" }
  | { display: "Green"; default: "green-300"; selected: "green-500" }
  | { display: "Teal"; default: "teal-300"; selected: "teal-500" }
  | { display: "Blue"; default: "blue-300"; selected: "blue-500" }
  | { display: "Indigo"; default: "indigo-300"; selected: "indigo-500" }
  | { display: "Violet"; default: "violet-300"; selected: "violet-500" }
  | { display: "Slate"; default: "slate-300"; selected: "slate-500" };

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
  Pink: { display: "Pink", default: "pink-300", selected: "pink-500" },
  Rose: { display: "Rose", default: "rose-300", selected: "rose-500" },
  Red: { display: "Red", default: "red-300", selected: "red-500" },
  Orange: { display: "Orange", default: "orange-300", selected: "orange-500" },
  Yellow: { display: "Yellow", default: "yellow-300", selected: "yellow-500" },
  Green: { display: "Green", default: "green-300", selected: "green-500" },
  Teal: { display: "Teal", default: "teal-300", selected: "teal-500" },
  Blue: { display: "Blue", default: "blue-300", selected: "blue-500" },
  Indigo: { display: "Indigo", default: "indigo-300", selected: "indigo-500" },
  Violet: { display: "Violet", default: "violet-300", selected: "violet-500" },
  Slate: { display: "Slate", default: "slate-300", selected: "slate-500" },
};

type ImageSource = string;

export type Skill = {
  key: HexagonKey
  text: string;
  fill?: ImageSource | HexagonColor;
};

type TreeProps = {
  skills: Skill[];
};

const Tree = ({ skills }: TreeProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedHexagon, setSelectedHexagon] = useState<
    HexagonKey | undefined
  >();

  /**
   * Make the hexgrid SVG pannable and zoomable
   */
  useEffect(() => {
    const hexgrid = document.querySelector(`#${HEX_GRID_ID}`) as SVGElement;
    createPanZoom(hexgrid, {
      bounds: true,
      boundsPadding: 0.75,
      minZoom: 0.8,
      maxZoom: 4,
    });
  }, []);

  const hexes = GridGenerator.hexagon(HEX_GRID_RADIUS);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <HexGrid className="block w-full h-full" id={HEX_GRID_ID}>
        <Layout size={{ x: HEX_RADIUS, y: HEX_RADIUS }}>
          {hexes.map(({ q, r, s }) => (
            <Hexagon
              key={`(${q}, ${r}, ${s})`}
              q={q}
              r={r}
              s={s}
              className="fill-slate-300 stroke-slate-500 stroke-[0.2] transition-all duration-300 hover:fill-slate-500"
              onClick={() => {
                setSelectedHexagon(`(${q}, ${r}, ${s})`);
                setShowModal(true);
              }}
            />
          ))}
        </Layout>
      </HexGrid>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        hexagonKey={selectedHexagon}
      />
    </div>
  );
};

export default Tree;
