import { Dispatch, Fragment, useEffect, useReducer, useRef } from "react";
import { Skill } from "../Tree";
import { Dialog, Transition } from "@headlessui/react";
import ColorListbox from "@/components/ColorListbox";
import { HexagonColor, HEXAGON_COLORS } from "../Tree/hexagon";
import { absurd } from "@/utils/absurd";

type SkillFormState = {
  text: string;
  color: HexagonColor;
};

type SetTextAction = {
  type: "setText";
  payload: string;
};

type SetColorAction = {
  type: "setColor";
  payload: HexagonColor;
};

type SkillFormAction = SetTextAction | SetColorAction;

const saveButtonClassNames = (isReadyToSave: boolean) => {
  const baseClassNames = [
    "inline-flex",
    "w-full",
    "justify-center",
    "rounded-md",
    "border",
    "border-transparent",
    "px-4",
    "py-2",
    "text-base",
    "font-medium",
    "text-white",
    "shadow-sm",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "sm:ml-3",
    "sm:w-auto",
    "sm:text-sm",
  ];
  const btnColorClassNames = isReadyToSave
    ? ["bg-blue-600", "hover:bg-blue-700"]
    : ["bg-gray-600"];

  return [...baseClassNames, ...btnColorClassNames].join(" ");
};

const levelUpButtonClassNames = (skill: Skill) => {
  const baseClassNames = [
    "inline-flex",
    "w-full",
    "justify-center",
    "rounded-md",
    "border",
    "border-transparent",
    "px-4",
    "py-2",
    "text-base",
    "font-medium",
    "text-white",
    "shadow-sm",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "sm:ml-3",
    "sm:w-auto",
    "sm:text-sm",
  ];
  const colorClassNames = skill.isComplete
    ? [skill.color.bgDefault, skill.color.hoverBgSelected]
    : [skill.color.bgSelected, skill.color.hoverBgLevelUp];

  return [...baseClassNames, ...colorClassNames].join(" ");
};

const skillFormReducer = (
  state: SkillFormState,
  action: SkillFormAction
): SkillFormState => {
  const { type, payload } = action;
  switch (type) {
    case "setText":
      return {
        ...state,
        text: payload,
      };
    case "setColor":
      return {
        ...state,
        color: payload,
      };
  }
  return absurd(type);
};

const NEW_SKILL_FORM_STATE: SkillFormState = {
  text: "",
  color: HEXAGON_COLORS.Slate,
};

const clearUnsavedChanges = (
  dispatch: Dispatch<SkillFormAction>,
  skill?: Skill
) => {
  const originalState: SkillFormState = skill
    ? { text: skill.text, color: skill.color }
    : NEW_SKILL_FORM_STATE;
  dispatch({ type: "setColor", payload: originalState.color });
  dispatch({ type: "setText", payload: originalState.text });
};

const handleSave = (
  newSkill: Skill,
  save: (newSkill: Skill) => void,
  hide: () => void
) => {
  save(newSkill);
  hide();
};

type ModalProps = {
  isVisible: boolean;
  save: (newSkill: Skill) => void;
  hide: () => void;
  coordinates: Skill["coordinates"];
  skill?: Skill;
};

const Modal = ({ isVisible, save, hide, coordinates, skill }: ModalProps) => {
  const cancelButtonRef = useRef(null);
  const [state, dispatch] = useReducer(
    skillFormReducer,
    skill ? { text: skill.text, color: skill.color } : NEW_SKILL_FORM_STATE
  );

  /**
   * Initialize the modal skill form when a new skill is selected
   */
  useEffect(() => {
    clearUnsavedChanges(dispatch, skill);

    return () => clearUnsavedChanges(dispatch, skill);
  }, [skill, coordinates]);

  const isReadyToSave: boolean =
    state.color !== HEXAGON_COLORS.Slate && Boolean(state.text);

  return (
    <Transition.Root show={isVisible} as={Fragment}>
      <Dialog
        as="div"
        className="relative"
        initialFocus={cancelButtonRef}
        onClose={hide}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="transform overflow-visible border-4 border-white rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <Dialog.Title
                        as="div"
                        className="flex justify-between text-lg font-medium leading-6 text-gray-900"
                      >
                        Create a new skill
                        <ColorListbox
                          color={state.color}
                          dispatchSetColor={(hexagonColor: HexagonColor) =>
                            dispatch({
                              type: "setColor",
                              payload: hexagonColor,
                            })
                          }
                        />
                      </Dialog.Title>
                      <div className="mt-2">
                        <label className="block text-md text-gray-600 font-semi-bold mb-2">
                          What skill would you like to level up?
                        </label>
                        <textarea
                          onChange={(event) =>
                            dispatch({
                              type: "setText",
                              payload: event.target.value,
                            })
                          }
                          rows={5}
                          defaultValue={skill?.text}
                          placeholder="Description"
                          className="border px-2 py-2 rounded focus:outline-none focus:ring w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  {skill && (
                    <button
                      type="button"
                      className={levelUpButtonClassNames(skill)}
                      onClick={() =>
                        handleSave(
                          {
                            coordinates,
                            text: state.text,
                            color: state.color,
                            isComplete: !skill.isComplete,
                          },
                          save,
                          hide
                        )
                      }
                    >
                      {skill.isComplete ? "Redo" : "Level up"}
                    </button>
                  )}
                  <button
                    type="button"
                    disabled={!isReadyToSave}
                    className={saveButtonClassNames(isReadyToSave)}
                    onClick={() =>
                      handleSave(
                        {
                          coordinates,
                          text: state.text,
                          color: state.color,
                          isComplete: false,
                        },
                        save,
                        hide
                      )
                    }
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={hide}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
