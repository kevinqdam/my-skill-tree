import { Menu } from "@headlessui/react";
import { useState } from "react";
import ColoredCircle from "./ColoredCircle";
import { HexagonColor, HEXAGON_COLORS } from "./Tree";

const SkillForm = () => {
  const [selectedColor, setSelectedColor] = useState<HexagonColor>(
    HEXAGON_COLORS.Pink
  );

  return (
    <Menu as="div">
      <Menu.Button>
        <ColoredCircle></ColoredCircle>
      </Menu.Button>
      <Menu.Items>
        {Object.values(HEXAGON_COLORS)
          .filter((color) => color.display !== "Slate")
          .map((color) => (
            <Menu.Item as="div" key={color.display}>
              <ColoredCircle color={color}></ColoredCircle>
            </Menu.Item>
          ))}
      </Menu.Items>
    </Menu>
  );
};

export default SkillForm;
