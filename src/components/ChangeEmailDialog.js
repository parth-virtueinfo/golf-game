import React from 'react';
import { Image, Modal, Pressable, StyleSheet, View } from 'react-native';
import { colors, Images, myConst, string } from '../common';
import CustomTextMonument from './CustomTextMonument';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomTextInput from './CustomTextInput';
import { Close, Email } from '../common/Svg';
import CustomTextDMSans from './CustomTextDMSans';
import PrimaryButton from './PrimaryButton';

const ChangeEmailDialog = ({
  showChangeEmailDialog,
  setShowChangeEmailDialog,
  onModelClose,
  oldEmail,
  setOldEmail,
  newEmail,
  setNewEmail,
  onPressConfirm,
  onPressClose
}) => {
  return (
    <Modal
      transparent={true}
      animationType={'slide'}
      visible={showChangeEmailDialog}
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
                  {string.change_email}
                </CustomTextMonument>
                <View style={styles.container}>
                  <CustomTextInput
                    title={string.Email}
                    svg={<Email />}
                    placeholder={string.enter_your_old_email}
                    value={oldEmail}
                    changeText={setOldEmail}
                    editable={false}
                  ></CustomTextInput>
                  <CustomTextInput
                    title={string.new_email}
                    svg={<Email />}
                    placeholder={string.enter_your_new_email}
                    value={newEmail}
                    changeText={setNewEmail}
                  ></CustomTextInput>
                  <View style={styles.passInfo}>        
                    <CustomTextDMSans mTop={-2} style={styles.upperCase}>
                      {string.your_current_email_will_be_sent}
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

export default ChangeEmailDialog;

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
    shadowOpacity: 0.3,  // Increased for better visibility
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
  }
});