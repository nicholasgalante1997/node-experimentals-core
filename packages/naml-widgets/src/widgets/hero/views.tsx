import React from "react";
import styled from "styled-components";
import { formatBackground, slot as slotFn } from "../../utils";
import { SlotNumber } from "../../types";

export type WidgetShellViewProps = {
  background?: string;
  height?: string;
  p?: 0.5 | 1 | 1.5 | 2;
  gridNumber?: SlotNumber;
};

export const WidgetShell = styled.div<WidgetShellViewProps>`
  ${(props) => formatBackground(props.background)};
  height: ${(props) => props.height};
  width: 100%;
  padding: ${(props) => `${props.p}rem` ?? "0px"};
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  ${({ gridNumber = 5 }) => slotFn(gridNumber)};
`;
