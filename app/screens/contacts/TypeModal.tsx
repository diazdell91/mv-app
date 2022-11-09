import { StyleSheet, View, Pressable } from 'react-native';
import { Text } from '../../components';
import { COLORS } from '../../theme';

const TypeModal = ({ navigation }: any) => {
  const type = ['CLIENT', 'VENDOR', 'EMPLOYEE', 'OTHER'];

  return (
    <View style={styles.container}>
      {type.map((item, index) => {
        return (
          <Pressable
            key={index}
            onPress={() => {
              navigation.navigate('CreateContact', { type: item });
            }}
            style={styles.box}
          >
            <Text size={18} fontFamily="Poppins-Bold">
              {item}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TypeModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 1,
  },
});
