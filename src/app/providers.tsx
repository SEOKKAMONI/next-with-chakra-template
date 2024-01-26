'use client';

import { type PropsWithChildren } from 'react';
import { ChakraProvider, StyleProvider } from '@/providers';
import { OverlayProvider } from '@toss/use-overlay';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ChakraProvider>
      <StyleProvider>
        <OverlayProvider>{children}</OverlayProvider>
      </StyleProvider>
    </ChakraProvider>
  );
}
