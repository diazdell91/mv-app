import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

interface Props {
  size?: ActivityIndicatorProps['size'];
  color?: ActivityIndicatorProps['color'];
}
const Loading = ({ size = 'large', color = '#FFF' }: Props): JSX.Element => {
  return <ActivityIndicator color={color} size={size} />;
};

export default Loading;
