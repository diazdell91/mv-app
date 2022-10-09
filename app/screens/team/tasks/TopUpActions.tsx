/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import moment from 'moment';
import { Button, Text } from '../../../components';
import { COLORS, SIZES } from '../../../theme';
import { useMutation } from '@apollo/client';
import { CANCEL_TOPUP, COMPLETE_TOPUP, REASSIGN_TOPUP } from '../../../graphql/topup.grapgql';

const TopUpActions = ({ route, navigation }: any) => {
  const [cancel, { loading: cancelLoading }] = useMutation(CANCEL_TOPUP);
  const [completed] = useMutation(COMPLETE_TOPUP);
  const [reassign] = useMutation(REASSIGN_TOPUP);

  if (route.params.topup) {
    const { id, amountCup, phone, code, processingState, createdAt } = route.params.topup;

    const copyToClipboard = async () => {
      await Clipboard.setStringAsync(phone);
      Alert.alert(`${phone} ha sido copiado al portapapeles`);
    };

    const handleCancel = () => {
      Alert.alert(
        'Reportar error recarga',
        '¿Estás seguro de que quieres reportar esta recarga?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Aceptar',
            onPress: async () => {
              try {
                await cancel({
                  variables: {
                    id,
                  },
                });
                navigation.goBack();
              } catch (error) {
                console.log(error);
              }
            },
          },
        ],
        { cancelable: false },
      );
    };

    const handleCompleted = () => {
      Alert.alert(
        'Reportar error recarga',
        '¿Estás seguro de que quieres reportar esta recarga?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Aceptar',
            onPress: async () => {
              try {
                await completed({
                  variables: {
                    id,
                  },
                });
                navigation.goBack();
              } catch (error) {
                console.log(error);
              }
            },
          },
        ],
        { cancelable: false },
      );
    };

    const handleReassign = () => {
      Alert.alert(
        'Desechar',
        '¿Estás seguro de que rechazar esta tarea?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Aceptar',
            onPress: async () => {
              try {
                await reassign({
                  variables: {
                    id,
                  },
                });
                navigation.goBack();
              } catch (error) {
                console.log(error);
              }
            },
          },
        ],
        { cancelable: false },
      );
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
                {phone}
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
                onPress={copyToClipboard}
                style={{ ...styles.button, backgroundColor: COLORS.fog }}
              />
              <Button
                title="Reportar error"
                onPress={handleCancel}
                style={{ ...styles.button, backgroundColor: COLORS.strawberry }}
              />
              <Button title="Marcar Completada" onPress={handleCompleted} style={styles.button} />
              <Button
                title="Liberar"
                onPress={handleReassign}
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