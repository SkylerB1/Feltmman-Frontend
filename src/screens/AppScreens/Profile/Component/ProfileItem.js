import React, { useEffect } from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import RegularText from '../../../../components/Texts/RegularText';
import {colors} from '../../../../components/colors';

const ProfileItem = ({title, value, onChange, name}) => {
  return (
    <View style={{marginHorizontal: '4%', marginVertical: '2%'}}>
      <RegularText>{title}</RegularText>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 5,
                  borderColor: colors.borderGrey,
          marginTop:'2%'
        }}>
        <TextInput
          
          value={value}
          onChangeText={text => onChange(name, text)}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  input: {marginHorizontal: '2%',paddingVertical:'3%',lineHeight:21},
});
