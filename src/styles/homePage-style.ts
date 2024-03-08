import { css } from "@emotion/react";

export const BREAKPOINT_WIDTH = 1024;

const mobileMediaQuery = `@media screen and (max-width: ${BREAKPOINT_WIDTH}px)`

export const homepageWrapper = css({
    padding: "24px 40px"
})

export const textCenter = css({
    textAlign: 'center',
    color: 'red'
});

