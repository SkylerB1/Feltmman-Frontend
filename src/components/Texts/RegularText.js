import {StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import React from 'react';
import { colors } from '../colors';

const RegularText = props => {
  return (
    <Text style={styles.RegularText} {...props}>
      {props.children}
    </Text>
  );
};

export default RegularText;

const styles = StyleSheet.create({
  RegularText: {
    fontSize: wp(5),
    color: colors.black,
    textAlign: 'left',
  },
});
