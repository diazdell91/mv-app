import { StyleSheet, View, TouchableWithoutFeedback, Alert } from 'react-native';
import moment from 'moment';
import { Button, Text } from '../../../components';
import { COLORS, SIZES } from '../../../theme';
import topUpServices from '../../../services/topUpServices';

const TopUpActions = ({ route, navigation }: any) => {
  if (route.params.props) {
    const { _id, amountCup, phoneNumber, code, processingState, createdAt } = route.params.props;
    //const handleCancel = () => {};

    const handleConfirm = () => {
      topUpServices
        .updateTopup({ id: _id, processingState: 'COMPLETED' })
        .then((res) => {
          console.log(res);
          Alert.alert('Recarga confirmada', 'La recarga se ha confirmado correctamente', [
            {
              text: 'OK',
              onPress: () => {
                navigation.goBack();
              },
            },
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.goBack();
        }}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={{ padding: 16, justifyContent: 'center' }}>
              <Text size={18} fontFamily={'Poppins-Bold'} color={COLORS.fog}>
                {processingState}
              </Text>
              <Text size={18} fontFamily={'Poppins-Bold'} color={COLORS.gray}>
                {code.toUpperCase()}
              </Text>
              <Text size={36} fontFamily={'Poppins-Bold'} color={COLORS.white}>
                {phoneNumber}
              </Text>
              <Text size={32} fontFamily={'Poppins-Bold'} color={COLORS.white}>
                {amountCup} CUP
              </Text>
              <Text size={24}>{moment(createdAt).format('lll')}</Text>
            </View>
            <View style={{}}></View>
            <View style={styles.wrappperButton}>
              <Button
                title="Copiar número"
                onPress={() => {
                  Alert.alert('Copiar número', phoneNumber);
                  navigation.goBack();
                }}
                style={{ ...styles.button, backgroundColor: COLORS.fog }}
              />
              <Button title="Marcar Completada" onPress={handleConfirm} style={styles.button} />
              <Button
                title="Cancelar Recarga"
                onPress={() => {
                  Alert.alert('Estas seguro?', '', [
                    {
                      text: 'Cancelar',
                      style: 'cancel',
                    },
                    {
                      text: 'OK',
                      onPress: () => {
                        navigation.goBack();
                      },
                    },
                  ]);
                }}
                style={{ ...styles.button, backgroundColor: COLORS.caramel }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  return <View />;
};

export default TopUpActions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: COLORS.background,
    borderRadius: SIZES.m,
    padding: SIZES.m,
  },
  wrappperButton: {
    // flexDirection: 'row',
  },
  button: {},
});
