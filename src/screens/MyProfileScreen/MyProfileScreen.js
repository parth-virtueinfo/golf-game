import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppHeader from '../../components/AppHeader';
import { colors } from '../../common';
import { useNavigation } from '@react-navigation/native';

const MyProfileScreen = () => {
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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
});

export default MyProfileScreen;