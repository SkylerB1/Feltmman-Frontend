import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { colors } from '../colors'
import { Controller } from 'react-hook-form'

const CustomTextInput = ({name,control,label,rules,disabled}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({field: {onChange, value, onBlur}}) => (
          <TextInput
            label={label}
            value={value}
            onBlur={onBlur}
            disabled={disabled}
            onChangeText={onChange}
            style={{backgroundColor:'transparent',width:'100%',marginVertical:'2%'}}
          />
        )}
      />
    </>
  );
}

export default CustomTextInput

const styles = StyleSheet.create({})