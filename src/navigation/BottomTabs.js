import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenName } from '../common/ScreenName';
import HomeStack from './HomeStack';
import MyProfileStack from './MyProfileStack';
import RoundStack from './RoundStack';
import SettingStack from './SettingStack';
import { CustomTabBar } from './CustomTab';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator 
      tabBar={props => <CustomTabBar {...props} />}
    >
       <Tab.Screen
        name={ScreenName.HomeStack}
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name={ScreenName.MyProfileStack}
        component={MyProfileStack}
        options={{
          headerShown: false,
          tabBarLabel: 'My Profile'
        }}
      />
      <Tab.Screen
        name={ScreenName.RoundStack}
        component={RoundStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Rounds'
        }}
      />
      <Tab.Screen
        name={ScreenName.SettingStack}
        component={SettingStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Settings'
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabs;
