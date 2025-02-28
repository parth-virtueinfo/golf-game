import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, Images, string } from '../../common';
import AppHeader from '../../components/AppHeader';
import ProgressStepCreateAccount from '../../components/ProgressStepCreateAccount';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomTextMonument from '../../components/CustomTextMonument';
import InfoCard from '../../components/InfoCard';
import { Calender, Card } from '../../common/Svg';
import PrimaryButton from '../../components/PrimaryButton';
import { ScreenName } from '../../common/ScreenName';
import CustomPicker from '../../components/CustomPicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const CreateDateOfBirthScreen = () => {
  const navigation = useNavigation();
  
  const currentDate = new Date();
  const [day, setDay] = useState(currentDate.getDate().toString().padStart(2, '0'));
  const [month, setMonth] = useState((currentDate.getMonth() + 1).toString().padStart(2, '0'));
  const [year, setYear] = useState(currentDate.getFullYear().toString());

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [pickerType, setPickerType] = useState(null);

  const showDatePicker = (type) => {
    setPickerType(type);
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    if (pickerType === 'day') {
      setDay(date.getDate().toString().padStart(2, '0'));
    } else if (pickerType === 'month') {
      setMonth((date.getMonth() + 1).toString().padStart(2, '0'));
    } else if (pickerType === 'year') {
      setYear(date.getFullYear().toString());
    }
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Image source={Images.ic_bg_account_1} style={styles.bgImage} />
      <AppHeader backgroundColor={'transparent'} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
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
          <CustomPicker
            title={string.day}
            svg={<Calender />}
            value={day}
            onPress={() => showDatePicker('day')}
          />
          <CustomPicker
            title={string.month}
            svg={<Calender />}
            value={month}
            onPress={() => showDatePicker('month')}
          />
          <CustomPicker
            title={string.year}
            svg={<Calender />}
            value={year}
            onPress={() => showDatePicker('year')}
          />
          
          <View style={styles.buttonContainer}>
            <PrimaryButton
              title={string.next}
              onPress={() => {
                navigation.navigate(ScreenName.CreateAddress);
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