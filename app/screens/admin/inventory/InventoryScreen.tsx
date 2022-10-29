import { Alert, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { PRODUCTS } from '../../../graphql/products.graphql';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderFilter from '../../insights/components/HeaderFilter';
import TopupItem from './components/TopupItem';
import { COLORS, SIZES } from '../../../theme';
import { Header, Input } from '../../../components';

export default function ProductsScreen({ navigation }: any) {
  const [filtered, setFiltered] = useState<any[]>([]);
  const { data, loading, error } = useQuery(PRODUCTS, {
    variables: {
      input: {},
    },
    onCompleted: (data) => {
      setFiltered(data.products.docs);
    },
  });
  const onSearch = (query: string) => {
    const result = data.products.docs.filter(
      (item: any) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        item.name.toLowerCase().includes(query.toLocaleLowerCase()) ||
        item.description.toLowerCase().includes(query.toLocaleLowerCase()),
    );
    setFiltered(result);
  };

  const onWatch = () => {
    console.log('watch');
  };

  const onUpdate = (item: any) => {
    navigation.navigate('UpdateProduct', {
      item,
    });
  };

  const onRemove = () => {
    Alert.alert('Info', '¿Desea eliminar un producto del inventario?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Eliminar',
        onPress: () => {},
      },
    ]);
  };

  const onComplete = () => {};
  const onReassign = () => {};
  const onCancel = () => {};
  const createProduct = () => {
    navigation.navigate('CreateProduct');
  };

  return data ? (
    <View style={{ ...styles.container }}>
      <Header
        iconRightName="plus-circle"
        iconRightColor={COLORS.placeHolder}
        iconRightPress={createProduct}
      >
        <Input
          placeholder="Buscar..."
          autoFocus={false}
          iconLeft="magnify"
          iconLeftColor={COLORS.white}
          inputStyle={styles.input}
          style={styles.inputContainer}
          onChangeText={onSearch}
        />
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: SIZES.l, marginHorizontal: SIZES.xs, flex: 1 }}>
          {filtered.map((item: any, index: number) => (
            <TopupItem
              onWatch={onWatch}
              onComplete={onComplete}
              onUpdate={onUpdate}
              onRemove={onRemove}
              onReassign={onReassign}
              onCancel={onCancel}
              key={index}
              item={item}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  ) : (
    <></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gradient,
  },
  inputContainer: { borderRadius: 56, marginHorizontal: 8, backgroundColor: COLORS.placeHolder },
  input: {
    borderRadius: 56,
    backgroundColor: COLORS.placeHolder,
    color: COLORS.white,
  },
});
