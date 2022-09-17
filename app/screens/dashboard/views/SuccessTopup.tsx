import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Text } from '../../../components';
import { COLORS } from '../../../theme';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const SuccessTopup = ({ navigation }: any) => {
  const { bottom: paddingBottom, top: paddingTop } = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, paddingTop, paddingBottom }}>
      <View style={styles.content}>
        <View style={styles.circle}>
          <Icon name="check" size={56} color={COLORS.black} />
        </View>
        <View style={{ marginTop: 32 }}>
          <Text fontFamily="Poppins-Light" size={42} color={'#E6D6FF'}>
            ¡Recarga exitosa!
          </Text>
          <Text fontFamily="Poppins-Bold" size={52} color={'#FF3482'}>
            We delivery happiness!!
          </Text>
        </View>
      </View>
      <Button
        title="ok!"
        onPress={() => {
          navigation.navigate('Tab');
        }}
      />
    </View>
  );
};

export default SuccessTopup;

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
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
