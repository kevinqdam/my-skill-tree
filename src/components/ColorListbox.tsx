import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import ColoredCircle from "@/components/ColoredCircle";
import { HexagonColor, HEXAGON_COLORS } from "@/components/Tree";

type ColorListboxProps = {
  color: HexagonColor;
};

const ColorListbox = ({ color }: ColorListboxProps) => {
  const [selectedColor, setSelectedColor] = useState<HexagonColor>(color);

  return (
    <Listbox as="div" value={selectedColor} onChange={setSelectedColor}>
      <Listbox.Button>
        <div className="border border-gray-300 rounded-lg flex justify-evenly px-2 py-2 align-text-top gap-2">
          <ColoredCircle color={selectedColor} />
          <ChevronDownIcon className="w-4 h-4 text-slate-500 self-center" />
        </div>
      </Listbox.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Listbox.Options className="absolute right-0 z-20 mt-2 w-36 max-h-60 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-auto">
          {Object.values(HEXAGON_COLORS)
            .filter((color) => color.display !== "Slate")
            .map((color) => (
              <div key={color.display} className="py-1">
                <Listbox.Option value={color}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } px-4 py-2 text-sm flex gap-4 justify-start`}
                    >
                      <ColoredCircle color={color} />
                      <p className="text-gray-600">{color.display}</p>
                    </a>
                  )}
                </Listbox.Option>
              </div>
            ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default ColorListbox;
