import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMutation } from '@apollo/client';
import { PRODUCTS, UPDATE_PRODUCT } from '../../../../graphql/products.graphql';
import { Button, Input } from '../../../../components';
import { COLORS } from '../../../../theme';

const UpdateProductScreen = ({ navigation, route }: any) => {
  const { bottom: paddingBottom } = useSafeAreaInsets();
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [sendValue, setSendValue] = useState('0');
  const [receiveValue, setReceiveValue] = useState('0');
  const [price, setPrice] = useState('0');
  const [commissionRate, setCommissionRate] = useState('0');
  const [product, setProduct] = useState<any>();

  useEffect(() => {
    if (route.params?.item) {
      const { item } = route.params;
      setCategory(item.category);
      setName(item.name);
      setDescription(item.description);
      setSendValue(item.sendValue);
      setReceiveValue(item.receiveValue);
      setPrice(item.price);
      setCommissionRate(item.commissionRate);
      setProduct(item);
    }
  }, [route.params?.item]);

  const handleUpdateProduct = async () => {
    const newProduct = {
      name,
      category,
      description,
    };

    Object.assign(newProduct, {
      skuCode: product.skuCode,
      sendValue: parseFloat(sendValue),
      receiveValue: parseFloat(receiveValue),
      price: parseFloat(price),
      commissionRate: parseFloat(commissionRate),
    });

    await updateProduct({
      variables: {
        input: newProduct,
      },
      refetchQueries: [
        {
          query: PRODUCTS,
          variables: {
            input: {},
          },
        },
      ],
      onCompleted: (data: any) => {
        console.log(data);
        navigation.navigate('Inventory');
      },
      onError: (error) => {
        console.log(error.message);
      },
    });
  };

  return (
    <View style={{ ...styles.container, paddingBottom }}>
      <ScrollView keyboardShouldPersistTaps="always">
        <Input
          label="Categoria"
          editable={false}
          placeholder="Categoría"
          onPressRight={() => {
            navigation.navigate('SelectService', {
              item: product,
            });
          }}
          iconRight={'chevron-down'}
          iconRightColor={COLORS.black}
          value={category}
        />

        <Input
          label="Nombre"
          placeholder="Nombre"
          onPressRight={() => setName('')}
          iconRight={name === '' ? undefined : 'close'}
          iconRightColor={COLORS.black}
          value={name}
          onChangeText={setName}
          maxLength={32}
        />
        <Input
          label="Descripción"
          placeholder="Descripción"
          onPressRight={() => setDescription('')}
          iconRight={description === '' ? undefined : 'close'}
          iconRightColor={COLORS.black}
          value={description}
          onChangeText={setDescription}
          maxLength={32}
        />
        <Input
          label="Valor de envío"
          keyboardType="numeric"
          placeholder="Valor a Enviar"
          onPressRight={() => setSendValue('')}
          iconRight={sendValue === '' ? undefined : 'close'}
          iconRightColor={COLORS.black}
          value={sendValue.toString()}
          onChangeText={setSendValue}
          maxLength={32}
        />

        <Input
          label="Valor de recepción"
          keyboardType="numeric"
          placeholder="Valor a Recibir"
          onPressRight={() => setReceiveValue('')}
          iconRight={receiveValue === '' ? undefined : 'close'}
          iconRightColor={COLORS.black}
          value={receiveValue.toString()}
          onChangeText={setReceiveValue}
          maxLength={32}
        />

        <Input
          label="Precio"
          keyboardType="numeric"
          placeholder="Precio"
          onPressRight={() => setPrice('')}
          iconRight={price === '' ? undefined : 'close'}
          iconRightColor={COLORS.black}
          value={price.toString()}
          onChangeText={setPrice}
          maxLength={32}
        />

        <Input
          label="Comisión"
          keyboardType="numeric"
          placeholder="Comisión"
          onPressRight={() => setCommissionRate('')}
          iconRight={commissionRate === '' ? undefined : 'close'}
          iconRightColor={COLORS.black}
          value={commissionRate.toString()}
          onChangeText={setCommissionRate}
          maxLength={32}
        />
      </ScrollView>
      <Button
        onPress={handleUpdateProduct}
        //disabled={!validate()}
        title="Actualizar Producto"
        style={{
          backgroundColor: COLORS.primary,
        }}
      />
    </View>
  );
};

export default UpdateProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  select: {
    width: '45%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 32,
    marginHorizontal: 8,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
