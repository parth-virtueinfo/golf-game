import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import { colors, Images, string } from "../common";
import { Email, Gift } from "../common/Svg";
import PrimaryButton from "../components/PrimaryButton";
import AppHeader from "../components/AppHeader";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomTextMonument from "../components/CustomTextMonument";
import ProgressStepCreateAccount from "../components/ProgressStepCreateAccount";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../common/ScreenName";

const EnterEmailScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [promoCode, setPromoCode] = useState("");

  return (
    <View style={styles.container}>
      <Image source={Images.ic_bg_account_1} style={styles.bgImage} />
      <AppHeader backgroundColor={'transparent'} />
      <View style={styles.content}>
        <ProgressStepCreateAccount 
          width={'20%'} 
          currentStep={1}
          onBackPress={() => navigation.goBack()}
        />
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <CustomTextMonument style={styles.title}>
            {string.enter_your_email}
          </CustomTextMonument>
          <Text style={styles.subtitle}>{string.you_ll_use_this_to_log_into_your_account}</Text>
          <CustomTextInput
            title={string.Email}
            svg={<Email />}
            placeholder={string.enter_your_email}
            value={email}
            changeText={setEmail}
          />
          <CustomTextInput
            title={string.promo_code_opt}
            svg={<Gift />}
            placeholder={string.type_here}
            value={promoCode}
            changeText={setPromoCode}
          />
          <View style={styles.buttonContainer}>
            <PrimaryButton
              title={string.next}
              onPress={() => {
                navigation.navigate(ScreenName.CreateFullName)
              }}
            ></PrimaryButton>
          </View>
        </KeyboardAwareScrollView> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginTop: 20
  },
  subtitle: {
    fontSize: 18,
    color: colors.grayLight,
  },
  bgImage: {
    width: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    height: '100%'
  },
  buttonContainer: {
    flex: 1,
    justifyContent:'flex-end'
  }
});

export default EnterEmailScreen;
