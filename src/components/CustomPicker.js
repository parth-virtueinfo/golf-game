import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "./scalling";
import { colors, Fonts } from "../common";
import CustomTextDMSans from "./CustomTextDMSans";
import { RightArrow } from "../common/Svg";

const CustomPicker = React.forwardRef((props, ref) => {
  const {
    svg,
    source,
    cStyles,
    height = verticalScale(185),
    width = "100%",
    borderRadius = moderateScale(16),
    borderColor = colors.blackPrimary,
    borderWidth = moderateScale(1),
    isBorder = true,
    title = "CHANGE",
    value,
    onPress,
  } = props;

  const renderIcon = () => {
    if (svg) return <View>{svg}</View>;
    if (source) return <Image source={source} style={styles.iconImage} />;
    return null;
  };

  return (
    <View>
      <View style={[styles.container, { height, width, borderRadius, borderColor, borderWidth: isBorder ? borderWidth : 0 }]}>
        <View style={styles.headerContainer}>
          {renderIcon()}
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={[styles.inputContainer, cStyles]}>
          <View style={[styles.input, cStyles]}>
            <CustomTextDMSans style={styles.value}>
              {value}
            </CustomTextDMSans>
          </View>
          <TouchableOpacity style={styles.rightArrowContent} onPress={onPress}>
            <RightArrow />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    fontFamily: Fonts.MonumentExtendedRegular,
    fontWeight: "400",
    color: colors.blackPrimary,
    marginTop: moderateScale(20),
    backgroundColor: colors.white,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(30),
  },
  title: {
    fontSize: moderateScale(23),
    fontFamily: Fonts.MonumentExtendedRegular,
    fontWeight: "400",
    marginLeft: moderateScale(18),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: moderateScale(10),
  },
  input: {
    paddingLeft: moderateScale(27),
    flex: 1,
  },
  iconImage: {
    width: 20,
    height: 20,
  },
  rightArrowContent: {
    marginRight: moderateScale(27),
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    fontWeight: '700',
  }
});

export default CustomPicker;
