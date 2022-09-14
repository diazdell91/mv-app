import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Button } from '../../components';
import { COLORS, SIZES } from '../../theme';
import Info from './components/Info';

const TopUpDetails = ({ router, navigation }: any) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.goBack();
      }}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Info tittle="ID" data="2200" />
          <Info tittle="ESTADO" data="COMPLETADA" />
          <Info tittle="TELÉFONO" data="5832482348" />
          <Info tittle="MONTO CUP" data="2200" />
          <Info tittle="FECHA DE CREADA" data="09/11/2022, 01:26 PM" />
          <Button
            title="Cerrar"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TopUpDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.xl,
    justifyContent: 'center',
  },
  content: {
    backgroundColor: COLORS.background,
    borderRadius: SIZES.m,
    padding: SIZES.m,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
