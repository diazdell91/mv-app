import { Dimensions, StyleSheet, View } from 'react-native';
import React from 'react';
import { BarChart } from 'react-native-chart-kit';
import { COLORS, SIZES } from '../../../../theme';
import Layout from '../../../../theme/Layout';
import { Text } from '../../../../components';

export default function Chart({ data, title }: any) {
  const chartOptions = {
    decimalPlaces: 2,
    backgroundColor: COLORS.green,
    backgroundGradientFrom: COLORS.background,
    backgroundGradientTo: COLORS.background,
    color: (opacity = 1) => COLORS.primary,
    labelColor: (opacity = 1) => COLORS.primary,
    strokeWidth: 2,
    barPercentage: 0.9,
    style: {
      borderRadius: 16,
      padding: 8,
    },
  };
  return (
    <View style={styles.container}>
      <Text color={COLORS.black}>{title}</Text>
      <BarChart
        withInnerLines={false}
        data={data}
        width={Layout.window.width - 15}
        height={220}
        yAxisInterval={1}
        chartConfig={chartOptions}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 6,
  },
});
