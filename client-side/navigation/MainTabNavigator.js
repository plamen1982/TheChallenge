import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import FunScreen from '../screens/FunScreen';
import ExploreScreen from '../screens/ExploreScreen';
import SportScreen from '../screens/SportScreen';
import HelpScreen from '../screens/HelpScreen';

const FunStack = createStackNavigator({
  Fun: FunScreen,
});

FunStack.navigationOptions = {
  tabBarLabel: 'Fun',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-happy'
          : 'md-happy'
      }
    />
  ),
};

const ExploreStack = createStackNavigator({
  Explore: ExploreScreen,
});

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  ),
};

const SportStack = createStackNavigator({
  Sport: SportScreen,
})

SportStack.navigationOptions = {
  tabBarLabel: 'Sport',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-speedometer' : 'md-speedometer'}
    />
  ),
};

const HelpStack = createStackNavigator({
  Help: HelpScreen,
});

HelpStack.navigationOptions = {
  tabBarLabel: 'Help',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
    />
  ),
};



export default createBottomTabNavigator({
  FunStack,
  ExploreStack,
  SportStack,
  HelpStack,
});
