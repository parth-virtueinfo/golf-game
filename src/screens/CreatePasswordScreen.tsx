import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const CreatePasswordScreen = () => {
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    const isLongEnough = password.length >= 8;

    return { hasUpperCase, hasNumber, hasSpecialChar, isLongEnough };
  };

  const validation = validatePassword(password);

  return (
    <View style={styles.container}>

    <View style={styles.headerContainer}>
                  <Image source={require("../assets/images/logo.png")} style={styles.logo} />

                </View>

      {/* Step Indicator */}
      <View style={styles.stepContainer}>
        <Text style={styles.stepText}>STEP 5 OF 5</Text>
        <View style={styles.progressBar} />
      </View>

      {/* Title */}
      <Text style={styles.title}>CREATE YOUR {"\n"}PASSWORD</Text>
      <Text style={styles.subtitle}>You’ll use this to log into your account.</Text>

      {/* Password Input */}
              <View style={styles.inputContainer}>
                <View style={styles.rowContainer}>
                  <FontAwesome name="lock" size={20} color="black" style={styles.icon} />
                  <Text style={styles.label}>PASSWORD</Text>
                </View>
                <View style={styles.passwordWrapper}>
                  <TextInput
                    style={styles.input2}
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

      {/* Validation Errors */}
      <View>
        <Text style={styles.errorText}>
          <Text style={styles.redBullet}>{"\u2B24"} </Text>
          <Text style={styles.darkText}>Must contain at least 1 uppercase letter, 1 number, 1 special character.</Text>
        </Text>
        <Text style={styles.errorText}>
          <Text style={styles.redBullet}>{"\u2B24"} </Text>
          <Text style={styles.darkText}>Must be at least 8 characters long.</Text>
        </Text>
      </View>


      {/* Agreement Checkbox */}
      <TouchableOpacity style={styles.checkboxContainer} onPress={() => setAgreed(!agreed)}>
        <View style={[styles.checkbox, agreed && styles.checkboxChecked]}>
            {agreed && <Text style={styles.checkmark}>✓</Text>}
          </View>
        <Text style={styles.agreementText}>
          By creating an account, you (1) agree to Swing Stakes{" "}
          <Text style={styles.linkText}>Terms of Service</Text>, including the arbitration provision and{" "}
          <Text style={styles.linkText}>Privacy Policy</Text>.
          (2) acknowledge that you have received and reviewed those documents, and (3) confirm that you are of legal age to participate in Swing Stakes contests.
        </Text>
      </TouchableOpacity>

      {/* Continue Button */}
      <TouchableOpacity style={[styles.button, !validation.isLongEnough || !agreed ? styles.disabledButton : {}]} disabled={!validation.isLongEnough || !agreed}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10 },
    logo: { width: 120, height: 60 },
    balanceContainer: { flexDirection: "row", alignItems: "center" },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  stepText: {
    fontSize: 14,
    color: "#6A6A6A",
  },
  progressBar: {
    flex: 1,
    height: 3,
    backgroundColor: "#3B82F6",
    marginLeft: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    color: "#6A6A6A",
    marginBottom: 20,
  },
  passwordContainer: {
    marginBottom: 10,
  },
  passwordLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
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
      marginLeft: 12,
    },
    input2: {
        marginTop:5,
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
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  errorText: {
      fontSize: 14,
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 4,
    },
    redBullet: {
      color: "red",
      fontSize: 20,
    },
    darkText: {
      color: "#525252", // Dark gray text
      fontSize: 14,
    },
  checkboxContainer: {
      flexDirection: "row",
      alignItems: "top",
      marginVertical: 10,
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 2,
      borderColor: "#000",
      borderRadius: 4,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 10,
      marginTop:5,
    },
    checkboxChecked: {
      backgroundColor: "#2F52E0", // Blue background when checked
      borderColor: "#2F52E0",
      alignItems: "center",
    },
    checkmark: {
      color: "white",
      fontSize: 14,
      alignItems: "center",
      fontWeight: "bold",
    },
  agreementText: {
    flex: 1,
    fontSize: 14,
    lineHeight:18,
    color: "#6A6A6A",
  },
  linkText: {
      textDecorationLine: "underline",
    color: "#2F52E0",
    lineHeight:18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#2F52E0",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: "#A0A0A0",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CreatePasswordScreen;
