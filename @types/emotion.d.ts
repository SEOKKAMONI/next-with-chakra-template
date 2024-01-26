import '@emotion/react';
import { Colors, Fonts } from '@/styles';

declare module '@emotion/react' {
  export type Theme = {
    colors: Colors;
    fonts: Fonts;
  };
}
