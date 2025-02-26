import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../common';
import CustomTextMonument from './CustomTextMonument';

const InfoCard = ({
  title,
  description,
  icon,
  containerStyle
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {icon && icon}
      <View style={styles.content}>
        <CustomTextMonument>
          {title}
        </CustomTextMonument>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 20,
    // alignItems: 'center'
  },
  content: {
    marginHorizontal: 20,
    // padding: 20
  }
});