import { Image, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from '../../../components';
import { COLORS, SIZES } from '../../../theme';
import Layout from '../../../theme/Layout';

const LogoContainer = () => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop }}>
      <Image
        source={require('../../../../assets/logo.png')}
        style={{
          width: Layout.window.width * 0.15,
          height: Layout.window.width * 0.15,
        }}
      />
      <Text fontFamily="Poppins-Bold" size={22} color={COLORS.white} style={{ marginTop: 16 }}>
        Miami Viral Agency
      </Text>
    </View>
  );
};

export default LogoContainer;

const styles = StyleSheet.create({
  container: {
    paddingTop: SIZES.xl * 2,
    marginTop: SIZES.xl,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
