import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Input, Text } from '../../../components';
import { PRODUCT_CATEGORYS } from '../../../graphql/products.graphql';
import { UPDATE_USER } from '../../../graphql/user.graphql';
import ServicesCategorys from './components/ServicesCategorys';

const UserServicesScreen = ({ navigation, route }: any) => {
  const { bottom: paddingBottom } = useSafeAreaInsets();
  const { id } = route.params;
  const [categorys, setCategorys] = useState([]);
  const [selectedCategorys, setSelectedCategorys] = useState([]);

  const { data } = useQuery(PRODUCT_CATEGORYS);
  const [updateServices, { loading }] = useMutation(UPDATE_USER);

  const handleCategory = (category) => {
    const index = categorys.indexOf(category);
    if (index >= 0) {
      categorys.splice(index, 1);
    } else {
      categorys.push(category);
    }
    setCategorys([...categorys]);
  };

  const handleSelectedCategory = (category) => {
    const index = selectedCategorys.findIndex((item) => item.category === category);
    if (index >= 0) {
      selectedCategorys.splice(index, 1);
    } else {
      selectedCategorys.push({
        category,
        commissionRate: 0,
      });
    }
    setSelectedCategorys([...selectedCategorys]);
  };

  const handleUpdateServices = async () => {
    await updateServices({
      variables: {
        input: {
          id,
          servicesAllowed: selectedCategorys,
        },
      },
      onCompleted: (data) => {
        navigation.navigate('SuccessUser');
      },
      onError: (error) => {
        console.log('error', error);
      },
    });
  };

  if (data) {
    const { productsCategorys } = data;
    return (
      <View style={{ ...styles.container, paddingBottom }}>
        <View style={styles.tableHearder}>
          <View>
            <Text fontFamily="Poppins-Bold">Servicio</Text>
          </View>
          <View>
            <Text fontFamily="Poppins-Bold">Comisión</Text>
          </View>
        </View>
        <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={{ paddingTop: 16 }}>
          {productsCategorys.map((category, index) => (
            <View
              key={index}
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ServicesCategorys
                onPress={() => {
                  handleCategory(category), handleSelectedCategory(category);
                }}
                category={category}
                isAdded={categorys.includes(category)}
              />
              <Input
                placeholder="0%"
                editable={categorys.includes(category)}
                flex
                maxLength={2}
                keyboardType={'numeric'}
                value={selectedCategorys.find((item) => item.category === category)?.commissionRate}
                onChangeText={(text) => {
                  const index = selectedCategorys.findIndex((item) => item.category === category);
                  selectedCategorys[index].commissionRate = parseInt(text);
                  setSelectedCategorys([...selectedCategorys]);
                }}
              />
            </View>
          ))}
        </ScrollView>
        <Button
          disabled={categorys.length < 1}
          title="Agregar Servicios"
          onPress={handleUpdateServices}
        />
      </View>
    );
  }
  return null;
};

export default UserServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },
  tableHearder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 4,
    paddingTop: 16,
    marginHorizontal: 12,
  },
});
