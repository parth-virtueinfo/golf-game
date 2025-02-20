import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const EnterEmailScreen = () => {
  const [email, setEmail] = useState("");
  const [promoCode, setPromoCode] = useState("");

  return (
    <View style={styles.container}>

    <View style={styles.headerContainer}>
                      <Image source={require("../assets/images/logo.png")} style={styles.logo} />

                    </View>

      {/* Step Indicator */}
      <View style={styles.stepContainer}>
        <Text style={styles.stepText}>STEP 1 OF 5</Text>
        <View style={styles.progressBar} />
      </View>

      {/* Title */}
      <Text style={styles.title}>ENTER YOUR EMAIL</Text>
      <Text style={styles.subtitle}>You’ll use this to log into your account.</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          <Icon name="email-outline" size={16} color="#000" /> EMAIL
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Promo Code Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          <Icon name="gift-outline" size={16} color="#000" /> PROMO CODE (OPT.)
        </Text>
        <TextInput
          style={styles.input}
          placeholder="type here"
          value={promoCode}
          onChangeText={setPromoCode}
        />
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10 },
        logo: { width: 120, height: 60 },
        balanceContainer: { flexDirection: "row", alignItems: "center" },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
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
  inputContainer: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#3B82F6",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EnterEmailScreen;
