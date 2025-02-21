import React from 'react';
import { useColorScheme } from 'react-native';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import GameLobby from "./src/screens/GameLobby";
import Login from "./src/screens/LoginScreen";
import { colors, Fonts, Images, string } from '../common';
import PrimaryButton from '../components/PrimaryButton';


export default function MainScreen({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.white };

  return (
    <View style={[backgroundStyle, { flex: 1 }]}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={styles.container}>
          <Image source={Images.logo} style={styles.image} />
        </View>

        <Text style={styles.title}>
          MAY {"\n"}
          THE {"\n"}
          BEST {"\n"}
          SWING {"\n"}
          WIN.
        </Text>

        <View style={styles.buttonContainer}>
          <PrimaryButton 
            showIcon={true}
            title={string.sign_in_with_email}
            iconType={string.MaterialIcons}
            iconName={string.email}
            onPress={() => {
              navigation.navigate("EnterEmailScreen")
            }}
          ></PrimaryButton>
          <PrimaryButton 
            showIcon={true}
            title={string.sign_in_with_apple}
            iconType={string.AntDesign}
            iconName={string.apple1}
            buttonBackgroundColor={colors.blackPrimary}
            onPress={() => {
              navigation.navigate("EnterEmailScreen")
            }}
          ></PrimaryButton>
          <PrimaryButton 
            showIcon={true}
            title={string.sign_in_with_apple}
            iconType={string.AntDesign}
            iconName={string.google}
            buttonBackgroundColor={colors.white}
            iconColor={colors.blackPrimary}
            buttonStyle={styles.googleButton}
            textStyle={styles.googleButtonText}
            onPress={() => {
              navigation.navigate("EnterEmailScreen")
            }}
          ></PrimaryButton>
        </View>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line} />
        </View>

        
        <View style={styles.createAccountContainer}>
          <PrimaryButton
            title={string.create_an_account}
            buttonBackgroundColor={colors.green}
            textColor={colors.blackPrimary}
            onPress={() => {
              navigation.navigate("EnterEmailScreen")
            }}
          ></PrimaryButton>
        </View>
        <View style={styles.emptyContainer}></View>
      </ScrollView>
    </View>
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
    // alignItems: "center",
    // backgroundColor: "red",
  },
  image: {
    width: 150,
    height: 100,
    alignItems: 'center',
    resizeMode: "contain",
  },
  title: {
    fontSize: 50,
    fontFamily: Fonts.MonumentExtendedRegular,
    // fontWeight: "bold",
    textAlign: "left",
    lineHeight: 60,
    color: "#000",
    paddingHorizontal: 20
  },
  buttonContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
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
    borderWidth: 1,
    borderColor: colors.blackPrimary,
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
  createAccountContainer: {
    marginHorizontal: 20,
  }
});
