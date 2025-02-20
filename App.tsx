import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useColorScheme, View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/screens/LoginScreen";
import GameLobbyScreen from "./src/screens/GameLobbyScreen";
import MainScreen from "./src/screens/MainScreen";
import CreatePasswordScreen from "./src/screens/CreatePasswordScreen";
import EnterEmailScreen from "./src/screens/EnterEmailScreen";

const Stack = createNativeStackNavigator();

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="GameLobby" component={GameLobbyScreen} />
        <Stack.Screen name="CreatePasswordScreen" component={CreatePasswordScreen} />
        <Stack.Screen name="EnterEmailScreen" component={EnterEmailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}