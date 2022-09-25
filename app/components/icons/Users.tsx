import Svg, { SvgProps, Path } from 'react-native-svg';

const Users = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" viewBox="0 0 25 25" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.65 5.685c.165-2.977 4.535-2.97 4.7 0 .244 4.444-4.945 4.449-4.7 0m6.13-.081C20.668 3.55 19.044 2 17 2c-2.041 0-3.668 1.549-3.78 3.603-.358 6.47 7.918 6.477 7.56 0"
      fill="#18324B"
    />
    <Path
      opacity={0.3}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 11.334c-4.14 0-6.579 1.537-6.87 4.34L10 17.167h1.437c.134-1.458-.204-4.38 5.562-4.38 5.673 0 5.418 2.63 5.564 4.38H24c-.14-1.458.17-5.834-7-5.834"
      fill="#18324B"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.315 9.21c.188-3.4 5.182-3.394 5.37 0 .28 5.08-5.65 5.086-5.37 0m7.006-.092C14.19 6.771 12.334 5 10 5 7.667 5 5.809 6.77 5.68 9.118c-.409 7.394 9.049 7.402 8.64 0"
      fill="#18324B"
    />
    <Path
      opacity={0.3}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 15.668c-4.73 0-7.518 1.756-7.85 4.959L2 22.335h1.642c.154-1.666-.233-5.006 6.357-5.006 6.483 0 6.192 3.006 6.359 5.006H18c-.16-1.666.195-6.668-8-6.668"
      fill="#18324B"
    />
  </Svg>
);

export default Users;
