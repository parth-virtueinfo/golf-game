import React from 'react';
import { ScreenName } from '../common/ScreenName';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import CreatePasswordScreen from '../screens/CreatePasswordScreen';
import EnterEmailScreen from '../screens/EnterEmailScreen';
import GameLobby from '../screens/GameLobbyScreen';
import MainScreen from '../screens/MainScreen';
import CreateFullName from '../screens/CreateAccountScreen/CreateFullName';
import CreateDateOfBirthScreen from '../screens/CreateAccountScreen/CreateDateOfBirthScreen';

const Stack = createStackNavigator();

const AuthStatck = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenName.MainScreen} component={MainScreen} />
      <Stack.Screen name={ScreenName.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={ScreenName.GameLobbyScreen} component={GameLobby} />
      <Stack.Screen name={ScreenName.CreatePasswordScreen} component={CreatePasswordScreen} />
      <Stack.Screen name={ScreenName.EnterEmailScreen} component={EnterEmailScreen} />
      <Stack.Screen name={ScreenName.CreateFullName} component={CreateFullName} />
      <Stack.Screen name={ScreenName.CreateDateOfBirthScreen} component={CreateDateOfBirthScreen} />
    </Stack.Navigator>
  );
}

export default AuthStatck;