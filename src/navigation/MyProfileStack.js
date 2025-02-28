import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenName } from '../common/ScreenName';
import MyProfileScreen from '../screens/MyProfileScreen/MyProfileScreen';

const MyProfileStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name={ScreenName.MyProfileScreen}
        component={MyProfileScreen}
      />
    </Stack.Navigator>
  )
}

export default MyProfileStack;
