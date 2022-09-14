import Svg, { SvgProps, G, Rect, Path } from 'react-native-svg';

const Docs = (props: SvgProps) => (
  <Svg width={25} height={25} viewBox="0 0 25 25" {...props}>
    <G stroke="#18324B" strokeWidth={2.4} fill="none" fillRule="evenodd">
      <Rect x={1} y={0.821} width={23} height={23} rx={2} />
      <Path
        opacity={0.3}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12.5h13.289M6 17.5h13.289M6 6.5h1.493"
      />
    </G>
  </Svg>
);

export default Docs;
