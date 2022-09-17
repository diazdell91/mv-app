import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading, TopUp } from '../../../components';
import { useAuth } from '../../../context/auth/authProvider';
import topUpServices from '../../../services/topUp';

const PendingScreen = () => {
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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        {data.totalItems > 0 && data?.topups.map((item: any) => <TopUp key={item._id} {...item} />)}
      </ScrollView>
    </View>
  );
};

export default PendingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
