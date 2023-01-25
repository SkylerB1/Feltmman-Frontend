import { StyleSheet, Text } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import React from 'react'
import { colors } from '../colors';

const SmallText = (props) => {
  return (
      <Text style={styles.txt} {...props} >{ props.children}</Text>
  )
}

export default SmallText

const styles = StyleSheet.create({
  txt: {
    fontSize: wp(3.7),
    color: colors.black,
    textAlign: 'left',
    fontStyle: 'normal',

    letterSpacing: -0.333333,
    fontFamily: 'Poppins-Bold',
  },
});