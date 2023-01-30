import { Image, Pressable, StyleSheet, View} from 'react-native'
import React from 'react'
import Container from '../../components/Containers/Container'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import NavigationHeader from '../../components/Headers/NavigationHeader'
import LargeText from '../../components/Texts/LargeText'
import { colors } from '../../components/colors'
import RegularText from '../../components/Texts/RegularText'
import PhoneIcon from '../../assets/images/PhoneIcon.svg'
import MsgIcon from '../../assets/images/MsgIcon.svg';


import SelectOption from '../../components/SelectOptions/SelectOption'

const ContactInfo = () => {
  return (
    <Container>
        <NavigationHeader title={'Contact Info'} />

      <View style={{alignItems: 'center'}}>
        <Image
          style={styles.profileImg}
          source={require('../../assets/images/DummyProfile.png')}
        />
        <View style={{marginVertical: '4%', alignItems: 'center'}}>
          <LargeText>Mary R. Jensen</LargeText>
          <RegularText style={styles.info}>+476-229-9449</RegularText>
          <RegularText style={{...styles.info}}>Example@gmail.com</RegularText>
        </View>
        <View style={{flexDirection: 'row', marginBottom: '4%'}}>
          <Pressable
            style={{
              backgroundColor: colors.lightSilver,
              borderRadius: 6.4,
              padding: '3%',
              margin: '2%',
            }}>
            <PhoneIcon width={wp(7)} height={wp(7)} />
          </Pressable>
          <Pressable
            style={{
              backgroundColor: colors.lightSilver,
              borderRadius: 6.4,
              padding: '3%',
              margin: '2%',
            }}>
            <MsgIcon width={wp(7)} height={wp(7)} />
          </Pressable>
        </View>
      </View>
      <View style={{width: '100%', borderWidth: 1, borderColor: '#F0F0F0'}} />
      <SelectOption title="Mute" color={colors.black} />
      <SelectOption title="Clear Chat" color={colors.black} />
      <SelectOption title="Block Contact" text="No" color={colors.black} />
      <SelectOption title="Delete Contact" color={colors.red} />
    </Container>
  );
}

export default ContactInfo

const styles = StyleSheet.create({
  margin: {marginTop: wp(3)},
  marginVertical: {marginVertical: '3%'},
  info: {color: colors.grey, lineHeight: 21, marginTop: '1%'},
  profileImg: {width: wp(35), height: wp(35)},
});