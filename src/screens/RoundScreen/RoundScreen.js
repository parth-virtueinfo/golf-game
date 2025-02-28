import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../common';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../components/AppHeader';

const RoundScreen = () => {
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

export default RoundScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
});