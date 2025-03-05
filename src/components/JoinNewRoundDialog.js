import React, { useRef, useState } from 'react';
import { Animated, Image, Modal, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { colors, Images, myConst, string } from '../common';
import CustomTextMonument from './CustomTextMonument';
import { Close } from '../common/Svg';
import CustomTextDMSans from './CustomTextDMSans';
import PrimaryButton from './PrimaryButton';
import CustomeCheckBox from './CustomCheckBox';

const JoinNewRoundDialog = ({
  showJoinNewRoundDialog,
  setShowJoinNewRoundDialog,
  onModelClose,
  onPressClose,
  onPressJoin,
  checked,
  onPressChecked,
  onPressTermsOfService,
  onPressPrivacyPolicy
}) => {
  const [wholeHeight, setWholeHeight] = useState(1);
  const [visibleHeight, setVisibleHeight] = useState(0);
  const indicator = useRef(new Animated.Value(0)).current;
  const difference = wholeHeight - visibleHeight;
  const indicatorSize =
    wholeHeight > visibleHeight
      ? (visibleHeight * visibleHeight) / wholeHeight
      : visibleHeight;

  return (
    <Modal
      transparent={true}
      animationType={'slide'}
      visible={showJoinNewRoundDialog}
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
                {string.join_new_round}
              </CustomTextMonument>
              <View style={styles.container}>
                <View style={styles.scrollContainer}>
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                    onContentSizeChange={(width, height) => {
                      setWholeHeight(height);
                    }}
                    onLayout={({
                      nativeEvent: {
                        layout: { height },
                      },
                    }) => setVisibleHeight(height)}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                      [{nativeEvent: {contentOffset: {y: indicator}}}],
                      {useNativeDriver: false}
                    )}
                  >
                    <CustomTextDMSans style={styles.upperCase}>
                      {string.non_punishable_event_leaves}
                    </CustomTextDMSans>
                    <View style={styles.checkboxContainer}>
                      <CustomeCheckBox
                        checked={checked}
                        onPress={onPressChecked}
                      ></CustomeCheckBox>
                      <View style={styles.checkboxText}>
                        <CustomTextDMSans style={styles.lowerCase}>
                          {string.i_agree_to_the}
                          <CustomTextDMSans style={styles.decorationTxt}  onPress={onPressTermsOfService}>
                            {string.terms_of_service}{','}
                          </CustomTextDMSans>
                          <CustomTextDMSans style={styles.lowerCase} onPress={onPressPrivacyPolicy}>
                            {string.including_the_arbitration_provision_and}
                          </CustomTextDMSans>
                          <CustomTextDMSans style={styles.decorationTxt}  onPress={onPressPrivacyPolicy}>
                            {string.privacy_policys}
                          </CustomTextDMSans>
                        </CustomTextDMSans>
                      </View>
                    </View>
                  </ScrollView>
                  <View style={styles.scrollTrack}>
                    <Animated.View
                      style={[
                        styles.scrollIndicator,
                        {
                          height: indicatorSize,
                          transform: [
                            {
                              translateY: Animated.multiply(
                                indicator,
                                visibleHeight / wholeHeight
                              ).interpolate({
                                inputRange: [0, difference],
                                outputRange: [0, difference],
                                extrapolate: 'clamp',
                              }),
                            },
                          ],
                        },
                      ]}
                    />
                  </View>
                </View>
                <View style={styles.btnContainer}>
                  <PrimaryButton
                    title={string.join_round}
                    disabled={!checked}
                    buttonBackgroundColor={checked ? colors.primaryColor : colors.grayLight}
                    onPress={onPressJoin}
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

export default JoinNewRoundDialog;

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
  scrollContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
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
  scrollTrack: {
    width: 5,
    height: '100%',
    // backgroundColor: '#E8E8E8',
    borderRadius: 2,
    marginLeft: 8,
    marginVertical:10
  },
  scrollIndicator: {
    width: '100%',
    backgroundColor: '#4169E1',
    borderRadius: 2,
  },
  lowerCase: {
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  checkboxText: {
    marginLeft: 15,
  },
  decorationTxt: {
    color: colors.primaryColor,
    fontWeight: '700',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});