import { useState } from 'react';
import { StyleSheet, View, Pressable, ViewStyle } from 'react-native';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Text from './Text';
import { COLORS, SIZES } from '../theme';
import { AntDesign as Icon } from '@expo/vector-icons';

interface ValueProps {
  label: string;
  value: Date;
}

interface Props {
  placeholder?: string;
  value?: string;
  maximumDate?: Date;
  minimumDate?: Date;
  onChangeDate?: (value: ValueProps) => void;
  style?: ViewStyle;
}

const DatePicker = (props: Props) => {
  const {
    style,
    placeholder = 'Selecciona ...',
    value = moment(),
    minimumDate,
    maximumDate,
    onChangeDate,
  } = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return (
    <Pressable onPress={showDatePicker} style={styles.container}>
      <View style={[styles.inputContainer, style]}>
        <Text style={{ ...styles.textValue }} color={value ? COLORS.placeHolder : COLORS.gray}>
          {value ? value : placeholder}
        </Text>
      </View>
      <View style={styles.iconLeft}>
        <Icon name={'calendar'} size={28} color={COLORS.placeHolder} />
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={'date'}
        display="inline"
        onConfirm={(date: Date) => {
          if (onChangeDate != null) {
            const dateFormatted = moment(date).format('MM-DD-YYYY');
            const value = moment(date).toDate();
            onChangeDate({ label: dateFormatted, value });
          }
          hideDatePicker();
        }}
        onCancel={hideDatePicker}
        locale="es_ES"
        cancelTextIOS="Cancelar"
        confirmTextIOS="Confirmar"
        minimumDate={minimumDate ? minimumDate : moment().subtract(2, 'months').toDate()}
        maximumDate={maximumDate ? maximumDate : new Date()}
      />
    </Pressable>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
    margin: SIZES.xs,
  },
  inputContainer: {
    height: SIZES.inputHeight,
    width: '100%',
    backgroundColor: COLORS.white,
    paddingLeft: SIZES.m,
    justifyContent: 'center',
    marginVertical: SIZES.xs,
    borderWidth: 0.5,
    borderColor: COLORS.blackOpacity,
    borderRadius: 16,
  },
  iconLeft: {
    position: 'absolute',
    right: SIZES.s,
    backgroundColor: COLORS.white,
  },
  textValue: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
});
