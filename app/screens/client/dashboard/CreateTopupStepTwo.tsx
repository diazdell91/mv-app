/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ActivityIndicatorModal, Button, Loading } from '../../../components';
import { PRODUCTS } from '../../../graphql/products.graphql';
import { CREATE_TOPUP } from '../../../graphql/topup.grapgql';
import { ME } from '../../../graphql/user.graphql';
import { COLORS } from '../../../theme';
import TopupProduct from './components/TopupProduct';

const CreateTopupStepTwo = ({ navigation, route }: any) => {
  const { bottom: paddingBottom } = useSafeAreaInsets();
  const { phone } = route.params;
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const { data, loading, error } = useQuery(PRODUCTS, {
    variables: {
      input: {
        category: 'TOPUP',
      },
    },
    onCompleted(data) {
      const { docs } = data.products;
      setSelectedProduct(docs[1]);
    },
  });

  const [createTopup, { loading: sendLoading }] = useMutation(CREATE_TOPUP);

  const handleSendTopup = async () => {
    await createTopup({
      variables: {
        input: {
          client: phone,
          phone,
          productId: selectedProduct.id,
        },
      },
      onCompleted: (data) => {
        setTimeout(() => {
          navigation.navigate('SuccessTopup', { phone });
        }, 500);
      },
      onError: (error) => {
        console.log(error);
        setTimeout(() => {
          navigation.navigate('FailTopup', { phone });
        }, 500);
      },
      refetchQueries: [
        {
          query: ME,
        },
      ],
    });
  };

  if (loading) {
    return (
      <View style={{ ...styles.container, paddingTop: 12, paddingBottom }}>
        <Loading />
      </View>
    );
  }

  if (error) {
    console.log(error);
  }

  if (data) {
    const { products } = data;
    const { docs } = products;

    return (
      <View style={{ ...styles.container, paddingTop: 16, paddingBottom }}>
        <FlatList
          data={docs}
          renderItem={({ item }) => (
            <Pressable
              key={item._id}
              onPress={() => {
                setSelectedProduct(item);
              }}
            >
              <TopupProduct {...item} selected={item.id === selectedProduct?.id} />
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
        <Button
          disabled={!selectedProduct?.id}
          onPress={handleSendTopup}
          title="Crear recarga"
          style={{
            backgroundColor: !selectedProduct?.id ? COLORS.backgroundAlt : COLORS.primary,
          }}
        />
        <ActivityIndicatorModal loading={sendLoading} />
      </View>
    );
  }

  return null;
};

export default CreateTopupStepTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
  },
});
