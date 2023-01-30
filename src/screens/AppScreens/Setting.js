import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import Container from '../../components/Containers/Container';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import NavigationHeader from '../../components/Headers/NavigationHeader';
import SelectOption from '../../components/SelectOptions/SelectOption';
import RegularText from '../../components/Texts/RegularText';
import { colors } from '../../components/colors';
import ItemSeparator from '../../components/ItemSeparator/ItemSeparator'
import { CustomModal } from '../../components/Modal/CustomModal';
import CustomButton from '../../components/Button/CustomButton';
import SmallText from '../../components/Texts/SmallText';
import Cross from '../../assets/images/Cross.svg'

const Setting = ({ navigation }) => {
    
    const handleNavigation = (name) => {
        navigation.navigate(name)
    }
  return (
    <Container>
        <NavigationHeader title={'Setting'} />
      <View style={{alignItems: 'center'}}>
        <Image
          style={styles.profileImg}
          source={require('../../assets/images/DummyProfile.png')}
        />
        <RegularText style={{marginTop: '10%', color: colors.grey}}>
          +476-229-9449
        </RegularText>
      </View>
      <View style={{marginTop: '7%'}}>
        <SelectOption
          icon={'Membership'}
          title="Membership"
          color={colors.black}
          style={styles.list}
        />
        <SelectOption
          icon={'Profile'}
          title="Profile"
          color={colors.black}
          style={styles.list}
          onPress={() => handleNavigation('Profile')}
        />
        <ItemSeparator style={styles.lineMargin} />
        <SelectOption
          icon={'Notification'}
          title="Notification"
          color={colors.black}
          style={styles.list}
        />
        <SelectOption
          icon={'Privacy'}
          title="Privacy"
          color={colors.black}
          style={styles.list}
        />
        <SelectOption
          icon={'Help'}
          title="Help"
          color={colors.black}
          style={styles.list}
        />

        <ItemSeparator style={styles.lineMargin} />
        <SelectOption
          icon={'Block'}
          title="Block List"
          color={colors.black}
          style={styles.list}
          onPress={() => handleNavigation('Blocked')}
        />
        <SelectOption
          icon={'Logout'}
          title="Logout"
          color={colors.black}
          style={styles.list}
        />
        <SelectOption
          icon={'Delete'}
          title="Delete Account"
          color={colors.black}
          style={styles.list}
        />
      </View>
      {/* <CustomModal isModalVisible={true}>
        <CustomModal.Container>
          <CustomModal.Header headerStyle={{alignItems: 'flex-end'}}>
            <Pressable onPress={handleCloseModal}>
              <Cross width={wp(3)} height={wp(3)} fill= />
            </Pressable>
          </CustomModal.Header>
          <CustomModal.Body>
            <Image
              style={{width: 228, height: hp(18)}}
              source={require('../../assets/images/Announcement.png')}
            />
            <RegularText style={{fontSize: wp(5)}}>
              Your Plan will expire Soon!
            </RegularText>
            <SmallText
              style={{
                color: colors.grey,
                fontSize: wp(3.8),
                lineHeight: 21,
                marginTop: '4%',
                marginBottom: '8%',
                marginHorizontal: '10%',
              }}>
              Hi, Your Mothy plan will expire soon. Please subscribe again and
              enjoy hassle free service.
            </SmallText>
          </CustomModal.Body>
          <CustomModal.Footer>
            <CustomButton title="Subscribe" onPress={() => {}} />
          </CustomModal.Footer>
        </CustomModal.Container>
      </CustomModal> */}
    </Container>
  );
};

export default Setting;

const styles = StyleSheet.create({
  profileImg: {width: wp(30), height: wp(30)},
  list: {marginTop: 0, backgroundColor: colors.white, padding: '2%'},
  lineMargin: {marginVertical: '4%'},
});
