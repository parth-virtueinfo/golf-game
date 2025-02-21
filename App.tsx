import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, useColorScheme } from "react-native";
import { ScreenName } from "./src/common/ScreenName";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./src/navigation/NavigationService";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./src/navigation/AuthStatck";
import { colors } from "./src/common";
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.white };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
      <View style={styles.authStack}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenName.AuthStack} component={AuthStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  authStack: {
    flex: 1,
  },
});
