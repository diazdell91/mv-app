import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SIZES } from '../../../../theme';
import Chart from '../components/Chart';
import { Header } from '../../../../components';

export default function ChartInsight() {
  const data = {
    labels: ['El 1', 'El 2', 'El 3', 'El 4', 'El 5', 'El 6'],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    ],
  };
  return (
    <View style={styles.container}>
      <Chart title="Servicios o Productos" data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SIZES.xs,
  },
});
