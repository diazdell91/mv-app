import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Input, Text } from '../../components';
import { COLORS } from '../../theme';
import useKeyboardHeight from '../../hooks/useKeyboardHeight';

const PHONE_REGEX = /^5[1-9]{1}[0-9]{6}$/;

const CreateTopupStepOne = ({ navigation }: any) => {
  const keyboardHeight = useKeyboardHeight();
  const [phone, setPhone] = useState('');

  const handleConfirmPhone = () => {
    navigation.navigate('CreateTopupStepTwo', { phone });
  };

  return (
    <View style={{ ...styles.container, paddingTop: 16 }}>
      <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="always">
        <Input
          autoFocus
          blurOnSubmit={false}
          placeholder="Número de celular"
          iconRight="cellphone-charging"
          iconRightColor={COLORS.mineShaft}
          iconLeftComponent={
            <View style={styles.countryCode}>
              <Text fontFamily="Poppins-Bold" color={COLORS.tuna} size={24}>
                +53
              </Text>
            </View>
          }
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          maxLength={8}
        />
      </ScrollView>

      <Button
        disabled={!PHONE_REGEX.test(phone)}
        title="Confirmar número"
        onPress={handleConfirmPhone}
        style={{
          bottom: keyboardHeight,
          backgroundColor: !PHONE_REGEX.test(phone) ? COLORS.backgroundAlt : COLORS.primary,
        }}
      />
    </View>
  );
};

export default CreateTopupStepOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  countryCode: {
    flexDirection: 'row',
    marginStart: 8,
    paddingEnd: 8,
    borderRightWidth: 1,
    borderRightColor: COLORS.mineShaft,
  },
});
