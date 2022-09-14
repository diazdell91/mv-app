import Svg, { SvgProps, Path } from 'react-native-svg';

const StartFill = (props: SvgProps) => (
  <Svg width={14} height={14} viewBox="0 0 14 14" {...props}>
    <Path
      d="m6.162 11.095-1.513.93a1.138 1.138 0 0 1-1.702-1.236l.417-1.726a1.6 1.6 0 0 0-.518-1.595L1.494 6.317a1.138 1.138 0 0 1 .65-2.001l1.77-.136a1.6 1.6 0 0 0 1.357-.986l.677-1.642a1.138 1.138 0 0 1 2.104 0l.677 1.642a1.6 1.6 0 0 0 1.356.986l1.771.136a1.138 1.138 0 0 1 .65 2.001l-1.352 1.151a1.6 1.6 0 0 0-.518 1.595l.417 1.726a1.138 1.138 0 0 1-1.702 1.237l-1.513-.93a1.6 1.6 0 0 0-1.676 0z"
      fill="#F7AE40"
      fillRule="evenodd"
    />
  </Svg>
);

export default StartFill;
