import React from 'react';
import styled from 'styled-components';
import { formatBackground } from '../../utils';

export type WidgetShellViewProps = {
    background?: string;
    height?: string;
    p?: 0.5 | 1 | 1.5 | 2;
} & React.HTMLProps<HTMLDivElement>;

export const WidgetShell = styled.div<WidgetShellViewProps>`
    background: ${props => formatBackground(props.background)};
    height: ${props => props.height};
    width: 100%;
    padding: ${props => `${props.p}rem` ?? '0px'};
    margin: 0 auto;
`;