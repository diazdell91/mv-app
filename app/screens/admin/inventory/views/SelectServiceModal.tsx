import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../../../theme';
import { Button, Text } from '../../../../components';
import Category from '../components/Category';
import { useQuery } from '@apollo/client';
import { PRODUCT_CATEGORYS } from '../../../../graphql/products.graphql';

const SelectServiceModal = ({ navigation, route }: any) => {
  const { top: paddingTop, bottom: paddingBottom } = useSafeAreaInsets();
  const [categorySelected, setCategorySelected] = useState<any>();
  const { item } = route.params;

  const { data, loading, error } = useQuery(PRODUCT_CATEGORYS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error...</Text>;

  if (data) {
    const { productsCategorys } = data;
    return (
      <View style={{ ...styles.container, paddingTop, paddingBottom }}>
        <View style={styles.header}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
            style={{ zIndex: 1 }}
          >
            <Icon name="close" size={32} color={COLORS.white} />
          </Pressable>
          <View
            style={{ flex: 1, marginLeft: -30, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text h4 size={14}>
              Selecciona una categoria
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <FlatList
            data={productsCategorys}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => {
              return (
                <Category
                  selected={categorySelected === item}
                  onSelect={(category: string) => {
                    setCategorySelected(category);
                  }}
                  name={item}
                />
              );
            }}
            centerContent={true}
            contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
          />
        </View>
        <View style={{ marginHorizontal: 6 }}>
          <Button
            title="Guardar"
            onPress={() => {
              navigation.navigate('UpdateProduct', {
                item: {
                  ...item,
                  category: categorySelected,
                },
              });
            }}
            style={{
              borderWidth: 1,
              borderColor: COLORS.white,
            }}
          />
        </View>
      </View>
    );
  }
};

export default SelectServiceModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginTop: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});
