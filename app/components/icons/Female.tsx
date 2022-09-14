import Svg, { SvgProps, Defs, Path, G, Mask, Use } from 'react-native-svg';

const Female = (props: SvgProps) => (
  <Svg width={14} height={14} viewBox="0 0 14 14" {...props}>
    <Defs>
      <Path id="a" d="M0 0h10v9.248H0z" />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h14v14H0z" />
      <G transform="translate(2 2.376)">
        <Mask id="b" fill="#fff">
          <Use xlinkHref="#a" />
        </Mask>
        <Path
          d="M6.097 7.523a3.11 3.11 0 0 1-4.373-.433 3.11 3.11 0 0 1 .433-4.372 3.11 3.11 0 0 1 4.373.432 3.11 3.11 0 0 1-.433 4.373M9.884.4a.511.511 0 0 0-.719-.07l-.69.564-.58-.707a.511.511 0 0 0-.79.648l.58.707-.713.585a4.135 4.135 0 0 0-5.463-.2 4.134 4.134 0 0 0 .538 6.76l.007.004a4.133 4.133 0 0 0 4.69-.378 4.135 4.135 0 0 0 .876-5.395l.713-.585.58.707a.511.511 0 0 0 .79-.648l-.58-.707.69-.566A.51.51 0 0 0 9.884.4"
          fill="#FFF"
          mask="url(#b)"
        />
      </G>
    </G>
  </Svg>
);

export default Female;
