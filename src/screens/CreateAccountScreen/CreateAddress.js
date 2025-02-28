import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, Images, string } from '../../common';
import AppHeader from '../../components/AppHeader';
import ProgressStepCreateAccount from '../../components/ProgressStepCreateAccount';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomTextMonument from '../../components/CustomTextMonument';
import InfoCard from '../../components/InfoCard';
import { Card, LocationMarker, LocationMarkerWhite } from '../../common/Svg';
import CustomTextInput from '../../components/CustomTextInput';
import PrimaryButton from '../../components/PrimaryButton';
import { ScreenName } from '../../common/ScreenName';
import { moderateScale } from '../../components/scalling';

const CreateAddress = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');

  return (
    <View style={styles.container}>
      <Image source={Images.ic_bg_account_1} style={styles.bgImage} />
      <AppHeader backgroundColor={'transparent'} />
      <View style={styles.content}>
        <ProgressStepCreateAccount
          width={'80%'}
          currentStep={4}
          onBackPress={() => navigation.goBack()}
        />
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <CustomTextMonument style={styles.title}>
            {string.enter_your_address}
          </CustomTextMonument>
          <InfoCard
            title={string.important}
            description={string.make_sure_this_info_matches_your_driver_s_license}
            icon={<Card />}
            containerStyle={styles.infoCard}
          />
          <View style={styles.currentLocationContent}>
            <PrimaryButton
              title={string.confirm_current_location}
              buttonBorderRadius={10}
              buttonWidth={'70%'}
              buttonMarginTop={0}
              svg={<LocationMarkerWhite />}
              textStyle={styles.currentLocationTxt}
            ></PrimaryButton>
            <View style={styles.displayLocation}>
              <Text style={styles.locationLabel}>{string.location}</Text>
              <Text numberOfLines={1} style={styles.locationLabel}>{'Texas'}</Text>
            </View>
          </View>
          <CustomTextInput
            title={string.address}
            svg={<LocationMarker />}
            placeholder={string.start_searching_here}
            value={firstName}
            changeText={setFirstName}
          />  
          <View style={styles.buttonContainer}>
            <PrimaryButton
              title={string.next}
              onPress={() => {
                navigation.navigate(ScreenName.CreatePassword);
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
  infoCard: {
    marginTop: 10
  },
  currentLocationContent: {
    flexDirection: 'row',
    alignItems:'center',
    marginTop: moderateScale(20),
    justifyContent:'space-between',
  },
  currentLocationTxt: {
    fontSize: 14,
  },
  locationLabel: {
    fontSize: 12,
  },
  displayLocation: {
    flexDirection:'row'
  }
});

export default CreateAddress;