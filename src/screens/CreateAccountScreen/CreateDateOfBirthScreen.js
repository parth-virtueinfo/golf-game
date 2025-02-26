import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, Images, string } from '../../common';
import AppHeader from '../../components/AppHeader';
import ProgressStepCreateAccount from '../../components/ProgressStepCreateAccount';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomTextMonument from '../../components/CustomTextMonument';
import InfoCard from '../../components/InfoCard';
import { Calender, Card, User } from '../../common/Svg';
import CustomTextInput from '../../components/CustomTextInput';
import PrimaryButton from '../../components/PrimaryButton';

const CreateDateOfBirthScreen = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <View style={styles.container}>
      <Image source={Images.ic_bg_account_1} style={styles.bgImage} />
      <AppHeader backgroundColor={'transparent'} />
      <View style={styles.content}>
        <ProgressStepCreateAccount
          width={'60%'} 
          currentStep={3}
          onBackPress={() => navigation.goBack()}
        />
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <CustomTextMonument style={styles.title}>
            {string.enter_your_date_of_birth}
          </CustomTextMonument>
          <InfoCard
            title={string.important}
            description={string.make_sure_this_info_matches_your_driver_s_license}
            icon={<Card />}
            containerStyle={styles.infoCard}
          />
          <CustomTextInput
            title={string.day}
            svg={<Calender />}
            placeholder={string.type_here}
            value={firstName}
            changeText={setFirstName}
          />
          <CustomTextInput
            title={string.month}
            svg={<Calender />}
            placeholder={string.type_here}
            value={lastName}
            changeText={setLastName}
          />
          <CustomTextInput
            title={string.year}
            svg={<Calender />}
            placeholder={string.type_here}
            value={lastName}
            changeText={setLastName}
          />
          <View style={styles.buttonContainer}>
            <PrimaryButton
              title={string.next}
              onPress={() => {
                
              }}
            ></PrimaryButton>
          </View>
        </KeyboardAwareScrollView> 
      </View>
    </View>
  )
}

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
    justifyContent:'flex-end'
  },
  infoCard: {
    marginTop: 10
  }
});

export default CreateDateOfBirthScreen;