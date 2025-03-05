import React from 'react';
import { Image, Modal, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { colors, Images, myConst, string } from '../common';
import CustomTextMonument from './CustomTextMonument';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Card, Close } from '../common/Svg';
import CustomTextDMSans from './CustomTextDMSans';
import PrimaryButton from './PrimaryButton';

const LeaveRoundDialog = ({
  showLeaveRoundDialog,
  setShowLeaveRoundDialog,
  onModelClose,
  onPressLeave,
  onPressClose,
  onPressContinue,
}) => {
  return (
    <Modal
      transparent={true}
      animationType={'slide'}
      visible={showLeaveRoundDialog}
      onRequestClose={onModelClose}
    >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <View style={styles.mainContainer}>
              <Image source={Images.ic_bg_change_pass} style={styles.bgImage} />
              <View style={styles.content}>
                <Pressable style={styles.closeBtn} onPress={onPressClose}>
                  <Close />
                </Pressable>
                <CustomTextMonument mTop={5} size={32}>
                  {string.warning_leave_round}
                </CustomTextMonument>
                <View style={styles.container}>
                  <ScrollView
                    showsVerticalScrollIndicator={true}
                    contentContainerStyle={styles.scrollContent}
                  >
                    <CustomTextDMSans style={styles.upperCase}>
                      {string.non_punishable_event_leaves}
                    </CustomTextDMSans>
                  </ScrollView>
                  <View style={styles.btnContainer}>
                    <PrimaryButton
                      title={string.leave}
                      buttonBackgroundColor={colors.red}
                      onPress={onPressLeave}
                    />
                    <PrimaryButton
                      title={string.cancel}
                      buttonBackgroundColor={colors.blackPrimary}
                      onPress={onPressClose}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View> 
    </Modal>
  );
};

export default LeaveRoundDialog;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(31, 30, 30, 0.8)',
  },
  activityIndicatorWrapper: {
    backgroundColor: colors.white,
    height: (myConst.windowHeight / 10) * 7,
    width: (myConst.windowWidth / 10) * 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: '#403E3D',
    overflow: 'hidden'
  },
  mainContainer: {
    flex: 1,
  },
  bgImage: {
    width: '100%',
    position: 'absolute',
    resizeMode: 'cover',
    height: 143,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    marginTop: 10,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
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
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  btnContainer: {
    marginBottom: 30
  },
  upperCase: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.blackPrimary,
    marginTop: 10,
  },
});