import { StyleSheet, View } from 'react-native';
import moment from 'moment';
import { COLORS } from '../../../../theme';
import { Text } from '../../../../components';

type Props = {
  filters: {
    [key: string]: any;
  };
};

const ActiveFilters = ({ filters }: Props) => {
  //convert to array of objects
  const filterArray = Object.values(filters);
  //filter out empty values
  const filteredArray = filterArray.filter((filter) => filter !== null);

  const trasnlateFilterStatus = (status: string) => {
    switch (status) {
      case 'TOPUP':
        return 'Recargas';
      case 'REMITTANCE':
        return 'Remesas';
      case 'BILLPAYMENT':
        return 'Pagos de servicios';
      case 'AIRPLANETICKET':
        return 'Boletos de avión';
      case 'HOTELBOOKING':
        return 'Reservaciones de hotel';
      case 'CARRENTAL':
        return 'Renta de autos';
      case 'FOODDELIVERY':
        return 'Comida a domicilio';
      case 'CREDIT_CARD':
        return 'Tarjeta de crédito';
      case 'ZELLE_TRANSFER':
        return 'Transferencia Zelle';
      case 'CHECK':
        return 'Cheque';
      case 'CASH':
        return 'Efectivo';
      case 'OTHERS':
        return 'Otros';
      default:
        return status;
    }
  };

  return (
    <View style={styles.container}>
      {filteredArray.map((filter, index) => {
        const value = typeof filter === 'object' ? moment(filter).format('DD/MM/YYYY') : filter;
        return (
          <View style={styles.filter} key={index}>
            <Text style={styles.filterText}>{trasnlateFilterStatus(value)}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default ActiveFilters;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  filter: {
    backgroundColor: COLORS.fog,
    padding: 8,
    borderRadius: 32,
    margin: 4,
  },
  filterText: {
    color: '#000',
    fontSize: 12,
    padding: 5,
  },
});
