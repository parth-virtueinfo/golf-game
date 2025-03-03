import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { Animated, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { colors, Images, string } from '../../common';
import CustomTextMonument from '../../components/CustomTextMonument';
import { DollerSplash, SwingStakes } from '../../common/Svg';
import { ScreenName } from "../../common/ScreenName";

const SplashScreen = () => {
  const navigation = useNavigation();
  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(
      () => navigation.replace(ScreenName.AuthStack)
    );
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={Images.ic_bg_splash} style={styles.bgImage}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <SwingStakes />
          </View>
          <View style={styles.dollerContainer}>
            <DollerSplash width={400} />
          </View>

          <View style={styles.textContainer}>
            <CustomTextMonument size={15}>
              {string.match_compete_win}
            </CustomTextMonument>
            <CustomTextMonument size={8} mTop={30}>
              {string.loading}
            </CustomTextMonument>
            <View style={styles.progressContainer}>
              <Animated.View
                style={[
                  styles.progressBar,
                  {
                    width: progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["0%", "100%"],
                    }),
                  },
                ]}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
  },
  logoContainer: {
    marginTop: 270,
    marginLeft: 20
  },
  dollerContainer: {
    marginTop: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  bgImage: {
    width: '100%',
    resizeMode: 'contain',
    height: 500,
  },
  progressBar: {
    height: "100%",
    backgroundColor: colors.primaryColor,
  },
  progressContainer: {
    width: 153,
    height: 6,
    backgroundColor: "#D3D3D3",
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 10,
  },
});