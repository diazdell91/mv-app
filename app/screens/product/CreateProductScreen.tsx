import { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Toggle } from '../../components';
import { COLORS } from '../../theme';

const CreateProductScreen = () => {
  const toggleRef = useRef(null);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState([
    {
      price: 0,
    },
  ]);

  return (
    <View style={styles.container}>
      <Input placeholder="Nombre del servicio" value={name} onChangeText={setName} />
      <Input
        placeholder="Descripcion del servicio"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={2}
        style={{ height: 56 * 2 }}
        inputStyle={{ textAlignVertical: 'top', height: 56 * 2 }}
      />
      {price.map((item, index) => (
        <Input
          key={index}
          placeholder="Precio"
          value={item.price.toString()}
          onChangeText={(text) => {
            const newPrice = [...price];
            newPrice[index].price = parseInt(text);
            if (/^\d+$/.test(text)) {
              setPrice(newPrice);
            }
          }}
          keyboardType="numeric"
          iconRight={index === price.length - 1 ? 'plus' : 'trash-can'}
          iconRightColor={COLORS.black}
          onPressRight={() => {
            if (index === price.length - 1) {
              setPrice([...price, { price: 0 }]);
            } else {
              const newPrice = [...price];
              newPrice.splice(index, 1);
              setPrice(newPrice);
            }
          }}
        />
      ))}

      <Toggle ref={toggleRef} title="Servicio recurrente" />
    </View>
  );
};

export default CreateProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});
