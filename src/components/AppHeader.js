import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native';
import { Menu, Logo, Bell, RightArrow, Doller } from '../common/Svg';
import CustomTextMonument from './CustomTextMonument';
import { colors } from '../common';

const { width } = Dimensions.get('window');

const AppHeader = (props) => {
  const { showBell, showBalance, backgroundColor=colors.white } = props;
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.leftSection}>
        <Pressable
          style={styles.menuButton}
          onPress={() => {
            console.log('Menu pressed');
          }}
        >
          <Menu />
        </Pressable>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </View>
      
      <View style={styles.rightSection}>
        {showBell && (
          <Pressable style={styles.bellContainer}>
            <Bell />
          </Pressable>
        )}
        {showBalance && (
          <View style={styles.balanceContainer}>
            <View style={styles.dollarSign}>
              <Doller />
            </View>
            <CustomTextMonument>
              {'2,200'}
            </CustomTextMonument>
            <View style={styles.arrowContainer}>
              <RightArrow />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 12,
    // backgroundColor: '#fff',
    width: '100%',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuButton: {
    padding: 8,
  },
  logoContainer: {
    marginLeft: width * 0.03,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bellContainer: {
    // padding: 8,
    // marginRight: width * 0.02,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 16,
    paddingHorizontal: 12,
    // backgroundColor:'red'
  },
  arrowContainer: {
    marginLeft: 8,
  },
  dollarSign: {

    paddingRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});