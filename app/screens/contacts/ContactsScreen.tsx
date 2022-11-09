import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Contact, Header, Input } from '../../components';
import { COLORS } from '../../theme';

const FAKE_CONTACTS = [
  {
    id: '1',
    type: 'CLIENT',
    name: 'GRC Lending',
    phone: '786-555-5555',
    description: 'Lending',
    contactName: 'John Doe',
    contactPhone: '786-555-5555',
    contactEmail: 'grc@mail.com',
    sercices: [
      {
        id: '1',
        name: 'Facebook ads',
      },
      {
        id: '2',
        name: 'Google ads',
      },
      {
        id: '3',
        name: 'Social Media',
      },
    ],
  },
  {
    id: '2',
    type: 'CLIENT',
    name: 'Estrella Medical Center',
    phone: '786-555-5555',
    description: 'Medical Center',
    contactName: 'John Doe',
    contactPhone: '786-555-5555',
    contactEmail: 'grc@mail.com',
    sercices: [
      {
        id: '1',
        name: 'Facebook ads',
      },
      {
        id: '2',
        name: 'Google ads',
      },
      {
        id: '3',
        name: 'Social Media',
      },
    ],
  },
  {
    id: '3',
    type: 'CLIENT',
    name: 'Thunder Restoration',
    phone: '786-555-5555',
    description: 'Construction',
    contactName: 'John Doe',
    contactPhone: '786-555-5555',
    contactEmail: 'grc@mail.com',
    sercices: [
      {
        id: '1',
        name: 'Facebook ads',
      },
      {
        id: '2',
        name: 'Google ads',
      },
      {
        id: '3',
        name: 'Social Media',
      },
    ],
  },
];

const ContactsScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Header
        iconRightName="plus-circle"
        iconRightColor={COLORS.placeHolder}
        iconRightPress={() => {
          navigation.navigate('CreateContact');
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
        data={FAKE_CONTACTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Contact {...item} />}
      />
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
