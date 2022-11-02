import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Input } from '../../../../components';
import { CREATE_PRODUCT, PRODUCTS } from '../../../../graphql/products.graphql';
import { COLORS } from '../../../../theme';

const CreateProductScreen = ({ navigation, route }: any) => {
  const { bottom: paddingBottom } = useSafeAreaInsets();

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [sendValue, setSendValue] = useState('');
  const [receiveValue, setReceiveValue] = useState('');
  const [price, setPrice] = useState('');
  const [commissionRate, setCommissionRate] = useState('');
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

  const validate = () => {
    return (
      category !== '' &&
      name !== '' &&
      description !== '' &&
      sendValue !== '' &&
      receiveValue !== '' &&
      price !== '' &&
      commissionRate !== ''
    );
  };

  const handleUpdateProduct = async () => {
    const product = {
      name,
      category,
      description,
    };

    Object.assign(product, {
      sendValue: parseFloat(sendValue),
      receiveValue: parseFloat(receiveValue),
      price: parseFloat(price),
      commissionRate: parseFloat(commissionRate),
    });

    await createProduct({
      variables: {
        input: product,
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
        navigation.navigate('Inventory');
      },
      onError: (error) => {
        console.log(error.message);
      },
    });
  };

  return (
    <View style={{ ...styles.container, paddingBottom }}>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always">
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
          placeholder="Nombre"
          onPressRight={() => setName('')}
          iconRight={name === '' ? undefined : 'close'}
          iconRightColor={COLORS.black}
          value={name}
          onChangeText={setName}
          maxLength={32}
        />
        <Input
          placeholder="Descripción"
          onPressRight={() => setDescription('')}
          iconRight={description === '' ? undefined : 'close'}
          iconRightColor={COLORS.black}
          value={description}
          onChangeText={setDescription}
          maxLength={32}
        />
        <Input
          keyboardType="numeric"
          autoFocus
          placeholder="Valor a Enviar"
          onPressRight={() => setSendValue('')}
          iconRight={sendValue === '' ? undefined : 'close'}
          iconRightColor={COLORS.black}
          value={sendValue.toString()}
          onChangeText={setSendValue}
          maxLength={32}
        />

        <Input
          keyboardType="numeric"
          autoFocus
          placeholder="Valor a Recibir"
          onPressRight={() => setReceiveValue('')}
          iconRight={receiveValue === '' ? undefined : 'close'}
          iconRightColor={COLORS.black}
          value={receiveValue.toString()}
          onChangeText={setReceiveValue}
          maxLength={32}
        />

        <Input
          keyboardType="numeric"
          autoFocus
          placeholder="Precio"
          onPressRight={() => setPrice('')}
          iconRight={price === '' ? undefined : 'close'}
          iconRightColor={COLORS.black}
          value={price.toString()}
          onChangeText={setPrice}
          maxLength={32}
        />

        <Input
          keyboardType="numeric"
          autoFocus
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
        disabled={!validate()}
        title="Crear Producto"
        style={{
          backgroundColor: !validate() ? COLORS.backgroundAlt : COLORS.primary,
        }}
      />
    </View>
  );
};

export default CreateProductScreen;

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
