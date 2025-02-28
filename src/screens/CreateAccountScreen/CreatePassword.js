import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, Images, string } from '../../common';
import AppHeader from '../../components/AppHeader';
import ProgressStepCreateAccount from '../../components/ProgressStepCreateAccount';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomTextMonument from '../../components/CustomTextMonument';
import { Lock } from '../../common/Svg';
import CustomTextInput from '../../components/CustomTextInput';
import PrimaryButton from '../../components/PrimaryButton';
import { ScreenName } from '../../common/ScreenName';
import CustomTextDMSans from '../../components/CustomTextDMSans';
import CustomeCheckBox from '../../components/CustomCheckBox';

const CreatePassword = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [hideShow, setHideShow] = useState(true);
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={Images.ic_bg_account_1} style={styles.bgImage} />
      <AppHeader backgroundColor={'transparent'} />
      <View style={styles.content}>
        <ProgressStepCreateAccount
          width={'100%'}
          currentStep={5}
          onBackPress={() => navigation.goBack()}
        />
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <CustomTextMonument style={styles.title}>
            {string.create_your_password}
          </CustomTextMonument>
          <CustomTextDMSans style={styles.subtitle}>
            {string.you_ll_use_this_to_log_into_your_account}
          </CustomTextDMSans>
          <CustomTextInput 
            title={string.password}
            svg={<Lock />}
            placeholder={string.enter_your_password}
            value={password}
            changeText={setPassword}
            hideShow
            hideShowAction={() => setHideShow(!hideShow)}
            showPassword={hideShow}
            isPasswordTextBox={hideShow}
          />
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
          <View style={styles.termContent}>
            <CustomeCheckBox
              checked={checked}
              onPress={() => setChecked(!checked)}
            ></CustomeCheckBox>
            <CustomTextDMSans style={styles.upperCase}>
              {string.by_creating_an_account_you_agree_to_Swing_Stakes}
              <CustomTextDMSans style={styles.decorationTxt} onPress={() => {}}>
                {string.terms_of_service}
              </CustomTextDMSans>
              <CustomTextDMSans>
                {string.including_the_arbitration_provision_and}
              </CustomTextDMSans>
              <CustomTextDMSans style={styles.decorationTxt} onPress={() => {}}>
                {string.privacy_policy}
              </CustomTextDMSans>
              <CustomTextDMSans>
                {string.acknowledge_that_you_have_received}
              </CustomTextDMSans>
            </CustomTextDMSans>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              title={string.next}
              onPress={() => {
                navigation.navigate(ScreenName.BottomTabs);
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
    marginTop: 0
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
    justifyContent: 'flex-end'
  },
  upperCase: {
    marginLeft: 10
  },
  passInfo: {
    flexDirection: 'row',
    marginTop:20
  },
  rounded: {
    backgroundColor:'red',
    width:16,
    height:16,
    borderRadius: 20
  },
  decorationTxt: {
    color:colors.primaryColor,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  termContent: {
    flexDirection:'row',
    marginTop: 35
  },
});

export default CreatePassword;
