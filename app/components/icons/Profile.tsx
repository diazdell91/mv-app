import Svg, { SvgProps, G, Path } from 'react-native-svg';

const Profile = (props: SvgProps) => (
  <Svg width={25} height={25} viewBox="0 0 25 25" {...props}>
    <G fill="#18324B" fillRule="evenodd">
      <Path d="M8.783 6.33c.26-4.709 7.174-4.7 7.434 0 .388 7.032-7.823 7.04-7.434 0m9.699-.128C18.302 2.952 15.732.5 12.5.5 9.27.5 6.697 2.951 6.518 6.201c-.565 10.237 12.529 10.248 11.964 0" />
      <Path
        d="M12.5 15.269c-6.55 0-10.409 2.432-10.869 6.866L1.424 24.5h2.274c.212-2.307-.323-6.93 8.801-6.93 8.975 0 8.572 4.161 8.803 6.93h2.274c-.222-2.307.27-9.231-11.077-9.231"
        opacity={0.3}
      />
    </G>
  </Svg>
);

export default Profile;
