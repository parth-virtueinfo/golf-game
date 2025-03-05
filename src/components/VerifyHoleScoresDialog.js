import React from 'react';
import { Image, Modal, Pressable, StyleSheet, View } from 'react-native';
import { colors, Images, myConst, string } from '../common';
import CustomTextMonument from './CustomTextMonument';
import { Close } from '../common/Svg';
import PrimaryButton from './PrimaryButton';

const VerifyHoleScoresDialog = ({
  showVerifyHoleScoresDialog,
  onModelClose,
  onPressCancel,
  onPressConfirmScores
}) => {
  return (
    <Modal
      transparent={true}
      animationType={'slide'}
      visible={showVerifyHoleScoresDialog}
      onRequestClose={onModelClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <View >
            <Image source={Images.ic_bg_change_pass} style={styles.bgImage} />
            <View style={styles.content}>
              <Pressable style={styles.closeBtn} onPress={onPressCancel}>
                <Close />
              </Pressable>
              <CustomTextMonument mTop={10} size={32}>
                {string.verify_hole_scores}
              </CustomTextMonument>
              <View style={styles.container}>
                <View style={styles.btnContainer}>
                <PrimaryButton
                    title={string.confirm_scores}
                    onPress={onPressConfirmScores}
                  ></PrimaryButton>
                  <PrimaryButton
                    title={string.cancel}
                    buttonBackgroundColor={colors.blackPrimary}
                    onPress={onPressCancel}
                  ></PrimaryButton>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default VerifyHoleScoresDialog;

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
    // height: (myConst.windowHeight / 10) * 7.2,
    width: (myConst.windowWidth / 10) * 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    borderWidth: 1,
    borderColor: '#403E3D'
  },
  bgImage: {
    width: '100%',
    position: 'absolute',
    resizeMode: 'cover',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  passInfo: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10
  },
  rounded: {
    backgroundColor: 'red',
    width: 16,
    height: 16,
    borderRadius: 20
  },
  upperCase: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.blackPrimary
  },
  content: {
    paddingHorizontal: 20,
    // flex:1
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
    marginBottom: 40
  },
  cancelBtn: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  cancleEventText: {
    color: colors.red,
    fontWeight: '700',
    fontSize: 14
  }
});