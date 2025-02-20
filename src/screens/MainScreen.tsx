import React from 'react';
import { useColorScheme } from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GameLobby from "./src/screens/GameLobby";
import Login from "./src/screens/LoginScreen";

export default function MainScreen({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.white };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={styles.container}>
          <Image source={require("../assets/images/logo.png")} style={styles.image} />
        </View>

        <Text style={styles.title}>
          MAY {"\n"}
          THE {"\n"}
          BEST {"\n"}
          SWING {"\n"}
          WIN.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.emailButton} onPress={() => navigation.navigate("EnterEmailScreen")}>
            <MaterialIcons name="email" size={20} color="white" />
            <Text style={styles.buttonText}>Sign in with Email</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appleButton}>
            <AntDesign name="apple1" size={20} color="white" />
            <Text style={styles.buttonText}>Sign in with Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.googleButton}>
            <AntDesign name="google" size={20} color="black" />
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountText}>Create an account</Text>
        </TouchableOpacity>

        <View style={styles.emptyContainer}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
     emptyContainer: {
         height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 250,
    height: 150,
    alignItems: 'center',
    resizeMode: "contain",
  },
  title: {
    fontSize: 50,
    fontFamily: "MonumentExtended",
    fontWeight: "bold",
    textAlign: "left",
    lineHeight: 60,
    color: "#000",
    paddingHorizontal: 20
  },
  buttonContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  emailButton: {
    backgroundColor: '#2F52E0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 50,
    marginBottom: 15,
  },
  appleButton: {
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 50,
    marginBottom: 15,
  },
  googleButton: {
    borderWidth: 2,
    borderColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 50,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  googleButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#777',
  },
  createAccountButton: {
    backgroundColor: '#C4F40A',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  createAccountText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
