import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RegularText from '../Texts/RegularText';
import RightArrow from '../../assets/images/RightArrow.svg';

import MemberShip from '../../assets/images/MembershipIcon.svg';
import Profile from '../../assets/images/ProfileIcon.svg';
import Notification from '../../assets/images/NotificationIcon.svg';
import Privacy from '../../assets/images/PrivacyIcon.svg';
import Help from '../../assets/images/HelpIcon.svg';
import Block from '../../assets/images/BlockIcon.svg';
import Logout from '../../assets/images/LogoutIcon.svg';
import Delete from '../../assets/images/DeleteIcon.svg';
import Key from '../../assets/images/Key.svg';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../colors';

const SelectOption = ({title, color, icon, style,onPress,showProfile,profile}) => {
  const hanleShowIcon = () => {
    switch (icon) {
      case 'Membership':
        return <MemberShip width={wp(8)} height={wp(8)} />;
      case 'Profile':
        return <Profile width={wp(8)} height={wp(8)} />;
      case 'Notification':
        return <Notification width={wp(8)} height={wp(8)} />;
      case 'Privacy':
        return <Privacy width={wp(8)} height={wp(8)} />;
      case 'Help':
        return <Help width={wp(8)} height={wp(8)} />;
      case 'Block':
        return <Block width={wp(8)} height={wp(8)} />;
      case 'Logout':
        return <Logout width={wp(8)} height={wp(8)} />;
      case 'Delete':
        return <Delete width={wp(8)} height={wp(8)} />;
      case 'Key':
        return <Key width={wp(5)} height={wp(5)} />;
      default:
        return null;
    }
  };
  return (
    <Pressable onPress={onPress} style={[styles.main, style]}>
      {icon && hanleShowIcon()}
      {showProfile && 
        <Image
          style={{width: wp(11), height: wp(11)}}
          source={require('../../assets/images/DummyProfile.png')}
        />
      }
      <View style={{flex: 1, marginLeft: '5%'}}>
        <RegularText style={{color: color}}>{title}</RegularText>
      </View>
      <RightArrow width={wp(3)} height={wp(3)} />
    </Pressable>
  );
};

export default SelectOption;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightSilver,
    padding: '5%',
    marginHorizontal: '4%',
    marginTop: '4%',
    borderRadius: 10,
  },
});
