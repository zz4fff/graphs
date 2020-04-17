import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { StackedBarChart } from 'react-native-chart-kit';

import styles from './styles';

export default function StackedGraph() {
  const data = {
    labels: ["Test1", "Test2"],
    legend: ["L1", "L2", "L3"],
    data: [[60, 60, 60], [30, 30, 60]],
    barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(216, 55, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5
  };

  const graphStyle = {
    marginVertical: 8,
    borderRadius: 16
  };
  
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          Stacked Bar Chart
        </Text>
      </View>
      <StackedBarChart
        style={graphStyle}
        data={data}
        width={Dimensions.get('window').width - 8}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
}