'use client';

import { GlobalStyle, theme } from '@/styles';
import { ThemeProvider } from '@emotion/react';
import type { PropsWithChildren } from 'react';

export default function StyleProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
