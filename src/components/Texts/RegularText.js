import {StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import React from 'react';
import { colors } from '../colors';

const RegularText = props => {
  return (
    <Text style={[styles.txt,props.style]}>
      {props.children}
    </Text>
  );
};

export default RegularText;

const styles = StyleSheet.create({
  txt: {
    fontSize: wp(4.5),
    color: colors.black,
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight:'bold',
    fontFamily: 'Poppins-SemiBold',
  },
});
