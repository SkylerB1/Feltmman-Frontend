import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../components/Containers/Container'
import NavigationHeader from '../../components/Headers/NavigationHeader'
import RegularText from '../../components/Texts/RegularText'
import { colors } from '../../components/colors'
import CustomTextInput from '../../components/inputs/CustomTextInput'
import { useForm } from 'react-hook-form'

const ChangePassword = () => {
    const {handleSubmit,control} = useForm()
  return (
    <Container>
      <NavigationHeader title="Change Password" />
      <View
        style={{
          alignItems: 'center',
          marginHorizontal: '5%',
        }}>
        <RegularText style={{color: colors.grey}}>
          Your password must be at least six characters and should include a
          combination of numbers, letters and special characters.
        </RegularText>
      </View>
      <View style={{alignItems: 'center', marginHorizontal: '5%'}}>
        <CustomTextInput
          control={control}
          name="old_password"
          label={'Current Password'}
          rules={{required: 'This field is required'}}
        />
        <CustomTextInput
          control={control}
          name="new_password"
          label={'New Password'}
          rules={{required: 'This field is required'}}
        />
        <CustomTextInput
          control={control}
          name="confirm_password"
          label={'Confirm Password'}
          rules={{required: 'This field is required'}}
        />
      </View>
    </Container>
  );
}

export default ChangePassword

const styles = StyleSheet.create({})