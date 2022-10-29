import { View, ViewStyle } from 'react-native';
import { COLORS } from '../theme';

import { Search, Appoiments, Profile, Docs, Filter, Users } from './icons';
import Start from './icons/Start';

export type IconName =
  | 'Search'
  | 'Appoiments'
  | 'Profile'
  | 'Docs'
  | 'Filter'
  | 'Share'
  | 'Staff'
  | 'Inventory';

type Props = {
  name: IconName;
  color?: string;
  size?: number;
  style?: ViewStyle;
};

const Icon = ({ name, color = COLORS.primary, size = 32, style, ...rest }: Props) => {
  return (
    <View style={style} {...rest}>
      {name === 'Search' && <Search color={color} width={size} height={size} />}
      {name === 'Appoiments' && <Appoiments color={color} width={size} height={size} />}
      {name === 'Profile' && <Profile color={color} width={size} height={size} />}
      {name === 'Docs' && <Docs color={color} width={size} height={size} />}
      {name === 'Filter' && <Filter color={color} width={size} height={size} />}
      {name === 'Staff' && <Users color={color} width={size} height={size} />}
      {name === 'Inventory' && <Docs color={color} width={size} height={size} />}
    </View>
  );
};

export default Icon;
