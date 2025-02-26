import React from "react";
import { Text } from "react-native";
import { moderateScale } from "./scalling";
import { colors, Fonts } from "../common";

const CustomTextMonument = (props) => {
  const {
    style,
    mTop = 0,
    borderWidth = 0,
    size = moderateScale(23),
    textAlignment = "left",
    color = colors.blackPrimary,
    paddingleft = 0,
    margin = 0,
    fontFamily = Fonts.MonumentExtendedRegular,
    fontWeight = "400",
    numberOfLines,
    ellipsizeMode,
    onTextLayout=null
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
    >
      {props.children}
    </Text>
  );
};

export default CustomTextMonument;
