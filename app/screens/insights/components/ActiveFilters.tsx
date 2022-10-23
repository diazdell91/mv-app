import { StyleSheet, View } from 'react-native';
import moment from 'moment';
import { COLORS } from '../../../theme';
import { Text } from '../../../components';

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
      case 'PENDING':
        return 'Pendiente';
      case 'ASSIGNED':
        return 'Processando';
      case 'COMPLETED':
        return 'Completada';
      case 'CANCELLED':
        return 'Fallida';
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
    justifyContent: 'center',
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
