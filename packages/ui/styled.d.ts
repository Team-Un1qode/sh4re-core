import 'styled-components';
import type { Theme } from './src/theme/themeContext';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    color: {
      mainBlue: string;
      mainRed: string;
      mainOrange: string;
      mainGreen: string;
      lightBlack: string;
      selectedWhite: string;
      backgroundWhite: string;
      background: string;
      buttonBlack: string;
      mainText: string;
      selectText: string;
      buttonText: string;
      buttonBlue: string;
      placeholder: string;
      borderGray: string;
      gray: string;
      darkgray: string;
    };
  }
}
