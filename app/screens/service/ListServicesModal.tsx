import { StyleSheet, View, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderModal from './components/HeaderModal';
import Service from './components/Service';

const FAKE_PRODUCTS = [
  {
    id: '1',
    name: 'Facebook ads',
    icon: 'facebook',
    price: 800,
  },
  {
    id: '2',
    name: 'Google ads',
    icon: 'google',
    price: 800,
  },
  {
    id: '3',
    name: 'Social Media',
    icon: 'instagram',
    price: 299,
  },
  {
    id: '4',
    name: 'Web Development',
    icon: 'web',
    price: 999,
  },
  {
    id: '5',
    name: 'eComerce',
    icon: 'web',
    price: 3999,
  },
  {
    id: '6',
    name: 'Branding',
    icon: 'pencil',
    price: 299,
  },
  {
    id: '7',
    name: 'Hosting',
    icon: 'server',
    price: 35,
  },
  {
    id: '8',
    name: 'CRM',
    icon: 'server',
    price: 35,
  },
];

const ListServicesModal = ({ navigation }: any) => {
  const { bottom: paddingBottom } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingBottom }}>
      <HeaderModal
        icon={'close'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={FAKE_PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate('AddService', { service: { id: item.id, name: item.name } });
            }}
          >
            <Service {...item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default ListServicesModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
