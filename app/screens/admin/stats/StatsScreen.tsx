import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { COLORS, SIZES } from '../../../theme';
import ChartInsight from './views/ChartInsight';
import ChartList from './views/ChartList';
import TopTabBar from '../../../router/components/TopTabBar';

const Tab = createMaterialTopTabNavigator();

export default function StatsScreen(props) {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: COLORS.gradient }}
      style={{ backgroundColor: COLORS.gradient }}
      tabBar={(props: any) => (
        <View style={{ marginTop: SIZES.s }}>
          <TopTabBar {...props} />
        </View>
      )}
    >
      <Tab.Screen name="Gráfico" component={ChartInsight} />
      <Tab.Screen name="Listado" initialParams={props} component={ChartList} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
