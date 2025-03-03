import React from 'react';
import { Image, Modal, Pressable, StyleSheet, View } from 'react-native';
import { colors, Images, myConst, string } from '../common';
import CustomTextMonument from './CustomTextMonument';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Close, Lock } from '../common/Svg';
import CustomTextDMSans from './CustomTextDMSans';
import PrimaryButton from './PrimaryButton';
import { OtpInput } from "react-native-otp-entry";

const EnterSSNDigitDialog = ({
  showEnterSSNDigitDialog,
  onPressClose,
  onPressContinue,
  otp,
  setOtp,
}) => {
  return (
    <Modal
      transparent={true}
      animationType={'slide'}
      visible={showEnterSSNDigitDialog}
      onRequestClose={onPressClose}
    >
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <View>
              <Image source={Images.ic_bg_verification} style={styles.bgImage} />
              <View style={styles.content}>
                <Pressable style={styles.closeBtn} onPress={onPressClose}>
                  <Close />
                </Pressable>
                <CustomTextMonument mTop={40} size={32}>
                  {string.ssn_validation}
                </CustomTextMonument>
                <View style={styles.container}>
                  <View style={styles.passInfo}>
                    <CustomTextDMSans style={styles.upperCase}>
                      {string.enter_the_last_4_digits_of_your_ssn}
                    </CustomTextDMSans>
                    <View style={styles.OtpContent}>
                      <OtpInput
                        numberOfDigits={4}
                        focusColor="green"
                        autoFocus={false}
                        type="numeric"
                        secureTextEntry={false}
                        onTextChange={(text) => setOtp(text)}
                        onFilled={(text) => console.log(`OTP is ${text}`)}
                        textInputProps={{
                          accessibilityLabel: "One-Time Password",
                        }}
                        theme={{
                          containerStyle: styles.OTPcontainer,
                          pinCodeContainerStyle: styles.pinCodeContainer,
                        }}
                      />
                      <View style={styles.otpInfo}>
                        <CustomTextDMSans size={14} color={colors.blackPrimary} mTop={10}>
                          <Lock width={13} height={13} />{'  '}
                          {string.f_y_i_your_ssn_is_encrypted_and_kept_100_safe_it_s_only_used_to_verify_your_identity}
                        </CustomTextDMSans>
                      </View>
                    </View>
                  </View>
                  <View style={styles.btnContainer}>
                    <PrimaryButton
                      title={string.confirm_identity}
                      onPress={onPressContinue}
                    ></PrimaryButton>
                    <PrimaryButton
                      title={string.cancel}
                      buttonBackgroundColor={colors.blackPrimary}
                      onPress={onPressClose}
                    ></PrimaryButton>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Modal>
  );
};

export default EnterSSNDigitDialog;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(31, 30, 30, 0.8)',
    // backgroundColor: '#00000050',
  },
  activityIndicatorWrapper: {
    backgroundColor: colors.white,
    // height: (myConst.windowHeight / 10) * 9,
    width: (myConst.windowWidth / 10) * 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    borderWidth: 1,
    borderColor: '#403E3D'
  },
  activityIndicator: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 120,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    width: '100%',
    position:'absolute',
    resizeMode:'cover',
    height: 176,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  passInfo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rounded: {
    backgroundColor: 'red',
    width: 16,
    height: 16,
    borderRadius: 20
  },
  upperCase: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.blackPrimary,
    marginTop: 25,
    fontWeight: '700'
  },
  scroll: {
    flexGrow: 1,
  },
  content: {
    paddingHorizontal: 20,
  },
  closeBtn: {
    backgroundColor: colors.white,
    alignSelf: 'flex-end',
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 20,
    marginRight: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,  // Increased for better visibility
    shadowOffset: { width: 2, height: 4 }, // More depth
    shadowRadius: 6,  // Softer shadow edges
    elevation: 4,
  },
  container: {
    marginTop: 10,
  },
  btnContainer: {
    marginTop: 20,
    marginBottom: 80
  },
  OTPcontainer:{
    borderWidth:1,
    padding: 10,
    justifyContent: 'space-around',
    borderRadius: 10
  },
  pinCodeContainer: {
   width: 64,
   height: 75,
   borderColor: colors.blackPrimary,
   borderRadius: 5
  },
  OtpContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  otpInfo: {
    paddingHorizontal: 10,
  },
});