import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomTextMonument from './CustomTextMonument';
import { colors } from '../common';
import { RightArrow } from '../common/Svg';
import CustomTextDMSans from './CustomTextDMSans';

const SelectRenederItem = ({ item, onPress, isPenalty = false }) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View>
          <CustomTextMonument size={isPenalty ? 14 : 16} style={styles.title}>
            {item?.title}
          </CustomTextMonument>
          {item?.penalty ? (
            <View style={{ marginBottom: 5 }}>
              <CustomTextDMSans size={12} fontWeight={'700'}>
                {item?.penalty}
              </CustomTextDMSans>
            </View>
          ): null}
        </View>
        <View style={styles.rightArrowContent}>
          <RightArrow />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SelectRenederItem;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 5,
  },
  container: {
    borderWidth: 1,
    borderColor: colors.blackPrimary,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightArrowContent: {
    position:'absolute',
    right: 20,
    top: 21,
  },
  title: {
    paddingRight: 10
  }
});