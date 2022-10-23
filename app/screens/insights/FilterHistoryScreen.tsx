import moment from 'moment';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Header, Text } from '../../components';
import DatePicker from '../../components/DatePicker';
import { COLORS } from '../../theme';
import SelectedFilter from './components/SelectedFilter';

const FilterHistoryScreen = ({ navigation }: any) => {
  const { bottom: paddingBottom } = useSafeAreaInsets();
  const [startOfDate, setStartOfDate] = useState({ label: '', value: new Date() });
  const [endOfDate, setEndOfDate] = useState({ label: '', value: new Date() });
  const [status, setStatus] = useState(null);

  const statusOptions = [
    { label: 'Todas', value: null },
    { label: 'Pendientes', value: 'PENDING' },
    { label: 'Prosesando', value: 'ASSIGNED' },
    { label: 'Completada', value: 'COMPLETED' },
    { label: 'Fallida', value: 'CANCELLED' },
  ];

  const filters = {
    startOfDate: startOfDate.value.toLocaleDateString(),
    endOfDate: endOfDate.value.toLocaleDateString(),
    status,
  };

  const handleFilter = () => {
    navigation.navigate('Informes', {
      filters,
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
            flexWrap: 'wrap',
            marginHorizontal: 8,
            marginTop: 8,
          }}
        >
          {statusOptions.map((item) => (
            <Pressable
              key={item.value}
              onPress={() => {
                setStatus(item.value);
              }}
            >
              <SelectedFilter item={item} selected={item.value === status} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <Button title="Mostrar resultados" onPress={handleFilter} />
    </View>
  );
};

export default FilterHistoryScreen;

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
