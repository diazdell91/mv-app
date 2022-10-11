import { useNavigation } from '@react-navigation/native';
import { Header } from '../../../../components';
import { COLORS } from '../../../../theme';

interface Props {
  onPress?: () => void;
  title: string;
}

const HeaderTransferFilter = ({ onPress, title }: Props) => {
  const navigation = useNavigation();
  return (
    <Header
      title={title}
      iconRightName="filter"
      iconRightColor={COLORS.placeHolder}
      iconRightPress={onPress}
      iconLeftName="chevron-left"
      iconLeftColor={COLORS.placeHolder}
      iconLeftPress={() => {
        navigation.goBack();
      }}
    />
  );
};

export default HeaderTransferFilter;
