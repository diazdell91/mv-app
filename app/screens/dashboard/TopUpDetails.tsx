import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import moment from 'moment';
import { Button } from '../../components';
import { COLORS, SIZES } from '../../theme';
import Info from './components/Info';

const TopUpDetails = ({ route, navigation }: any) => {
  console.log(route.params.props);
  if (route.params.props) {
    const code = route.params.props.code;
    const amount = route.params.props.amount;
    const phoneNumber = route.params.props.phoneNumber;
    const processingState = route.params.props.processingState;
    const createAt = route.params.props.createAt;
    return (
      <TouchableWithoutFeedback style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Info tittle="ID" data={code.toUpperCase()} />
            <Info tittle="ESTADO" data={processingState} />
            <Info tittle="TELÉFONO" data={phoneNumber} />
            <Info tittle="MONTO CUP" data={amount} />
            <Info tittle="FECHA DE CREADA" data={moment(createAt).format('lll')} />
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
  }
  return <View></View>;
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
