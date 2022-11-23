import { Properties } from 'csstype';

export const containerAsRow: Properties = {
    display: 'flex',
    flexDirection: 'row',
} as const;

export const containerAsCol: Properties = {
    display: 'flex',
    flexDirection: 'column',
} as const;

export const flexCentered: Properties = {
    justifyContent: 'center',
    alignItems: 'center'
} as const;

export const overflowHidden: Properties = {
    overflow: 'hidden'
} as const;

export const overflowVisible: Properties = {
    overflow: 'visible'
} as const;

export const overflowScroll: Properties = {
    overflow: 'scroll'
} as const;

export const noWrap: Properties = { flexWrap: 'nowrap' } as const;
export const wrap: Properties = { flexWrap: 'wrap' } as const;