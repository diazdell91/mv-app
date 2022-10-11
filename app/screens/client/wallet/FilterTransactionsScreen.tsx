import moment from 'moment';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Header, Text } from '../../../components';
import DatePicker from '../../../components/DatePicker';
import { COLORS } from '../../../theme';
import SelectedFilter from './components/SelectedFilter';

const FilterTransactionsScreen = ({ navigation }: any) => {
  const { bottom: paddingBottom } = useSafeAreaInsets();
  const [startOfDate, setStartOfDate] = useState({ label: '', value: new Date() });
  const [endOfDate, setEndOfDate] = useState({ label: '', value: new Date() });
  const [type, setType] = useState(null);

  const typeOptions = [
    { label: 'Todas', value: null },
    { label: 'Recargas', value: 'TOPUP' },
    { label: 'Remesas', value: 'REMITTANCE' },
    { label: 'Pagos de servicios', value: 'BILLPAYMENT' },
    { label: 'Boletos de avión', value: 'AIRPLANETICKET' },
    { label: 'Reservaciones de hotel', value: 'HOTELBOOKING' },
    { label: 'Renta de autos', value: 'CARRENTAL' },
    { label: 'Comida a domicilio', value: 'FOODDELIVERY' },
    { label: 'Tarjeta de crédito', value: 'CREDIT_CARD' },
    { label: 'Transferencia Zelle', value: 'ZELLE_TRANSFER' },
    { label: 'Cheque', value: 'CHECK' },
    { label: 'Efectivo', value: 'CASH' },
    { label: 'Otros', value: 'OTHERS' },
  ];

  const filters = {
    startOfDate: startOfDate.value.toLocaleDateString(),
    endOfDate: endOfDate.value.toLocaleDateString(),
    type,
  };

  const handleFilter = () => {
    navigation.navigate('Transactions', {
      filters,
    });
  };
  return (
    <View style={{ ...styles.container, paddingBottom }}>
      <Header
        title="Filtro de transacciones"
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
          <Text fontFamily="Poppins-Bold">Concepto</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: 4,
            marginTop: 4,
          }}
        >
          {typeOptions.map((item) => (
            <Pressable
              key={item.value}
              onPress={() => {
                setType(item.value);
              }}
            >
              <SelectedFilter item={item} selected={item.value === type} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <Button title="Mostrar resultados" onPress={handleFilter} />
    </View>
  );
};

export default FilterTransactionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.fog,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
