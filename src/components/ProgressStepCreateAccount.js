import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { LeftArrow } from '../common/Svg';
import { colors, Fonts } from '../common';

const ProgressStepCreateAccount = ({ onBackPress, currentStep, width }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress}>
        <LeftArrow />
      </Pressable>
      <View style={styles.stepTextContainer}>
        <Text style={styles.stepText}>STEP {currentStep} OF 5</Text>
      </View>
      <View style={[styles.progressBar]}>
        <View style={[styles.progressFilled, {width}]} />
        <View style={[styles.progressEmpty]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 15,
    flexDirection: 'row',
  },
  progressBar: {
    flexDirection: 'row',
    height: 4,
    backgroundColor: '#E5E5E5',
    borderRadius: 2,
    overflow: 'hidden',
    marginLeft: 10,
    flex: 0.66
  },
  progressFilled: {
    width: '20%',
    height: '100%',
    backgroundColor: colors.primaryColor,
  },
  progressEmpty: {
    
  },
  stepTextContainer: {
    marginLeft: 8,
  },
  stepText: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.blackPrimary,
    letterSpacing: 0.5,
    fontFamily: Fonts.MonumentExtendedRegular
  },
});

export default ProgressStepCreateAccount;