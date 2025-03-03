import React from 'react';
import { Image, Modal, Pressable, StyleSheet, View } from 'react-native';
import { colors, Images, myConst, string } from '../common';
import CustomTextMonument from './CustomTextMonument';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Close } from '../common/Svg';
import CustomTextDMSans from './CustomTextDMSans';
import PrimaryButton from './PrimaryButton';
import CustomeCheckBox from './CustomCheckBox';

const DeleteAccountDialog = ({
  showDeleteAccountDialog,
  setShowDeleteAccountDialog,
  onModelClose,
  checked,
  setChecked,
  onPressPrivacyPolicy,
  onPressTermsOfService,
  onPressConfirm,
  onPressClose,
}) => {
  return (
    <Modal
      transparent={true}
      animationType={'slide'}
      visible={showDeleteAccountDialog}
      onRequestClose={onModelClose}
    >
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <View>
              <Image source={Images.ic_bg_change_pass} style={styles.bgImage} />
              <View style={styles.content}> 
                <Pressable style={styles.closeBtn} onPress={onPressClose}>
                  <Close />
                </Pressable>
                <CustomTextMonument mTop={13} size={32}>
                  {string.delete_account}
                </CustomTextMonument>
                <View style={styles.container}>
                  <View style={styles.passInfo}>
                    <CustomeCheckBox
                      checked={checked}
                      onPress={() => setChecked(!checked)}
                    ></CustomeCheckBox>
                    <CustomTextDMSans mTop={-2} style={styles.upperCase}>
                      {string.confirm_that_you_would_like}
                      <CustomTextDMSans style={styles.decorationTxt} onPress={onPressTermsOfService}>
                        {string.terms_of_service}
                      </CustomTextDMSans>
                      <CustomTextDMSans onPress={() => {}}>
                        {string.and}
                      </CustomTextDMSans>
                      <CustomTextDMSans style={styles.decorationTxt} onPress={onPressPrivacyPolicy}>
                        {string.privacy_policys}
                      </CustomTextDMSans>
                    </CustomTextDMSans>
                  </View>
                  <View style={styles.btnContainer}>
                    <PrimaryButton
                      title={string.confirm_deletion}
                      buttonBackgroundColor={colors.red}
                      onPress={onPressConfirm}
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

export default DeleteAccountDialog;

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
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  passInfo: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 8,
  },
  rounded: {
    backgroundColor: 'red',
    width: 16,
    height: 16,
    borderRadius: 20
  },
  upperCase: {
    marginLeft: 10
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
    marginTop: 10,
    marginBottom: 80
  },
  decorationTxt: {
    color: colors.primaryColor,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});