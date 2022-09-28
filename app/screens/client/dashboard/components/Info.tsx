import { StyleSheet, View } from 'react-native';
import { Text } from '../../../../components';
import { COLORS } from '../../../../theme/index';

type Props = {
  tittle: string;
  data: string;
};

const Info = ({ tittle, data }: Props) => {
  return (
    <View style={styles.container}>
      <Text size={16}>{tittle}</Text>
      <Text size={22} color={COLORS.black}>
        {data}
      </Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
