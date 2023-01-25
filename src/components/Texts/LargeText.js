import {StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import React from 'react';
import { colors } from '../colors';

const LargeText = props => {
  return (
    <Text style={styles.txt} {...props}>
      {props.children}
    </Text>
  );
};

export default LargeText;

const styles = StyleSheet.create({
  txt: {
    fontSize: wp(7),
    color: colors.black,
    letterSpacing: -0.333333,
    lineHeight:36,
    fontStyle:'normal',
    fontWeight:'600',
    textAlign: 'left',
    fontFamily:'Poppins-Bold'
  },
});
