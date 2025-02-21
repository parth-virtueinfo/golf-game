import React from 'react';
import { ScreenName } from '../common/ScreenName';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import CreatePasswordScreen from '../screens/CreatePasswordScreen';
import EnterEmailScreen from '../screens/EnterEmailScreen';
import GameLobby from '../screens/GameLobbyScreen';
import MainScreen from '../screens/MainScreen';

const Stack = createStackNavigator();

const AuthStatck = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenName.MainScreen} component={MainScreen} />
      <Stack.Screen name={ScreenName.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={ScreenName.GameLobbyScreen} component={GameLobby} />
      <Stack.Screen name={ScreenName.CreatePasswordScreen} component={CreatePasswordScreen} />
      <Stack.Screen name={ScreenName.EnterEmailScreen} component={EnterEmailScreen} />
    </Stack.Navigator>
  );
}

export default AuthStatck;