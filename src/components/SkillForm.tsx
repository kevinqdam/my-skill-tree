import { Listbox } from "@headlessui/react";
import { useState } from "react";
import ColoredCircle from "./ColoredCircle";
import { HexagonColor, HEXAGON_COLORS } from "./Tree";

const SkillForm = () => {
  const [selectedColor, setSelectedColor] = useState<HexagonColor>(
    HEXAGON_COLORS.Pink
  );

  return (
    <Listbox value={selectedColor} onChange={setSelectedColor}>
      <Listbox.Button>{<ColoredCircle color={selectedColor} />}</Listbox.Button>
      <Listbox.Options>
        {Object.values(HEXAGON_COLORS)
          .filter((color) => color.display !== "Slate")
          .map((color) => (
            <Listbox.Option key={color.display} value={color}>
              <ColoredCircle color={color} />
              {" "}
              {color.display}
            </Listbox.Option>
          ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default SkillForm;
