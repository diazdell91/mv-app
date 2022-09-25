import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading, Text, Transaction } from '../../components';
import transactionsServices from '../../services/walletServices';
import { COLORS } from '../../theme';
import Balance from './components/Balance';
import Greetings from './components/Greetings';

const DashboardSceen = () => {
  const { top } = useSafeAreaInsets();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    transactions: [],
    totalItems: 0,
    totalPages: 0,
    currentPage: 0,
  });

  const getTransactions = () => {
    transactionsServices
      .getTransactions()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('finally');
        setLoading(false);
      });
  };

  useEffect(() => {
    return getTransactions();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={{ ...styles.container, paddingTop: top }}>
      <Greetings />
      <ScrollView>
        <Balance ammount={2000} />
        <View style={{ marginHorizontal: 8 }}>
          <Text size={18} color={COLORS.black}>
            Actividad reciente
          </Text>
          {data.totalItems > 0 &&
            data?.transactions.map((item) => {
              return <Transaction key={item._id} {...item} />;
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardSceen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
