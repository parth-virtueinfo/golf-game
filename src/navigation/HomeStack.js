import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenName } from '../common/ScreenName';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name={ScreenName.HomeScreen}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
