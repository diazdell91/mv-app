import { StyleSheet } from 'react-native';
import { Header, Input } from '../../../components';
import { COLORS } from '../../../theme';

interface Props {
  onPress?: () => void;
}

const HeaderFilter = ({ onPress }: Props) => {
  return (
    <Header iconRightName="filter" iconRightColor={COLORS.placeHolder} iconRightPress={onPress}>
      <Input
        placeholder="Buscar..."
        autoFocus={false}
        iconLeft="magnify"
        iconLeftColor={COLORS.white}
        inputStyle={styles.input}
        style={styles.inputContainer}
      />
    </Header>
  );
};

export default HeaderFilter;

const styles = StyleSheet.create({
  input: {
    borderRadius: 56,
    backgroundColor: COLORS.placeHolder,
    color: COLORS.white,
  },
  inputContainer: { borderRadius: 56, marginHorizontal: 8, backgroundColor: COLORS.placeHolder },
});
