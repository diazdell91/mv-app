import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { COLORS, SIZES } from '../theme';

interface Props {
  data: { label: string; value: string }[];
  iconLeft?: React.ComponentProps<typeof Icon>['name'];
  iconLeftColor?: string;
  //otherProps?: React.ComponentProps<typeof RNPickerSelect>;
  onChange?: React.ComponentProps<typeof RNPickerSelect>['onValueChange'];
}

const InputDropDown = (props: Props) => {
  const {
    data = [{ label: '', value: '' }],
    iconLeft,
    iconLeftColor = COLORS.gray,
    onChange,
    ...otherProps
  } = props;

  return (
    <View style={styles.container}>
      {iconLeft && (
        <View style={styles.iconLeft}>
          <Icon name={iconLeft} color={iconLeftColor} size={32} />
        </View>
      )}
      <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        fixAndroidTouchableBug
        doneText={'Cerrar'}
        style={{
          inputIOS: { ...styles.inputIOS, paddingLeft: iconLeft ? 52 : 16 },
          inputAndroid: { ...styles.inputAndroid, paddingLeft: iconLeft ? 52 : 16 },
        }}
        //placeholder={{ label: `${placeholder}`, value: '' }}
        items={data}
        onValueChange={onChange}
        {...otherProps}
      />
    </View>
  );
};

export default InputDropDown;

const styles = StyleSheet.create({
  //  container:
  container: {
    height: SIZES.inputHeight,
    minHeight: SIZES.inputHeight,
    alignItems: 'center',
    width: 'auto',
    marginVertical: SIZES.xs,
    borderWidth: 0.5,
    borderColor: COLORS.blackOpacity,
    borderRadius: 16,
  },

  //
  iconRight: {
    position: 'absolute',
    top: 12,
    right: SIZES.s,
  },
  iconLeft: {
    zIndex: 1,
    position: 'absolute',
    left: SIZES.s,
    top: 12,
  },
  //platfrom: ios
  inputIOS: {
    height: SIZES.inputHeight,
    width: '100%',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: COLORS.black,
  },
  //platfrom: android
  inputAndroid: {
    height: SIZES.inputHeight,
    width: '100%',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: COLORS.black,
  },
});
