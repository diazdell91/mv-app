import Svg, { SvgProps, Path } from 'react-native-svg';

const Facebook = (props: SvgProps) => (
  <Svg width={44} height={44} viewBox="0 0 44 44" {...props}>
    <Path
      d="M16.346 22.007v-4.22h2.487a.742.742 0 0 0 .013-.114c0-.587-.006-1.16 0-1.747.007-.547.007-1.08.047-1.627.053-.76.213-1.5.56-2.18.487-1 1.3-1.647 2.34-2 .494-.167 1-.26 1.52-.3a16.7 16.7 0 0 1 1.16-.047c1.014-.007 2.028-.007 3.041-.007.12 0 .12.007.12.12v4c0 .114 0 .114-.12.114-.74 0-1.48 0-2.22.013-.214 0-.434.034-.634.087-.453.107-.7.42-.746.873-.034.36-.034.734-.04 1.087-.007.54-.007 1.08-.014 1.627 0 .02.007.06.014.1h3.78l-.44 4.22h-3.24c-.114 0-.114 0-.114.107v12.122h-5.014V22.167c0-.187.014-.154-.16-.154-.747-.006-1.487-.006-2.227-.006h-.113z"
      fill="#FFF"
      fillRule="evenodd"
    />
  </Svg>
);

export default Facebook;
