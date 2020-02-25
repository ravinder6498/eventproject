import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ArtistListScreen from '../screens/ArtistListScreen';
import ArtistDetailsScreen from '../screens/ArtistDetailsScreen';
import TabBarIcon from '../components/TabBarIcon';

export const ArtistsStack = createStackNavigator(
  {
    Artists: ArtistListScreen,
    ArtistDetails: ArtistDetailsScreen,
  }
);

ArtistsStack.navigationOptions = {
  tabBarLabel: 'Artists',
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

ArtistsStack.path = '';