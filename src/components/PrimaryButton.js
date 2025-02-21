import React from "react";
import { Image, Pressable, Text } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "./scalling";
import { colors } from "../common";
import Icon from "./Icon";

const PrimaryButton = (props) => {
  const {
    buttonStyle,
    textStyle,
    buttonWidth = "100%",
    buttonHeight = verticalScale(80),
    buttonBackgroundColor = colors.primaryColor,
    buttonJustifyContent = "center",
    buttonBorderRadius = moderateScale(40),
    buttonMarginTop = moderateScale(20),
    title,
    iSource,
    showIcon = iconType,
    onPress,
    iconStyle,
    showImage = iSource,
    iconType,
    iconName,
    iconColor = colors.white,
    iconSize = 20,
    textColor= colors.white,
  } = props;

  return (
    <Pressable
      style={[
        {
          width: buttonWidth,
          height: buttonHeight,
          backgroundColor: buttonBackgroundColor,
          borderRadius: buttonBorderRadius,
          justifyContent: buttonJustifyContent,
          marginTop: buttonMarginTop,
          flexDirection: "row",
          alignItems: "center",
        },
        buttonStyle,
      ]}
      onPress={onPress}
    >
      {showImage && (
        <Image
          style={[{
            height: verticalScale(45),
            width: horizontalScale(45),
            marginHorizontal: moderateScale(14),
          },iconStyle]}
          source={iSource}
          resizeMode={'contain'}
        />
      )}

      {showIcon && (
        <Icon type={iconType} name={iconName} color={iconColor} size={iconSize} />
      )}

      <Text
        style={[
          {
            color: textColor,
            fontSize: moderateScale(22),
            textAlign: "center",
            fontWeight: "700",
            marginLeft: showIcon || showImage ? 10 : 0
          },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

export default PrimaryButton;