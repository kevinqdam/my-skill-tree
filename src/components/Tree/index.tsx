import createPanZoom from "panzoom";
import { useEffect, useState } from "react";
import { GridGenerator, Hexagon, HexGrid, Layout } from "react-hexgrid";
import Modal from "../Modal";
import { getHexagonClassName, HexagonColor, HexagonKey, HEXAGON_COLORS } from './hexagon';

const HEX_GRID_ID = "hexgrid";
const HEX_GRID_RADIUS = 6; // TODO: take this as a prop
const HEX_RADIUS = 3;

export type Skill = {
  key: HexagonKey;
  text: string;
  fill?: HexagonColor;
};

const Tree = () => {
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

  const hexCoords = GridGenerator.hexagon(HEX_GRID_RADIUS);

  // TODO: get the map of skills from data-fetching or props
  const SKILLS = new Map<HexagonKey, Skill>([
    [
      "(1, -1, 0)" as HexagonKey,
      { key: "(0, 0, 0)", text: "", fill: HEXAGON_COLORS.Red },
    ],
    [
      "(1, 0, -1)" as HexagonKey,
      { key: "(0, 1, -1)", text: "", fill: HEXAGON_COLORS.Orange },
    ],
    [
      "(-1, 1, 0)" as HexagonKey,
      { key: "(0, 2, -2)", text: "", fill: HEXAGON_COLORS.Yellow },
    ],
    [
      "(0, 1, -1)" as HexagonKey,
      { key: "(0, 3, -3)", text: "", fill: HEXAGON_COLORS.Green },
    ],
    [
      "(-1, 0, 1)" as HexagonKey,
      { key: "(0, 3, -3)", text: "", fill: HEXAGON_COLORS.Blue },
    ],
    [
      "(0, -1, 1)" as HexagonKey,
      { key: "(0, 3, -3)", text: "", fill: HEXAGON_COLORS.Violet },
    ],
  ]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <HexGrid className="block w-full h-full" id={HEX_GRID_ID}>
        <Layout size={{ x: HEX_RADIUS, y: HEX_RADIUS }} spacing={1.1}>
          {hexCoords.map(({ q, r, s }) => {
            const hexagonKey = `(${q}, ${r}, ${s})` as HexagonKey;
            return (
              <Hexagon
                key={hexagonKey}
                q={q}
                r={r}
                s={s}
                className={getHexagonClassName(SKILLS, hexagonKey)}
                onClick={() => {
                  setSelectedHexagon(`(${q}, ${r}, ${s})`);
                  setShowModal(true);
                }}
              />
            );
          })}
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
