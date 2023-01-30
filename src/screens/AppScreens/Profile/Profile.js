import {Image, Pressable, StyleSheet, View} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import Container from '../../../components/Containers/Container';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import NavigationHeader from '../../../components/Headers/NavigationHeader';
import CameraIcon from '../../../assets/images/CameraIcon.svg';
import Camera from '../../../assets/images/Camera.svg';
import Gallery from '../../../assets/images/Gallery.svg';

import CustomActionSheet from '../../../components/ActionSheet/CustomActionSheet';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import ProfileItem from './Component/ProfileItem';
import SelectOption from '../../../components/SelectOptions/SelectOption';
import { colors } from '../../../components/colors';

const Profile = ({navigation}) => {
  const [profileImg, setProfileImg] = useState(null);
  const [userData, setUserData] = useState({
    fullname: 'Mary R. Jensen',
    phone: '+476-229-9449',
    email: 'Example@gmail.com',
    profile:null
  });
  const sheetRef = useRef(null);
  const SheetData = useMemo(() => [
    {
      label: 'Take photo',
      icon: <Camera width={wp('5%')} height={hp('5%')} fill="black" />,
      onPress: () => cameraLaunch(),
    },
    {
      label: 'Choose photo',
      icon: <Gallery width={wp('5%')} height={hp('5%')} fill="black" />,
      onPress: () => imageGalleryLaunch(),
    },
  ]);

  const cameraLaunch = () => {
    sheetRef.current.hide();
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, res => {
      if (res.assets) {
        const source = {
          uri: res.assets[0].uri,
          type: res.assets[0].type,
          name: res.assets[0].fileName,
        };
        setProfileImg(source);
      }
    });
  };

  const imageGalleryLaunch = () => {
    sheetRef.current.hide();
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      if (res.assets) {
        const source = {
          uri: res.assets[0].uri,
          type: res.assets[0].type,
          name: res.assets[0].fileName,
        };
        setProfileImg(source);
      }
    });
  };

  const handleInputChange = (name,value) => {
    setUserData(prevData => ({...prevData,[name]:value}))
  }
  useEffect(() => {
    console.log(userData)
  },[userData])

  return (
    <Container>
      <NavigationHeader title={'Profile'} />
      <View style={{alignItems: 'center'}}>
        <Pressable onPress={() => sheetRef.current?.show()}>
          <Image
            style={styles.profileImg}
            source={
              profileImg ?? require('../../../assets/images/DummyProfile.png')
            }
          />
          <View style={{position: 'absolute', left: '18%', top: '68%'}}>
            <CameraIcon width={wp(10)} height={wp(10)} />
          </View>
        </Pressable>
      </View>
      <View style={{marginTop:'5%'}}>
        <ProfileItem
          value={userData?.fullname}
          name="fullname"
          onChange={handleInputChange}
          title={'Full Name'}
        />
        <ProfileItem
          value={userData?.phone}
          name="phone"
          onChange={handleInputChange}
          title={'Mobile Number'}
        />
        <ProfileItem
          value={userData?.email}
          name="email"
          onChange={handleInputChange}
          title={'Email'}
        />
        <SelectOption onPress={()=>navigation.navigate('ChangePassword')} icon={'Key'} title={'Change Password'} color={colors.black} />
      </View>
      <CustomActionSheet
        data={SheetData}
        ref={sheetRef}
        title={'Change Profile Photo'}
      />
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileImg: {width: wp(30), height: wp(30), borderRadius: wp(30) / 2},
});
