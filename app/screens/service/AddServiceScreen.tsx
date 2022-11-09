import { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from '../../components';
import Service from './components/Service';

type Props = {
  route: any;
  navigation: any;
};

const AddServiceScreen = (props: Props) => {
  const { route, navigation } = props;
  const { params } = route;
  const id = params?.id;

  const [activeServices, setActiveServices] = useState([
    {
      id: '',
      name: 'null',
    },
  ]);

  const handleAddService = useCallback(
    (service: { id: string; name: string }) => {
      setActiveServices([...activeServices, service]);
    },
    [activeServices],
  );

  useEffect(() => {
    if (route?.params?.service) {
      const service = route.params.service;
      handleAddService(service);
    }
  }, [route?.params?.service]);

  return (
    <View style={styles.container}>
      {activeServices.map((service) => (
        <Text key={service.id}>{service.name}</Text>
      ))}
      <Button
        title="Agregar Servicio"
        onPress={() => {
          navigation.navigate('ListServices', { id });
        }}
      />
      <Button
        title="Agregar Empleado"
        onPress={() => {
          navigation.navigate('ListServices', { id });
        }}
      />
    </View>
  );
};

export default AddServiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
