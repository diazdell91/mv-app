import { StyleSheet, View } from 'react-native';
import { COLORS } from '../theme';
import Text from './Text';

type Props = {
  title: string;
  text: string;
};

const EmptyList = ({ title, text }: Props) => {
  return (
    <View style={styles.container}>
      <Text size={32} color={COLORS.black}>
        {title}
      </Text>
      <Text size={16} color={COLORS.black}>
        {text}
      </Text>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
