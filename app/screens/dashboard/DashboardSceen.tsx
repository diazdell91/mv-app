import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading, Text, TopUp } from '../../components';
import { useAuth } from '../../context/auth/authProvider';
import topUpServices from '../../services/topUp';
import { COLORS } from '../../theme';
import Balance from './components/Balance';
import Greetings from './components/Greetings';

const DashboardSceen = () => {
  const { top } = useSafeAreaInsets();
  const {
    session: { token },
    user,
  } = useAuth();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    topups: [],
    totalItems: 0,
    totalPages: 0,
    currentPage: 0,
  });

  console.log(user);

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
      <Greetings />
      <ScrollView>
        <Balance ammount={2000} />
        <View style={{ marginHorizontal: 8 }}>
          <Text size={18} color={COLORS.black}>
            Transacciones recientes
          </Text>
          {data.totalItems > 0 &&
            data?.topups.map((item: any) => {
              return <TopUp key={item._id} {...item} />;
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
