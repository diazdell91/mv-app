import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Header, Input, Product } from '../../components';
import { COLORS } from '../../theme';

const FAKE_PRODUCTS = [
  {
    id: '1',
    name: 'Facebook ads',
    icon: 'facebook',
    description: 'Publicidad en Facebook',
    price: 800,
  },
  {
    id: '2',
    name: 'Google ads',
    icon: 'google',
    description: 'Publicidad en Google',
    price: 800,
  },
  {
    id: '3',
    name: 'Social Media',
    icon: 'instagram',
    description: 'Social Media, Instagram, Facebook, GMB',
    price: 299,
  },
  {
    id: '4',
    name: 'Web Development',
    icon: 'web',
    description: 'Desarrollo web personalizado',
    price: 999,
  },
  {
    id: '5',
    name: 'eComerce',
    icon: 'web',
    description: 'Desarrollo de tiendas online',
    price: 3999,
  },
  {
    id: '6',
    name: 'Branding',
    icon: 'pencil',
    description: 'Diseño de marca',
    price: 299,
  },
  {
    id: '7',
    name: 'Hosting',
    icon: 'server',
    description: 'Hosting para tu sitio web',
    price: 35,
  },
];

const ProductScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Header
        iconRightName="plus-circle"
        iconRightColor={COLORS.placeHolder}
        iconRightPress={() => {
          navigation.navigate('CreateProduct');
        }}
      >
        <Input
          placeholder="Buscar..."
          autoFocus={false}
          iconLeft="magnify"
          iconLeftColor={COLORS.white}
          inputStyle={{
            borderRadius: 56,
            backgroundColor: COLORS.placeHolder,
            color: COLORS.white,
          }}
          style={{ borderRadius: 56, marginHorizontal: 8, backgroundColor: COLORS.placeHolder }}
          //onChangeText={onSearch}
        />
      </Header>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={FAKE_PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Product {...item} />}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
