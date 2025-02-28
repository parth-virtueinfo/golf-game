import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../common';
import { ActiveHome, ActiveMyProfile, ActiveRounds, InActiveHome, InActiveMyProfile, InActiveRounds, InActiveSetting } from '../common/Svg';

const ICONS = {
  HomeStack: { active: ActiveHome, inactive: InActiveHome },
  MyProfileStack: { active: ActiveMyProfile, inactive: InActiveMyProfile },
  RoundStack: { active: ActiveRounds, inactive: InActiveRounds },
  SettingStack: { active: InActiveSetting, inactive: InActiveSetting },
};

export const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const Icon = isFocused ? ICONS[route.name].active : ICONS[route.name].inactive;
        const iconColor = isFocused ? colors.primaryColor : colors.blackPrimary;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={{ flex: 1, alignItems: 'center', paddingVertical: 10, }}
          >
            {Icon && (
              <Icon 
                width={24} // Increase width for SettingStack icon
                height={24}  
              />
            )}
            <Text 
              style={{ 
                color: isFocused ? colors.primaryColor : colors.blackPrimary,
                fontSize: 14, 
                marginTop: 8,
                fontWeight: isFocused ? '700' : '400',
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
