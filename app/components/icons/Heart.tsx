import Svg, { SvgProps, Path } from 'react-native-svg';

const Heart = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <Path
      d="M20.621 12.007a3 3 0 0 0-4.621.464 3 3 0 1 0-4.621 3.779l4.62 4.621 4.622-4.621a3 3 0 0 0 0-4.243z"
      fill="#18324B"
      stroke="#18324B"
      strokeWidth={1.5}
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Heart;
