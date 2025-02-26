import React from 'react';
import { ImageBackground, useColorScheme } from 'react-native';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import GameLobby from "./src/screens/GameLobby";
// import Login from "./src/screens/LoginScreen";
import { colors, Fonts, Images, string } from '../common';
import PrimaryButton from '../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.white };

  return (
    <View style={[backgroundStyle, { flex: 1 }]}>
      <Image source={Images.ic_lunch_bg} style={styles.bgImage} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
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
              navigation.navigate("LoginScreen")
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
            buttonMarginTop={0}
            onPress={() => {
              navigation.navigate("EnterEmailScreen")
            }}
          ></PrimaryButton>
        </View>
        {/* <View style={styles.emptyContainer}></View> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  contentContainer: {
    // flexGrow: 1,
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
    textAlign: "left",
    lineHeight: 60,
    color: "#000",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  googleButton: {
    borderWidth: 1,
    borderColor: colors.blackPrimary,
    borderRadius: 50,
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
  createAccountContainer: {
    marginHorizontal: 20,
  },
  bgImage: {
    // flex: 1,
    width: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    height: '100%'
  },
});

export default MainScreen;