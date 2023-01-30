import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {forwardRef, useMemo} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ActionSheet from 'react-native-actions-sheet';
import Cross from '../../assets/images/Cross.svg' ;

const CustomActionSheet = forwardRef((props, ref) => {

  return (
    <ActionSheet ref={ref}>
      <View>
        <View style={styles.topView}>
          <Pressable onPress={() => ref.current?.hide()}>
            <Cross width={wp('3.8%')} height={hp('3.8%')} fill="black" />
          </Pressable>
          <Text style={styles.btmSheetText}>{props.title}</Text>
        </View>
        <View style={{borderWidth: 0.5, borderColor: '#D3D3D3'}} />
        {props.data?.map((item, index) => {
          return (
            <Pressable
              key={index}
              style={styles.itemContainer}
              onPress={() => item.onPress(props.id)}>
              <View style={styles.iconContainer}>{item.icon}</View>
              <Text style={styles.btmSheetText}>{item.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </ActionSheet>
  );
});

export default CustomActionSheet;

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
  },
  itemContainer: {flexDirection: 'row', alignItems: 'center'},
  iconContainer: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('10%') / 2,
    backgroundColor: '#D3D3D3',
    marginLeft: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btmSheetText: {
    color: '#000000',
    fontSize: wp('3.8%'),
    margin: '4%',
    fontWeight: 'bold',
  },
});
