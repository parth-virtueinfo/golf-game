import React from "react";
import { Text } from "react-native";
import { moderateScale } from "./scalling";
import { colors, Fonts } from "../common";

const CustomTextDMSans = (props) => {
  const {
    style,
    mTop = 0,
    borderWidth = 0,
    size = 16,
    textAlignment = "left",
    color = colors.grayLight,
    paddingleft = 0,
    margin = 0,
    fontFamily = Fonts.DMSansRegular,
    fontWeight = "400",
    numberOfLines,
    ellipsizeMode,
    onTextLayout=null,
    onPress
  } = props;

  const defaultStyles = {
    marginTop: mTop,
    margin: margin,
    borderWidth: borderWidth,
    fontSize: size,
    fontFamily: fontFamily,
    textAlign: textAlignment,
    color: color,
    paddingLeft: paddingleft,
    fontWeight: fontWeight,
  };

  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[defaultStyles, style]}
      onTextLayout={onTextLayout}
      onPress={onPress}
    >
      {props.children}
    </Text>
  );
};

export default CustomTextDMSans;
