import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import topUpServices from '../../../services/topUpServices';
import { Header, Input, Loading, TopUp } from '../../../components';
import { COLORS } from '../../../theme';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';

const InsightsScreen = ({ navigation, route }: any) => {
  const [loading, setLoading] = useState(true);
  const [startOfDate, setStartOfDate] = useState(moment().subtract(1, 'day').toDate());
  const [endOfDate, setEndOfDate] = useState(moment().endOf('day').toDate());
  const [processingState, setProcessingState] = useState('PENDING');
  const [page] = useState(0);
  const [data, setData] = useState({
    topups: [],
    totalItems: 0,
    totalPages: 0,
    currentPage: 0,
  });

  const getTopups = useCallback(() => {
    console.log('date', startOfDate, endOfDate);
    topUpServices
      .getTopups({
        startOfDate,
        endOfDate,
        processingState,
        page,
      })
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('finally');
        setLoading(false);
      });
  }, [page, startOfDate, endOfDate, processingState]);

  useEffect(() => {
    if (route.params) {
      console.log(route.params);
      const { startOfDate, endOfDate, processingState } = route.params;
      setStartOfDate(startOfDate);
      setEndOfDate(endOfDate);
      setProcessingState(processingState);
    }
  }, [route.params]);

  useEffect(() => {
    console.log('useEffect');
    return getTopups();
  }, [getTopups]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Header
          iconRightName="filter"
          iconRightColor={COLORS.placeHolder}
          iconRightPress={() => {
            navigation.navigate('FilterHistoryScreen');
          }}
        >
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
  return (
    <View style={styles.container}>
      <Header
        iconRightName="filter"
        iconRightColor={COLORS.placeHolder}
        iconRightPress={() => {
          navigation.navigate('FilterHistoryScreen');
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
      <ScrollView>
        {data.totalItems > 0 &&
          data?.topups.map((item) => {
            return <TopUp key={item._id} {...item} />;
          })}
      </ScrollView>
    </View>
  );
};

export default InsightsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
