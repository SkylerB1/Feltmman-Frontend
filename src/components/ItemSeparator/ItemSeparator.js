import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../colors'

const index = ({style}) => {
  return (
      <View style={[styles.linebreak,style] } />
  )
}

export default index

const styles = StyleSheet.create({
    linebreak: {
        borderWidth: 1,
        borderColor: colors.lightGrey,
        marginHorizontal:'5%'
}})