/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Loading, EmptyList, RefreshButtom, Transaction } from '../../../components';
import { COLORS } from '../../../theme';
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';
import { useQuery } from '@apollo/client';
import HeaderTransferFilter from './components/HeaderTransferFilter';
import ActiveFilters from './components/ActiveFilters';
import { TRANSFERS } from '../../../graphql/wallet.grapgql';

const TransactionsScreen = ({ navigation, route }: any) => {
  const [page] = useState(0);

  const [filters, setFilters] = useState({
    startOfDate: moment().subtract(1, 'day'),
    endOfDate: moment().endOf('day'),
  });

  const PAGE_SIZE = 25;

  const { data, loading, error, refetch } = useQuery(TRANSFERS, {
    variables: {
      input: {
        page: page * PAGE_SIZE,
        size: PAGE_SIZE,
        ...filters,
      },
    },
  });

  useEffect(() => {
    if (route.params) {
      const { filters } = route.params;
      setFilters({ ...filters });
    }
  }, [route.params]);

  if (loading) {
    return (
      <View style={styles.container}>
        <HeaderTransferFilter title="Trasacciones" />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Loading color={COLORS.fog} />
        </View>
      </View>
    );
  }

  if (error) {
    console.log(error);
  }

  if (data) {
    const { transfersRecords } = data;
    const { docs } = transfersRecords;

    return (
      <View style={styles.container}>
        <HeaderTransferFilter
          title="Transacciones"
          onPress={() => {
            navigation.navigate('FilterTransactions');
          }}
        />
        <ActiveFilters filters={filters} />
        {docs.length < 1 ? (
          <EmptyList title="Upss! 🙁" text="No tienes registro para este rango" />
        ) : (
          <FlatList
            data={docs}
            keyExtractor={(item) => item.id}
            renderItem={({ item: transfer }) => <Transaction {...transfer} />}
          />
        )}
        <RefreshButtom onPress={() => refetch()} />
      </View>
    );
  }

  return null;
};

export default TransactionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
