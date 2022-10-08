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
const ORIGIN: Skill["coordinates"] = [0, 0, 0];

export type Skill = {
  coordinates: HexagonCoordinates;
  text: string;
  color: HexagonColor;
};

  // TODO: get the map of skills from data-fetching or props
  const INITIAL_SKILLS: Skill[] = [
    { coordinates: [1, -1, 0], text: "", color: HEXAGON_COLORS.Red },
    { coordinates: [1, 0, -1], text: "", color: HEXAGON_COLORS.Orange },
    { coordinates: [-1, 1, 0], text: "", color: HEXAGON_COLORS.Yellow },
    { coordinates: [0, 1, -1], text: "", color: HEXAGON_COLORS.Green },
    { coordinates: [-1, 0, 1], text: "", color: HEXAGON_COLORS.Blue },
    { coordinates: [0, -1, 1], text: "", color: HEXAGON_COLORS.Violet },
  ];

const Tree = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedCoordinates, setSelectedCoordinates] = useState<
    Skill["coordinates"]
  >([0, 0, 0]);
  const [selectedSkill, setSelectedSkill] = useState<Skill | undefined>();
  const [skills, setSkills] = useState<Skill[]>(INITIAL_SKILLS);

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

  const save = (newSkill: Skill) => {
    const { coordinates: newCoordinates } = newSkill;
    const skillsCopy = [...skills];
    const indexOfOldSkill = skillsCopy.findIndex(
      ({ coordinates: oldCoordinates }) =>
        oldCoordinates[0] === newCoordinates[0] &&
        oldCoordinates[1] === newCoordinates[1] &&
        oldCoordinates[2] === newCoordinates[2]
    );
    if (indexOfOldSkill < 0) {
      skillsCopy.push(newSkill);
    } else {
      skillsCopy[indexOfOldSkill] = newSkill;
    }
    setSkills(skillsCopy);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <HexGrid className="block w-full h-full" id={HEX_GRID_ID}>
        <Layout size={{ x: HEX_RADIUS, y: HEX_RADIUS }} spacing={1.1}>
          {hexCoords.map(({ q, r, s }) => {
            const skillOrUndefined = skills.find(
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
                  setSelectedCoordinates([q, r, s]);
                  setSelectedSkill(skillOrUndefined);
                  setIsModalVisible(true);
                }}
              />
            );
          })}
        </Layout>
      </HexGrid>
      <Modal
        isVisible={isModalVisible}
        save={save}
        hide={() => {
          setSelectedCoordinates(ORIGIN);
          setSelectedSkill(undefined);
          setIsModalVisible(false);
        }}
        coordinates={selectedCoordinates}
        skill={selectedSkill}
      />
    </div>
  );
};

export default Tree;
