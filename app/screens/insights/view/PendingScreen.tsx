import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Loading, TopUp } from '../../../components';

const PendingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    topups: [],
    totalItems: 0,
    totalPages: 0,
    currentPage: 0,
  });

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
