import moment from 'moment';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Header, Text } from '../../../components';
import DatePicker from '../../../components/DatePicker';
import { COLORS } from '../../../theme';

const FilterArchiveScreen = ({ navigation }: any) => {
  const { bottom: paddingBottom } = useSafeAreaInsets();
  const [startOfDate, setStartOfDate] = useState({ label: '', value: new Date() });
  const [endOfDate, setEndOfDate] = useState({ label: '', value: new Date() });
  const [processingState, setProcessingState] = useState('COMPLETED');

  const handleFilter = () => {
    navigation.navigate('Informes', {
      startOfDate: startOfDate.value.toDateString(),
      endOfDate: endOfDate.value.toDateString(),
      processingState,
    });
  };
  return (
    <View style={{ ...styles.container, paddingBottom }}>
      <Header
        title="Filtro"
        iconRightName="close"
        iconRightPress={() => {
          navigation.goBack();
        }}
        iconRightColor={COLORS.placeHolder}
        style={styles.header}
      />
      <ScrollView>
        <View style={{ marginHorizontal: 8, marginTop: 8 }}>
          <Text fontFamily="Poppins-Bold">Rango de fechas</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <DatePicker
            placeholder="Desde"
            value={startOfDate.label}
            onChangeDate={(date) => {
              if (moment(date.value).isBefore(endOfDate.value)) {
                setStartOfDate(date);
              } else {
                setStartOfDate(date);
                setEndOfDate(date);
              }
            }}
          />
          <DatePicker
            placeholder="Hasta"
            value={endOfDate.label}
            onChangeDate={(date) => {
              setEndOfDate(date);
            }}
            minimumDate={startOfDate.value}
          />
        </View>
        <View style={{ marginHorizontal: 8, marginTop: 8 }}>
          <Text fontFamily="Poppins-Bold">Estado</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderColor: COLORS.stornGray,
            borderWidth: 1,
            borderRadius: 56,
            marginHorizontal: 8,
            marginTop: 8,
          }}
        >
          <Pressable
            onPress={() => setProcessingState('PENDING')}
            style={{
              ...styles.select,
              backgroundColor: processingState === 'PENDING' ? COLORS.caramel : COLORS.white,
            }}
          >
            <Text>Pendiente</Text>
          </Pressable>
          <Pressable
            onPress={() => setProcessingState('COMPLETED')}
            style={{
              ...styles.select,
              backgroundColor: processingState === 'COMPLETED' ? COLORS.caramel : COLORS.white,
            }}
          >
            <Text>Completada</Text>
          </Pressable>
        </View>
      </ScrollView>
      <Button title="Mostrar resultados" onPress={handleFilter} />
    </View>
  );
};

export default FilterArchiveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.fog,
    justifyContent: 'center',
    alignItems: 'center',
  },
  select: {
    width: '45%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 32,
    marginHorizontal: 8,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
