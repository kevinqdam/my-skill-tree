/**
 * Utility class to check for nonexhaustive switch statements at compile time
 */
export const absurd = (): never => {
  throw new Error("Nonexhaustive switch statemenet");
};
