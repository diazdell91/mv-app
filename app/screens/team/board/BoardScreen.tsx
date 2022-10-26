/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useQuery } from '@apollo/client';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading, TopUp, RefreshButtom } from '../../../components';
import { TOPUPS_AVAILABLES } from '../../../graphql/topup.grapgql';
import Greetings from '../../client/dashboard/components/Greetings';
import EmptyList from '../../../components/EmptyList';
import { COLORS } from '../../../theme';

const BoardScreen = ({ navigation }: any) => {
  const { top } = useSafeAreaInsets();
  const PAGE_SIZE = 10;

  const { data, loading, error, refetch } = useQuery(TOPUPS_AVAILABLES, {
    variables: {
      input: { offset: 0, limit: PAGE_SIZE },
    },
  });

  if (loading && !data) {
    return (
      <View style={{ ...styles.container, paddingTop: top }}>
        <Greetings />
        <View style={{ flex: 1 }}>
          <Loading />
        </View>
      </View>
    );
  }

  if (data) {
    const { listTopupsAvailables } = data;
    const docs = listTopupsAvailables.docs || [];
    return (
      <View style={{ ...styles.container, paddingTop: top }}>
        <Greetings />
        {docs.length <= 0 ? (
          <EmptyList title={'No hay nada que hacer'} text="No tienes tareas pendientes" />
        ) : (
          <FlatList
            data={docs}
            keyExtractor={(item) => item.id}
            renderItem={({ item: topup }) => (
              <TopUp
                onPress={() =>
                  navigation.navigate('TopUpAvailableActions', {
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
            await refetch();
          }}
        />
      </View>
    );
  }

  return null;
};

export default BoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gradient,
  },
});
