import React from 'react';
import { Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { colors } from '../common';


const Icon = ({ type, name, localIcon, url, size, color, width = 60, height = 60, style }) => {
  const getIcon = () => {
    switch (type) {
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={name} size={size} color={color || colors.white} />;
      case 'MaterialIcons':
        return <MaterialIcons name={name} size={size} color={color || colors.white} />;
      case 'Ionicons':
        return <Ionicons name={name} size={size} color={color || colors.white} />;
      case 'FontAwesome':
        return <FontAwesome name={name} size={size} color={color || colors.white} />;
      case 'Entypo':
        return <Entypo name={name} size={size} color={color || colors.white} />;
      case 'AntDesign':
        return <AntDesign name={name} size={size} color={color || colors.white} />;
      case 'Feather':
        return <Feather name={name} size={size} color={color || colors.white} />;
      case 'SimpleLineIcons':
        return <SimpleLineIcons name={name} size={size} color={color || colors.white} />;
      case 'Fontisto':
        return <Fontisto name={name} size={size} color={color || colors.white} />;
      case 'FontAwesome5':
        return <FontAwesome5 name={name} size={size} color={color || colors.white} />;
      case 'FontAwesome6':
        return <FontAwesome6 name={name} size={size} color={color || colors.white} />;
      case 'url':
        return <Image source={{ uri: url }} style={[styles.icon, style]} />;
      default:
        return localIcon;
    }
  };

  return getIcon();
};
const styles = StyleSheet.create({
  icon: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    backgroundColor: colors.white,
    borderRadius: 6,
  },
});
export default Icon;
