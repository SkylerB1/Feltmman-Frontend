import { Pressable, StyleSheet, Text,  } from 'react-native'
import React from 'react'
import LargeText from '../Texts/LargeText'
import { colors } from '../colors'
import RegularText from '../Texts/RegularText'

const CustomButton = ({title,onPress,style}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.btn,style]}>
      <RegularText style={{color: colors.white}}>{title}</RegularText>
    </Pressable>
  );
}

export default CustomButton

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: colors.green,
        paddingVertical: '4.5%',
    width:'80%'
  },
});