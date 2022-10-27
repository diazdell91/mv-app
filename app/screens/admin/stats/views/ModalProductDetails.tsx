import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../../../theme';
import { Text } from '../../../../components';

export default function ModalProductDetails() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: COLORS.white, width: '100%', borderRadius: 8, padding: 12 }}>
        <Text size={28}>Datos del servicio</Text>
        <View style={{ borderBottomColor: COLORS.gray, borderBottomWidth: 0.4 }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.blackOpacity,
    paddingHorizontal: 12,
  },
});
