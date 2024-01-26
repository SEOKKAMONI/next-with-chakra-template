import { css, Global } from '@emotion/react';

import { theme } from './themes';
import { FontCSS, ResetCSS } from '.';

const globalStyle = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: WantedSansVariable;
    font-weight: normal;
    color: ${theme.colors.white};
    background-color: ${theme.colors.gray900};
  }
`;

export default function GlobalStyle() {
  return (
    <>
      <Global styles={ResetCSS} />
      <Global styles={FontCSS} />
      <Global styles={globalStyle} />
    </>
  );
}
