import { StyleSheet, View } from 'react-native';
import { COLORS, SIZES } from '../../../../theme';
import { Text } from '../../../../components';
import ListItem from '../components/ListItem';
import { TOPUPS } from '../../../../graphql/topup.grapgql';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

export default function ChartList({ route }: any) {
  const [page, setPage] = useState(0);
  const [filtered, setFiltered] = useState<any[]>([]);

  const user = route.params.route.params.user;

  const PAGE_SIZE = 25;

  const { data, loading, refetch } = useQuery(TOPUPS, {
    variables: {
      input: {
        page: page * PAGE_SIZE,
        size: PAGE_SIZE,
      },
    },
    onCompleted(data) {
      setFiltered(data.listTopupsRecords.docs);
    },
    onError(err) {
      console.log('error', err);
    },
  });

  return (
    <View style={styles.container}>
      <Text color={COLORS.black}> Listado de Productos Gestionados</Text>
      <View style={{ borderBottomWidth: 1, borderBottomColor: COLORS.blackOpacity }}></View>
      <View style={{ flex: 1, marginHorizontal: 8 }}>
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.code as string}
          renderItem={(item: any) => <ListItem key={item.code} {...item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SIZES.xs,
  },
});
