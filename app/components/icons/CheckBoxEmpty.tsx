import Svg, { SvgProps, Rect } from 'react-native-svg';

const CheckBoxEmpty = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <Rect
      x={7.25}
      y={7.25}
      width={17.5}
      height={17.5}
      rx={4}
      stroke="#fff"
      strokeWidth={2}
      fill="none"
    />
  </Svg>
);

export default CheckBoxEmpty;
