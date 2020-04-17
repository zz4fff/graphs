import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Main from './pages/Main';
import LineGraph from './pages/LineGraph';
import BarGraph from './pages/BarGraph';
import PieGraph from './pages/PieGraph';
import ProgressGraph from './pages/ProgressGraph';
import ContribGraph from './pages/ContributionGraph';
import StackedGraph from './pages/StackedGraph';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Main" component={Main} />
        <AppStack.Screen name="LineGraph" component={LineGraph} />
        <AppStack.Screen name="BarGraph" component={BarGraph} />
        <AppStack.Screen name="PieGraph" component={PieGraph} />
        <AppStack.Screen name="ProgressGraph" component={ProgressGraph} />
        <AppStack.Screen name="ContribGraph" component={ContribGraph} />
        <AppStack.Screen name="StackedGraph" component={StackedGraph} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}