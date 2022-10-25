/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Loading, TopUp, EmptyList, RefreshButtom } from '../../components';
import { COLORS } from '../../theme';
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';
import { useQuery } from '@apollo/client';
import { TOPUPS } from '../../graphql/topup.grapgql';
import HeaderFilter from './components/HeaderFilter';
import ActiveFilters from './components/ActiveFilters';
import { useAuth } from '../../context/auth/authProvider';

const InsightsScreen = ({ navigation, route }: any) => {
  const [filtered, setFiltered] = useState<any[]>([]);
  const [page] = useState(0);
  const { session } = useAuth();

  const [filters, setFilters] = useState({
    startOfDate: moment().subtract(1, 'day'),
    endOfDate: moment().endOf('day'),
    status: null,
  });

  const PAGE_SIZE = 25;

  const { data, loading, error, refetch } = useQuery(TOPUPS, {
    variables: {
      input: {
        page: page * PAGE_SIZE,
        size: PAGE_SIZE,
        ...filters,
      },
    },
    onCompleted(data) {
      setFiltered(data.listTopupsRecords.docs);
    },
    onError(err) {
      console.log('error', err);
    },
  });

  useEffect(() => {
    if (route.params) {
      const { filters } = route.params;
      setFilters({ ...filters });
    }
  }, [route.params]);

  const onSearch = (query: string) => {
    const result = data.listTopupsRecords.docs.filter(
      (item: any) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        item.code.toLowerCase().includes(query.toLocaleLowerCase()) ||
        item.phone.toLowerCase().includes(query.toLocaleLowerCase()),
    );

    setFiltered(result);
  };
  if (loading) {
    return (
      <View style={styles.container}>
        <HeaderFilter />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Loading color={COLORS.fog} />
        </View>
      </View>
    );
  }

  if (data) {
    const { listTopupsRecords } = data;
    const { docs } = listTopupsRecords;

    return (
      <View style={styles.container}>
        <HeaderFilter
          onSearch={onSearch}
          onPress={() => {
            navigation.navigate('FilterHistoryScreen');
          }}
        />
        <ActiveFilters filters={filters} />
        {filtered.length < 1 ? (
          <EmptyList title="Upss! 🙁" text="No tienes registro para este rango" />
        ) : (
          <FlatList
            data={docs}
            keyExtractor={(item) => item.id}
            renderItem={({ item: topup }) => <TopUp disabled {...topup} />}
          />
        )}
        <RefreshButtom onPress={() => refetch()} />
      </View>
    );
  }

  return null;
};

export default InsightsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
