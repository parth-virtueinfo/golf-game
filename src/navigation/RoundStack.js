import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenName } from '../common/ScreenName';
import RoundScreen from '../screens/RoundScreen/RoundScreen';

const RoundStack = () => {
  const Stack = createStackNavigator();
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name={ScreenName.RoundScreen}
        component={RoundScreen}
      />
    </Stack.Navigator>
  );
};

export default RoundStack;
