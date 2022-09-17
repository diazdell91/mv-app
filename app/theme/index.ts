export interface ITheme {
  sizes: {
    // global sizes
    xxs?: number;
    xs?: number;
    s?: number;
    m?: number;
    l?: number;
    xl?: number;

    // fontSizes
    h1?: number;
    h2?: number;
    h3?: number;
    h4?: number;
    body?: number;
    caption?: number;

    // button sizes
    buttonHeight?: number;
    buttonRadius?: number;
    buttonBorder?: number;
    // input sizes
    inputHeight?: number;
    inputRadius?: number;
    inputBorder?: number;
  };

  colors: {
    // app colors
    primary: string;
    secondary: string;
    yellow: string;
    stroke: string;
    background: string;
    backgroundAlt: string;
    white: string;
    black: string;
    gray: string;
    gradient: string;
    red: string;
    red2: string;
    blue: string;

    // surfaces colors
    backDrop: string;

    // tabs colors
    tint: string;
    tabIconDefault: string;
    tabIconSelected: string;
  };
}

export const SIZES = {
  // global sizes
  xxs: 4,
  xs: 8,
  s: 12,
  m: 14,
  l: 16,
  xl: 24,

  // fontSizes
  h1: 20,
  h2: 18,
  h3: 16,
  h4: 14,
  body: 12,
  caption: 10,

  // button sizes
  buttonHeight: 56,
  buttonRadius: 32,
  buttonBorder: 1,

  // input sizes
  inputHeight: 56,
  inputRadius: 14,
  inputBorder: 0,

  // spacing
};

const tintColorLight = '#002233';

export const COLORS = {
  // app colors
  white: '#fff',
  primary: '#C0FAA0',
  secondary: '#56CCF2',
  yellow: '#F2C94C',
  stroke: '#E1E1E2',
  backgroundAlt: '#d8d8d8',
  background: '#f7f7f7',
  green: '#27AE60',
  gray: '#808080',
  gradient: '#efefef',
  red: '#a21010',
  red2: '#f27475',
  black: '#002233',
  blue: '#00a0e9',
  blackOpacity: 'rgba(0, 0, 0, 0.4)',

  //
  tint: tintColorLight,
  tabIconDefault: '#ccc',
  tabIconSelected: tintColorLight,
  backDrop: '#21202510',
};

export const THEME: ITheme = {
  sizes: SIZES,
  colors: COLORS,
};

export default THEME;