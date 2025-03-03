import React from 'react';
import { Image, Modal, Pressable, StyleSheet, View } from 'react-native';
import { colors, Images, myConst, string } from '../common';
import CustomTextMonument from './CustomTextMonument';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomTextInput from './CustomTextInput';
import { Close, Lock } from '../common/Svg';
import CustomTextDMSans from './CustomTextDMSans';
import PrimaryButton from './PrimaryButton';

const ChangePasswordDialog = ({
  showChangePasswordDialog,
  setShowChangePasswordDialog,
  onModelClose,
  oldPassword,
  setOldPassword,
  oldPasswordHideShow,
  setOldPasswordHideShow,
  newPassword,
  setNewPassword,
  newPasswordHideShow,
  setNewPasswordHideShow,
  onPressConfirm,
  onPressClose
}) => {
  return (
    <Modal
      transparent={true}
      animationType={'slide'}
      visible={showChangePasswordDialog}
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
                  {string.change_password}
                </CustomTextMonument>
                <View style={styles.container}>
                  <CustomTextInput
                    title={string.old_password}
                    svg={<Lock />}
                    placeholder={string.enter_your_password}
                    value={oldPassword}
                    changeText={setOldPassword}
                    hideShow
                    hideShowAction={() => setOldPasswordHideShow(!oldPasswordHideShow)}
                    showPassword={oldPasswordHideShow}
                    isPasswordTextBox={oldPasswordHideShow}
                  ></CustomTextInput>
                  <CustomTextInput
                    title={string.new_password}
                    svg={<Lock />}
                    placeholder={string.enter_your_password}
                    value={newPassword}
                    changeText={setNewPassword}
                    hideShow
                    hideShowAction={() => setNewPasswordHideShow(!newPasswordHideShow)}
                    showPassword={newPasswordHideShow}
                    isPasswordTextBox={newPasswordHideShow}
                  ></CustomTextInput>
                  <View style={styles.passInfo}>
                    <View style={styles.rounded}/>
                    <CustomTextDMSans mTop={-2} style={styles.upperCase}>
                      {string.must_contain_at_least_1_uppercase_letter}
                    </CustomTextDMSans>
                  </View>
                  <View style={styles.passInfo}>
                    <View style={styles.rounded}/>
                    <CustomTextDMSans mTop={-2} style={styles.upperCase}>
                      {string.must_be_at_least_8_characters_long}
                    </CustomTextDMSans>
                  </View>
                  <View style={styles.btnContainer}>
                    <PrimaryButton
                      title={string.confirm}
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
    marginTop: 20
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
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  container: {
    marginTop: 10,
  },
  btnContainer: {
    marginTop: 20,
    marginBottom: 80
  }
});

export default ChangePasswordDialog;