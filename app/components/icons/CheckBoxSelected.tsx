import Svg, { SvgProps, G, Rect, Path } from 'react-native-svg';

const CheckBoxSelected = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G transform="translate(7.25 7.25)" fill="none" fillRule="evenodd">
      <Rect stroke="#18324B" strokeWidth={2} fill="#18324B" width={17.5} height={17.5} rx={4} />
      <Path
        d="m6.765 10.75-2.21-2.49a.79.79 0 0 0-1.181 0c-.337.38-.337.951 0 1.331l3.393 3.826a.9.9 0 0 0 1.356-.011l6.514-7.586a1.02 1.02 0 0 0-.01-1.34.774.774 0 0 0-1.169.01l-5.335 6.249a.9.9 0 0 1-1.358.013z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default CheckBoxSelected;
