//import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { Text } from '../../../../components';
import { COLORS } from '../../../../theme';
import IconService from './IconService';

const Services = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text size={22} style={{ marginStart: 16 }}>
        Lista de servicios
      </Text>
      <View style={styles.wrapper}>
        <IconService
          onPress={() => {
            navigation.navigate('CreateTopupStepOne');
          }}
          name="Recarga Mobil"
          icon="cellphone-charging"
        />
        <IconService disabled name="Internet" icon="wifi-sync" />
        <IconService disabled name="Mercado" icon="food-variant" />
        <IconService disabled name="Vuelos" icon="airplane" />
        <IconService disabled name="Credito" icon="credit-card-chip" />
        <IconService disabled name="Car" icon="train-car" />
        <IconService disabled name="Otros" icon="dots-horizontal-circle" />
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
  },
  wrapper: {
    marginTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginHorizontal: 0,
  },
});
