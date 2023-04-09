import React from "react";

export type ReactWidget = {
  className?: string;
  id?: string;
  children?: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[];
  ref?: React.RefObject<HTMLDivElement>;
};
