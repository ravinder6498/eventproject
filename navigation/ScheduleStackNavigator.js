import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ScheduleScreen from '../screens/ScheduleScreen';
import TabBarIcon from '../components/TabBarIcon';

export const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
  }
);

ScheduleStack.navigationOptions = {
  tabBarLabel: 'Schedule',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

ScheduleStack.path = '';