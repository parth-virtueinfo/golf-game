import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import GameLobby from "./src/screens/GameLobby";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      {/* Header Image */}
      <View style={styles.headerContainer}>
        <Image source={require("../assets/images/logo.png")} style={styles.image} />
      </View>

      {/* Auto Occupied Middle Section */}
      <View style={styles.middleSection} />

      {/* Bottom Login Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.title}>LOGIN</Text>
        <Text style={styles.subtitle}>Please sign in to continue</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <View style={styles.rowContainer}>
            <FontAwesome name="envelope" size={18} color="black" style={styles.icon} />
            <Text style={styles.label}>EMAIL</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#888"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <View style={styles.rowContainer}>
            <FontAwesome name="lock" size={20} color="black" style={styles.icon} />
            <Text style={styles.label}>PASSWORD</Text>
          </View>
          <View style={styles.passwordWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#888"
              secureTextEntry={!passwordVisible}
              autoCapitalize="none"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <MaterialIcons
                name={passwordVisible ? "visibility" : "visibility-off"}
                size={20}
                color="#555"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Error Message */}
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        {/* Go Back Button */}
        <TouchableOpacity style={styles.goBackButton}>
          <Text style={styles.goBackText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  headerContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      paddingTop: 40,
    },
    headerImage: {
      width: "80%",
      height: 200, // Adjust height as needed
      resizeMode: "contain",
    },
  middleSection: {
    flex: 1, // Auto occupies available space
  },
  bottomSection: {
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    backgroundColor: "#FFF",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 20,
  },
  input: {
    fontSize: 16,
    color: "#000",
  },
  icon: {
    marginLeft: 5,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: "#2F52E0",
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 10,
  },
  signInText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  goBackButton: {
    backgroundColor: "#1A1A1A",
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: "center",
  },
  goBackText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;