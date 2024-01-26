import { type PropsWithChildren } from 'react';
import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({});

export default function ChakraProvider({ children }: PropsWithChildren) {
  return <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>;
}
