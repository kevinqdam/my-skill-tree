import createPanZoom from "panzoom";
import { useEffect, useState } from "react";
import { GridGenerator, Hexagon, HexGrid, Layout } from "react-hexgrid";
import Modal from "../Modal";
import {
  getHexagonClassName,
  HexagonColor,
  HexagonCoordinates,
  HEXAGON_COLORS,
} from "./hexagon";

const HEX_GRID_ID = "hexgrid";
const HEX_GRID_RADIUS = 6; // TODO: take this as a prop
const HEX_RADIUS = 3;

export type Skill = {
  coordinates: HexagonCoordinates;
  text: string;
  fill: HexagonColor;
};

const Tree = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedSkill, setSelectedSkill] = useState<
    Skill | undefined
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
  const SKILLS: Skill[] = [
    { coordinates: [1, -1, 0], text: "", fill: HEXAGON_COLORS.Red },
    { coordinates: [1, 0, -1], text: "", fill: HEXAGON_COLORS.Orange },
    { coordinates: [-1, 1, 0], text: "", fill: HEXAGON_COLORS.Yellow },
    { coordinates: [0, 1, -1], text: "", fill: HEXAGON_COLORS.Green },
    { coordinates: [-1, 0, 1], text: "", fill: HEXAGON_COLORS.Blue },
    { coordinates: [0, -1, 1], text: "", fill: HEXAGON_COLORS.Violet },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <HexGrid className="block w-full h-full" id={HEX_GRID_ID}>
        <Layout size={{ x: HEX_RADIUS, y: HEX_RADIUS }} spacing={1.1}>
          {hexCoords.map(({ q, r, s }) => {
            const skillOrUndefined = SKILLS.find(
              ({ coordinates }) =>
                coordinates[0] === q &&
                coordinates[1] === r &&
                coordinates[2] === s
            );
            return (
              <Hexagon
                key={`${q},${r},${s}`}
                q={q}
                r={r}
                s={s}
                className={getHexagonClassName(skillOrUndefined)}
                onClick={() => {
                  setSelectedSkill(skillOrUndefined)
                  setShowModal(true);
                }}
              />
            );
          })}
        </Layout>
      </HexGrid>
      <Modal showModal={showModal} setShowModal={setShowModal} skill={selectedSkill} />
    </div>
  );
};

export default Tree;
