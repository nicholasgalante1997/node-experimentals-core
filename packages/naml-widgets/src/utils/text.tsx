import React from "react";
import { SlotNumber } from "../types";
import { textAlign } from "./flexbox";

export const headingImpl = (
  h: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  c: string,
  co?: string,
  ta?: SlotNumber,
  cn?: string,
  id?: string,
) => {
  const style: any = {};

  if (co) {
    style.color = co;
  }

  if (ta) {
    style.textAlign = textAlign(ta);
  }

  const hMap = {
    h1: (
      <h1 className={cn} id={id} style={style}>
        {c}
      </h1>
    ),
    h2: (
      <h2 className={cn} id={id} style={style}>
        {c}
      </h2>
    ),
    h3: (
      <h3 className={cn} id={id} style={style}>
        {c}
      </h3>
    ),
    h4: (
      <h4 className={cn} id={id} style={style}>
        {c}
      </h4>
    ),
    h5: (
      <h5 className={cn} id={id} style={style}>
        {c}
      </h5>
    ),
    h6: (
      <h6 className={cn} id={id} style={style}>
        {c}
      </h6>
    ),
  } as const;

  return hMap[h];
};
