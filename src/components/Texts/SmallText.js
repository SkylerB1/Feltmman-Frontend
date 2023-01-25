import { StyleSheet, Text } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import React from 'react'
import { colors } from '../colors';

const SmallText = (props) => {
  return (
      <Text style={styles.SmallText} {...props} >{ props.children}</Text>
  )
}

export default SmallText

const styles = StyleSheet.create({
    SmallText: {
        fontSize: wp(3),
        color: colors.black,
        textAlign:'left'
    }
})