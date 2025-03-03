import React from 'react';
import { Image, Modal, Pressable, StyleSheet, View } from 'react-native';
import { colors, Images, myConst, string } from '../common';
import CustomTextMonument from './CustomTextMonument';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Card, CardWhite, Close, Lock } from '../common/Svg';
import CustomTextDMSans from './CustomTextDMSans';
import PrimaryButton from './PrimaryButton';
import { OtpInput } from "react-native-otp-entry";
import InfoCard from './InfoCard';

const VerificationCompleteDialog = ({
  showVerificationCompleteDialog,
  onPressClose,
  isRetry,
  onPressFinish,
  onPressRetry,
  title='',
  description='',
}) => {
  return (
    <Modal
      transparent={true}
      animationType={'slide'}
      visible={showVerificationCompleteDialog}
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
                <CustomTextMonument mTop={35} size={32}>
                  {string.verification_complete}
                </CustomTextMonument>
                <View style={styles.container}>
                  <InfoCard
                    title={title}
                    description={description}
                    icon={isRetry ? <CardWhite /> : <Card />}
                    containerStyle={[styles.infoCard, isRetry && {backgroundColor: colors.red}]}
                    textColor={isRetry ? colors.white : colors.blackPrimary}
                  />
                  <View style={styles.btnContainer}>
                    {isRetry ? (
                      <>
                        <PrimaryButton
                          title={string.retry}
                          onPress={onPressRetry}
                        ></PrimaryButton>
                        <PrimaryButton
                          title={string.cancel}
                          buttonBackgroundColor={colors.blackPrimary}
                          onPress={onPressClose}
                        ></PrimaryButton>
                      </>
                    ) : (
                      <PrimaryButton
                        title={string.finish}
                        onPress={onPressFinish}
                      ></PrimaryButton>
                    )}
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

export default VerificationCompleteDialog;

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
    marginTop: 35,
  },
  btnContainer: {
    marginTop: 10,
    marginBottom: 80
  },
});