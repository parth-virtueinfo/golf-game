import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CheckedRight } from '../common/Svg';
import { colors } from '../common';

const CustomeCheckBox = ({
  checked,
  onPress
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.checkBox, checked ? styles.checked : styles.unchecked]}>
        <CheckedRight />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  checkBox: {
    height: 28,
    width: 28,
    borderRadius: 4,
    backgroundColor: colors.white,
    borderColor: colors.blackPrimary,
    borderWidth: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  checked: {
    backgroundColor: colors.primaryColor,
    borderColor: colors.primaryColor,
  },
  unchecked: {
    backgroundColor: colors.white,
  }
});

export default CustomeCheckBox;