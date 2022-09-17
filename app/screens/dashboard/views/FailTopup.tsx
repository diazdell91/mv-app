import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Text } from '../../../components';
import { COLORS } from '../../../theme';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const FailTopup = ({ navigation }: any) => {
  const { bottom: paddingBottom, top: paddingTop } = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, paddingTop, paddingBottom }}>
      <View style={styles.content}>
        <View style={styles.circle}>
          <Icon name="widgets-outline" size={56} color={COLORS.white} />
        </View>
        <View style={{ marginTop: 32 }}>
          <Text fontFamily="Poppins-Light" size={42} color={'#E6D6FF'}>
            ¡Upss algo no salio bien!
          </Text>
          <Text fontFamily="Poppins-Bold" size={42} color={'#FF3482'}>
            Intentelo de nuevo!
          </Text>
        </View>
      </View>
      <Button
        title="Volver"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default FailTopup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    backgroundColor: '#FF3482',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
