import Svg, { SvgProps, G, Path } from 'react-native-svg';

const Search = (props: SvgProps) => (
  <Svg width={25} height={25} viewBox="0 0 25 25" {...props}>
    <G fill="#18324B" fillRule="evenodd">
      <Path d="M14.391 18.819c-4.538 1.766-9.82-2.935-9.82-8.354 0-4.373 3.553-7.931 7.927-7.931s7.931 3.558 7.931 7.931c0 3.632-3.064 7.196-6.038 8.354zm-3.268 3.647.426-1.276a7.01 7.01 0 0 0 1.499.027l.418 1.25h-2.343zM12.498.5c-5.495 0-9.962 4.47-9.962 9.965 0 4.647 3.047 8.833 7.024 10.26L8.3 24.5h7.99l-1.256-3.756c3.741-1.414 7.43-5.638 7.43-10.278C22.464 4.97 17.994.5 12.498.5z" />
      <Path
        d="M9.125 12.728c-1.845-3.36.252-6.713 3.375-6.832v-2.03c-4.799.181-7.697 5.215-5.158 9.84l1.783-.978z"
        opacity={0.3}
      />
    </G>
  </Svg>
);

export default Search;