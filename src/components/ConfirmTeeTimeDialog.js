import React, { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, Images, myConst, string } from '../common';
import CustomTextMonument from './CustomTextMonument';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Calender, Close, LocationMarker } from '../common/Svg';
import CustomTextDMSans from './CustomTextDMSans';
import PrimaryButton from './PrimaryButton';
import CustomPicker from './CustomPicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ConfirmTeeTimeDialog = ({
  showConfirmTeeTimeDialog,
  onModelClose,
  onPressConfirmTime,
  onPressGoBack,
  onPressClose,
  onPreessCancelEvent,
}) => {
  const currentDate = new Date();
  const [selectedTime, setSelectedTime] = useState(currentDate.getHours().toString().padStart(2, '0') + ':' + currentDate.getMinutes().toString().padStart(2, '0'));
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedTime(date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0'));
    hideDatePicker();
  };

  return (
    <Modal
      transparent={true}
      animationType={'slide'}
      visible={showConfirmTeeTimeDialog}
      onRequestClose={onModelClose}
    >
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="time"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <View>
              <Image source={Images.ic_bg_change_pass} style={styles.bgImage} />
              <View style={styles.content}> 
                <Pressable style={styles.closeBtn} onPress={onPressClose}>
                  <Close />
                </Pressable>
                <CustomTextMonument mTop={10} size={32}>
                  {string.confirm_tee_time}
                </CustomTextMonument>
                <View style={styles.container}>
                  <CustomPicker
                    title={string.tee_time}
                    svg={<Calender />}
                    value={selectedTime}
                    onPress={() => showDatePicker()}
                  />
                  <View style={styles.passInfo}>        
                    <CustomTextDMSans mTop={-2} style={styles.upperCase}>
                      {string.unable_to_confirm_a_tee_time}
                    </CustomTextDMSans>
                  </View>
                  <View style={styles.btnContainer}>
                    <PrimaryButton
                      title={string.confirm_time}
                      onPress={onPressConfirmTime}
                    ></PrimaryButton>
                    <PrimaryButton
                      title={string.go_back}
                      buttonBackgroundColor={colors.blackPrimary}
                      onPress={onPressGoBack}
                    ></PrimaryButton>
                    <Pressable style={styles.cancelBtn} onPress={onPreessCancelEvent}>
                      <Text style={styles.cancleEventText}>{string.cancel_event}</Text>
                    </Pressable>
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

export default ConfirmTeeTimeDialog;

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
    marginLeft: 0
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