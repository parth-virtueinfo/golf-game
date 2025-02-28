import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../../components/AppHeader';
import { colors } from '../../common';

const SettingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <AppHeader
        showBalance={true}
        showBell={true}
      ></AppHeader>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
});