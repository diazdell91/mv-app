import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, SelectOnModal } from '../../components';

const CreateContactScreen = ({ navigation, route }: any) => {
  const [type, setType] = useState('CLIENT');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (route.params?.type) {
      setType(route.params.type);
    }
  }, [route.params?.type]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <SelectOnModal
          placeholder={type}
          onPress={() => {
            navigation.navigate('ContactType');
          }}
        />
        <Input placeholder="*Nombre del negocio" value={name} onChangeText={setName} />
        <Input placeholder="*Telefono de negocio" value={phone} onChangeText={setPhone} />
        <Input placeholder="*Email de negocio" value={email} onChangeText={setEmail} />
        <Input placeholder="Categoria" value={category} onChangeText={setCategory} />
      </View>
      <Button title="Crear contacto" />
    </View>
  );
};

export default CreateContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});
