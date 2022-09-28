import { StyleSheet, View } from 'react-native';
import * as Application from 'expo-application';
import { Text } from '../../../components';

const Version = () => {
  return (
    <View style={styles.container}>
      <Text fontFamily="Poppins-ExtraLight">{Application.applicationName}</Text>
      <Text
        size={12}
      >{`Versión ${Application.nativeApplicationVersion}(${Application.nativeBuildVersion})`}</Text>
    </View>
  );
};

export default Version;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
});
