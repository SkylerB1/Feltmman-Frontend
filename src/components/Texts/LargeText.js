import {StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import React from 'react';
import { colors } from '../colors';

const LargeText = props => {
  return (
    <Text style={styles.LargeText} {...props}>
      {props.children}
    </Text>
  );
};

export default LargeText;

const styles = StyleSheet.create({
  LargeText: {
    fontSize: wp(8),
    color: colors.black,
    textAlign: 'left',
  },
});
