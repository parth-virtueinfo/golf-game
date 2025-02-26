import React from "react";
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "./scalling";
import { colors, Fonts, Images } from "../common";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const CustomTextInput = React.forwardRef((props, ref) => {
  const {
    // Icon props
    svg,
    source,

    // Style props
    cStyles,
    height = verticalScale(185),
    width = "100%",
    borderRadius = moderateScale(16),
    borderColor = colors.blackPrimary,
    borderWidth = moderateScale(1),
    isBorder = true,

    // Text input props
    title = "CHANGE",
    placeholder,
    value,
    changeText,
    editable = true,
    keyType = "default",
    autoCapitalize = "sentences",
    placeholderTextColor = "rgba(203, 203, 203, 1)",
    maxLength = 100,
    multiline = false,
    returnKeyType,
    onSubmitEditing,
    blurOnSubmit,
    onFocous,

    // Password props
    isPasswordTextBox = false,
    hideShow,
    hideShowAction,
    showPassword,
  } = props;

  const renderIcon = () => {
    if (svg) return <View>{svg}</View>;
    if (source) return <Image source={source} style={styles.iconImage} />;
    return null;
  };

  const renderPasswordIcon = () => {
    if (!hideShow) return null;

    return (
      <TouchableOpacity style={styles.passwordIcon} onPress={hideShowAction}>
        {/* <Image
          source={showPassword ? Images.eye : Images.eye_off}
          style={styles.passwordIconImage}
          imageStyle={styles.passwordIconImageStyle}
        /> */}
        <MaterialIcons
          name={showPassword ? "visibility-off" : "visibility"}
          size={20}
          color="#555"
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={[styles.container, { height, width, borderRadius, borderColor, borderWidth: isBorder ? borderWidth : 0 }]}>
        <View style={styles.headerContainer}>
          {renderIcon()}
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={[styles.inputContainer, cStyles]}>
          <TextInput
            style={[
              styles.input,
              cStyles,
              !editable && styles.disabledInput
            ]}
            multiline={multiline}
            maxLength={maxLength}
            secureTextEntry={isPasswordTextBox}
            placeholder={placeholder}
            value={value}
            editable={editable}
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyType}
            onChangeText={changeText}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
            blurOnSubmit={blurOnSubmit}
            onFocus={onFocous}
            autoCapitalize={autoCapitalize}
            ref={ref}
          >
            {props.children}
          </TextInput>
          {renderPasswordIcon()}
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
    marginTop: moderateScale(-10),
  },
  input: {
    height: 50,
    paddingLeft: moderateScale(27),
    borderRadius: moderateScale(16),
    fontSize: moderateScale(22),
    fontWeight: "400",
    color: colors.blackPrimary,
    flex: 1,
  },
  disabledInput: {
    backgroundColor: "#efefef",
    borderColor: "#efefef",
  },
  iconImage: {
    width: 20,
    height: 20,
  },
  passwordIcon: {
    marginRight: 10,
    padding: 10,
  },
  passwordIconImage: {
    width: 22,
    height: 22,
    resizeMode: "cover",
    alignSelf: "center",
    tintColor: colors.primary,
  },
  passwordIconImageStyle: {
    borderRadius: 3,
  },
});

export default CustomTextInput;
