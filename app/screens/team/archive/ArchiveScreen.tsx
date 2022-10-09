/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Input, Loading, TopUp } from '../../../components';
import { COLORS } from '../../../theme';
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';
import BalanceSales from './components/BalanceSales';
import { useQuery } from '@apollo/client';
import { TOPUPS } from '../../../graphql/topup.grapgql';
import EmptyList from '../../../components/EmptyList';

const ArchiveScreen = ({ navigation, route }: any) => {
  const [startOfDate, setStartOfDate] = useState(moment().subtract(1, 'day').toDate());
  const [endOfDate, setEndOfDate] = useState(moment().endOf('day').toDate());
  const [processingState, setProcessingState] = useState('COMPLETED');
  const [totalCupTopUp, setTotalCupTopUp] = useState(0);
  const [page] = useState(0);

  const PAGE_SIZE = 10;

  const { data, loading, error, refetch } = useQuery(TOPUPS, {
    variables: {
      input: {
        offset: page * PAGE_SIZE,
        limit: PAGE_SIZE,
        // startOfDate,
        // endOfDate,
        // processingState,
      },
    },
  });

  useEffect(() => {
    if (route.params) {
      const { startOfDate, endOfDate, processingState } = route.params;
      setStartOfDate(startOfDate);
      setEndOfDate(endOfDate);
      setProcessingState(processingState);
    }
  }, [route.params]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Header iconRightName="filter" iconRightColor={COLORS.placeHolder}>
          <Input
            editable={false}
            placeholder="Buscar..."
            autoFocus={false}
            iconLeft="magnify"
            iconLeftColor={COLORS.white}
            inputStyle={{
              borderRadius: 56,
              backgroundColor: COLORS.placeHolder,
              color: COLORS.white,
            }}
            style={{ borderRadius: 56, marginHorizontal: 8, backgroundColor: COLORS.placeHolder }}
          />
        </Header>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Loading color={COLORS.fog} />
        </View>
      </View>
    );
  }

  if (data) {
    console.log(data);
    const { listTopupsRecords } = data;
    const { docs } = listTopupsRecords;

    return (
      <View style={styles.container}>
        <Header
          iconRightName="filter"
          iconRightColor={COLORS.placeHolder}
          iconRightPress={() => {
            navigation.navigate('FilterArchiveScreen');
          }}
        >
          <Input
            placeholder="Buscar..."
            autoFocus={false}
            iconLeft="magnify"
            iconLeftColor={COLORS.white}
            inputStyle={{
              borderRadius: 56,
              backgroundColor: COLORS.placeHolder,
              color: COLORS.white,
            }}
            style={{ borderRadius: 56, marginHorizontal: 8, backgroundColor: COLORS.placeHolder }}
          />
        </Header>
        <BalanceSales total={totalCupTopUp} />
        {docs.length < 1 ? (
          <EmptyList title="" text="" />
        ) : (
          <FlatList
            data={docs}
            keyExtractor={(item) => item.id}
            renderItem={({ item: topup }) => <TopUp {...topup} />}
          />
        )}
      </View>
    );
  }

  return null;
};

export default ArchiveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
