import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import BackIcon from '../../assets/images/BackIcon'
import LargeText from '../Texts/LargeText'
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

const NavigationHeader = ({ title }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.main}>
      <Pressable onPress={()=>navigation.goBack()}>
        <BackIcon width={wp(5)} height={wp(5)} />
      </Pressable>
      <LargeText>{title}</LargeText>
      <View style={{width:wp(5)}} />
    </View>
  );
}

export default NavigationHeader

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5%',
    marginTop:'5%'
  },
});