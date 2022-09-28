import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import topUpServices from '../../../services/topUpServices';
import poroductService from '../../../services/poroductService';
import { Button, Loading } from '../../../components';
import { COLORS } from '../../../theme';
import TopupProduct from './components/TopupProduct';

const CreateTopupStepTwo = ({ navigation, route }: any) => {
  const { bottom: paddingBottom } = useSafeAreaInsets();
  const { phone } = route.params;
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<any>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const getProductTopup = () => {
    setLoading(true);
    poroductService
      .getProducts()
      .then((res) => {
        setProducts(res);
        setSelectedProduct(res.products[1]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCreateTopup = () => {
    console.log('handleCreateTopup');
    topUpServices
      .createTopup(phone, parseInt(selectedProduct.priceAlt), parseInt(selectedProduct.price))
      .then((res) => {
        console.log(res);
        navigation.navigate('SuccessTopup');
      })
      .catch((err) => {
        console.log(err);
        navigation.navigate('FailTopup');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    return getProductTopup();
  }, []);

  if (loading) {
    return (
      <View style={{ ...styles.container, paddingTop: 16, paddingBottom }}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={{ ...styles.container, paddingTop: 16, paddingBottom }}>
      <ScrollView keyboardShouldPersistTaps="always">
        {products?.products?.map((item: any) => (
          <Pressable
            key={item._id}
            onPress={() => {
              setSelectedProduct(item);
            }}
          >
            <TopupProduct {...item} selected={item._id === selectedProduct._id} />
          </Pressable>
        ))}
      </ScrollView>
      <Button title="Crear recarga" onPress={handleCreateTopup} />
    </View>
  );
};

export default CreateTopupStepTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
  },
});
