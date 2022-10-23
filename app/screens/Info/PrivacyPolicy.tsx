import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';

const PrivacyPolicy = ({ route }: any) => {
  const { title, content } = route.params;
  const { top: paddingTop, bottom } = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, marginTop: paddingTop }}>
      <Text h2 align="center">
        {title}
      </Text>
      <ScrollView
        contentContainerStyle={{ marginTop: 100 }}
        contentInset={{
          bottom: bottom + 100,
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={200}
      >
        <Text align="center" h3>
          {content}
        </Text>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
