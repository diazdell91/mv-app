import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '../../components';
import { COLORS } from '../../theme';
import LogoContainer from './components/LogoContainer';

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={{ flex: 1 }}>
          <ScrollView
            keyboardShouldPersistTaps="always"
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={200}
          >
            <View>
              <LogoContainer />
              <Text size={12} color={COLORS.white} style={{ alignSelf: 'center' }}>
                V(0.0.1)
              </Text>
            </View>
            {children}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});
