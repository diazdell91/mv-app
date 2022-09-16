import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../../components';
import { useAuth } from '../../context/auth/authProvider';
import topUpServices from '../../services/topUp';
import Balance from './components/Balance';
import TopUp from './components/TopUp';
import Wallet from './components/Wallet';

const DashboardSceen = () => {
  const { top } = useSafeAreaInsets();
  const {
    session: { token },
  } = useAuth();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    topups: [],
    totalItems: 0,
    totalPages: 0,
    currentPage: 0,
  });

  const getTopUps = (token: string) => {
    topUpServices
      .getTopups(token)
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
    return getTopUps(token);
  }, [token]);

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={{ ...styles.container, paddingTop: top }}>
      <ScrollView>
        <Balance ammount={2000} />
        <Wallet ammount={1100} />
        {data.totalItems > 0 &&
          data?.topups.map((item: any) => {
            return <TopUp key={item._id} {...item} />;
          })}
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
