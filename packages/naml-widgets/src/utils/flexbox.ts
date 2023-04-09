import { css } from "styled-components";
import { SlotNumber } from "../types";

export const slot = (n: SlotNumber) => {
  const grid = {
    1: { j: "flex-start", a: "flex-start" },
    2: { j: "flex-start", a: "center" },
    3: { j: "flex-start", a: "flex-end" },
    4: { j: "center", a: "flex-start" },
    5: { j: "center", a: "center" },
    6: { j: "center", a: "flex-end" },
    7: { j: "flex-end", a: "flex-start" },
    8: { j: "flex-end", a: "center" },
    9: { j: "flex-end", a: "flex-end" },
  } as const;

  return css`
    justify-content: ${grid[n]["j"]};
    align-items: ${grid[n]["a"]};
  `;
};

export const textAlign = (n: SlotNumber) => {
  const grid = {
    1: "left",
    2: "center",
    3: "right",
    4: "left",
    5: "center",
    6: "right",
    7: "left",
    8: "center",
    9: "right",
  } as const;

  return grid[n];
};
