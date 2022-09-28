import { useEffect, useState } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import topUpServices from '../../../services/topUpServices';
import { Loading, Text, TopUp, RefreshButtom } from '../../../components';
import { COLORS } from '../../../theme';
import Greetings from '../../client/dashboard/components/Greetings';
import moment from 'moment';

const TasksScreen = ({ navigation }: any) => {
  const { top } = useSafeAreaInsets();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    topups: [],
    totalItems: 0,
    totalPages: 0,
    currentPage: 0,
  });

  const getTopupsPending = () => {
    topUpServices
      .getTopupsStaff({
        processingState: 'PENDING',
        page: 0,
        size: 10,
        startOfDate: moment().subtract(1, 'month').toDate(),
        endOfDate: moment().endOf('day').toDate(),
      })
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
    return getTopupsPending();
  }, []);

  if (loading) {
    return (
      <View style={{ ...styles.container, paddingTop: top }}>
        <Loading />
      </View>
    );
  }
  return (
    <View style={{ ...styles.container, paddingTop: top }}>
      {data.topups.length < 1 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text size={32} color={COLORS.black}>
            Bien💪🏻
          </Text>
          <Text size={16} color={COLORS.black}>
            No tienes tareas pendientes
          </Text>
        </View>
      ) : (
        <ScrollView>
          <View style={{ marginHorizontal: 8 }}>
            <Text size={18} color={COLORS.black}>
              Tareas pendientes
            </Text>
            {data.totalItems > 0 &&
              data?.topups.map((item) => {
                return (
                  <Pressable
                    key={item._id}
                    onPress={() => {
                      navigation.navigate('TopUpActions', {
                        props: item,
                      });
                    }}
                  >
                    <TopUp {...item} />
                  </Pressable>
                );
              })}
          </View>
        </ScrollView>
      )}
      <RefreshButtom onPress={getTopupsPending} />
    </View>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
