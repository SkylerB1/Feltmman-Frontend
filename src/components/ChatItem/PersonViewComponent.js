import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import {colors} from '../colors';
import ChatIcon from '../../assets/images/ChatIcon.svg';

import DoubleTick from '../../assets/images/DoubleTick.svg';

const PersonViewComponent = ({
  title,
  description,
  icon,
  time,
  read,
  unread,
}) => {
  return (
    <View style={styles.main}>
      <View>
        <Image
          style={styles.profileImg}
          source={require('../../assets/images/DummyProfile.png')}
        />
      </View>
      <View style={{...styles.titleLeftMargin, ...styles.flex}}>
        <RegularText>{title}</RegularText>
        <View style={styles.flexRow}>
          <SmallText style={styles.descriptionColor}>
            {description.slice(0, 32)}
          </SmallText>
          {description.length > 32 && (
            <SmallText style={styles.descriptionColor}>...</SmallText>
          )}
        </View>
      </View>
      {icon && (
        <View>
          <ChatIcon />
        </View>
      )}
      {time && (
        <View style={styles.timeView}>
          <View style={{...styles.flex, ...styles.flexEndJustify}}>
            <SmallText style={styles.timeColor}>{time}</SmallText>
          </View>
          {read ? (
            <View style={{...styles.flex, ...styles.centerJustified}}>
              <DoubleTick width={wp(5)} height={wp(5)} />
            </View>
          ) : (
            <View style={{...styles.flex, ...styles.flexEndJustify}}>
              <View
                style={styles.unReadView}>
                <SmallText style={styles.unReadNo}>
                  {unread}
                </SmallText>
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default PersonViewComponent;

const styles = StyleSheet.create({
  main: {flexDirection: 'row', alignItems: 'center', padding: '5%'},
  flex: {flex: 1},
  titleLeftMargin: {marginLeft: '4%'},
  flexRow: {flexDirection: 'row'},
  profileImg: {width: wp(15), height: wp(15)},
  timeView: {
    alignItems: 'flex-end',
  },
  flexEndJustify: {justifyContent: 'flex-end'},
  centerJustified: {justifyContent: 'center'},
  descriptionColor: {color: colors.grey},
  timeColor: {color: colors.littlDarkGrey},
  unReadView: {
    width: wp(5.5),
    height: wp(5.5),
    borderRadius: wp(5.5) / 2,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unReadNo: {color: colors.white, fontWeight: '700'},
});
