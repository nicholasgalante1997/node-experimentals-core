import { css } from 'styled-components';

export const formatBackground = (background?: string) => {
    if (background) {
        if (background.includes('http')) {
            return css`
                background-image: ${background};
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            `;
        } else {
            return css`background: ${background};`
        }
    }
    return css`background: inherit;`
}