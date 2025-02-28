import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenName } from '../common/ScreenName';
import SettingScreen from '../screens/SettingScreen/SettingScreen';

const SettingStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name={ScreenName.SettingScreen}
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
