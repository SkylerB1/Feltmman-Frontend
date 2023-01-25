import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { colors } from '../colors'

const CustomTextInput = (props) => {
  return (
    <View style={{marginBottom:'2%'}}>
      <TextInput dense placeholderTextColor={colors.grey} {...props} />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({})