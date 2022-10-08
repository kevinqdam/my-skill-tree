/**
 * Utility class to check for nonexhaustive switch statements at compile time
 */
export const absurd = (x: never): never => {
  throw new Error("Nonexhaustive switch statement", x);
};
