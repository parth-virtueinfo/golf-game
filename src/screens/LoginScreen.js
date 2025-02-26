import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppHeader from "../components/AppHeader";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomTextInput from "../components/CustomTextInput";
import { Email, Lock } from "../common/Svg";
import { colors, Images, string } from "../common";
import PrimaryButton from "../components/PrimaryButton";
import CustomTextMonument from "../components/CustomTextMonument";
// import GameLobby from "./src/screens/GameLobby";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [hideShow, setHideShow] = useState(true);

  // Validation function
  const validateInputs = () => {
    if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email.");
      return false;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  // Handle login
  const handleLogin = () => {
    if (validateInputs()) {
      console.log("Login Successful:", { email, password });
      navigation.navigate("GameLobbyScreen");
      // Perform authentication here
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Images.ic_login_bg} style={styles.bgImage} />
      <AppHeader 
        backgroundColor={'transparent'} 
      />
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={true}
      >
        {/* Bottom Login Section */}
        <View style={styles.bottomSection}>
          <CustomTextMonument style={styles.title}>
            {string.login}
          </CustomTextMonument>
          <Text style={styles.subtitle}>Please sign in to continue</Text>

          <CustomTextInput 
            title={string.Email}
            svg={<Email />}
            placeholder={string.enter_your_email}
            value={email}
            changeText={setEmail}
          />

          <CustomTextInput 
            title={string.password}
            svg={<Lock />}
            placeholder={string.enter_your_password}
            value={password}
            changeText={setPassword}
            hideShow
            hideShowAction={() => setHideShow(!hideShow)}
            showPassword={hideShow}
            isPasswordTextBox={hideShow}
          />
          <View style={{ flex: 1, justifyContent:'flex-end' }}>
            <PrimaryButton
              title={string.sign_in}
              onPress={() => {
                handleLogin();
              }}
            ></PrimaryButton>

            <PrimaryButton
              title={string.go_back}
              buttonBackgroundColor={colors.blackPrimary}
              onPress={() => {
                navigation.goBack();
              }}
            ></PrimaryButton>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  bottomSection: {
    padding: 20,
    justifyContent: "center",
    flex:1,
    marginTop: 50
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 5,
  },
  bgImage: {
    // flex: 1,
    width: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    height: '100%'
  },
});

export default LoginScreen;