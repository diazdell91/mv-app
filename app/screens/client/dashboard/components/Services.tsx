//import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { Text } from '../../../../components';
import IconService from './IconService';

const DEFAULT_SERVICES = [
  {
    icon: 'wifi-sync',
    name: 'Internet',
    allowed: true,
  },
  {
    icon: 'food-variant',
    name: 'Mercado',
    allowed: true,
  },
  {
    icon: 'airplane',
    name: 'Vuelos',
    allowed: true,
  },
  {
    icon: 'credit-card-chip',
    name: 'Crédito',
    allowed: true,
  },
  {
    icon: 'train-car',
    name: 'Car',
    allowed: true,
  },
  {
    icon: 'dots-horizontal-circle',
    name: 'Otros',
    allowed: true,
  },
];
const Services = (props: any) => {
  const { services = DEFAULT_SERVICES, title = 'Lista de servicios' } = props;
  const navigation = useNavigation<any>();

  let icon = 'dots-horizontal-circle';

  services.forEach((item: any, index: number) => {
    switch (item.category) {
      case 'FOODDELIVERY':
        icon = 'food';
        return;
      case 'AIRPLANETICKET':
        icon = 'airplane';
        return;
      case 'HOTELBOOKING':
        icon = 'bed';
        return;
    }
  });

  return (
    <View style={styles.container}>
      <Text size={22} style={{ marginStart: 16 }}>
        {title}
      </Text>
      <View style={styles.wrapper}>
        <IconService
          onPress={() => {
            navigation.navigate('CreateTopupStepOne');
          }}
          name="Recarga Mobil"
          icon="cellphone-charging"
        />
        {services.map((item: any, index: number) => (
          <IconService key={index} disabled={item.allowed} name={item.category} icon={icon} />
        ))}
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
