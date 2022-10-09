/* eslint-disable @typescript-eslint/no-unsafe-return */
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useQuery } from '@apollo/client';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading, TopUp, RefreshButtom } from '../../../components';
import { TOPUPS_ASSIGNED } from '../../../graphql/topup.grapgql';
import { useState } from 'react';
import EmptyList from '../../../components/EmptyList';

const TasksScreen = ({ navigation, route }: any) => {
  const { top } = useSafeAreaInsets();
  const PAGE_SIZE = 10;
  const [page, setPage] = useState(0);

  const { data, loading, error, refetch } = useQuery(TOPUPS_ASSIGNED, {
    variables: {
      input: { offset: page * PAGE_SIZE, limit: PAGE_SIZE },
    },
  });

  if (error) {
    console.log(error);
  }

  if (loading) {
    return (
      <View style={{ ...styles.container, paddingTop: top }}>
        <View style={{ flex: 1 }}>
          <Loading />
        </View>
      </View>
    );
  }
  if (data) {
    const { listTopupsAssigned } = data;
    const { docs, totalDocs } = listTopupsAssigned;
    console.log(docs.length);

    return (
      <View style={{ ...styles.container, paddingTop: top }}>
        {docs.length <= 0 ? (
          <EmptyList title={'Excelente! 💪🏻'} text="No tienes tareas pendientes" />
        ) : (
          <FlatList
            data={docs}
            keyExtractor={(item) => item.id}
            renderItem={({ item: topup }) => (
              <TopUp
                onPress={() =>
                  navigation.navigate('TopUpActions', {
                    topup,
                  })
                }
                {...topup}
              />
            )}
          />
        )}
        <RefreshButtom
          onPress={async () => {
            console.log('refetch');
            await refetch();
          }}
        />
      </View>
    );
  }
};

export default TasksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
