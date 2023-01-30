import {StyleSheet, View} from 'react-native';
import React from 'react';
import LargeText from '../Texts/LargeText';
import SyncIcon from '../../assets/images/SyncIcon.svg';
import SettingIcon from '../../assets/images/SettingIcon.svg';
import SearchComponent from '../Search/SearchComponent';
import { colors } from '../colors';

const HeaderComponent = ({title, icon,search}) => {
    const handleDisplayIcon = () => {
        switch (icon) {
          case 'Sync':
            return <SyncIcon />;
          case 'Setting':
            return <SettingIcon />;
          default:
            return null;
        }
  };
  return (
    <>
      <View style={styles.main}>
        <View style={styles.wrap}>
          <LargeText>{title}</LargeText>
          {handleDisplayIcon()}
        </View>
        {search && (
          <View style={styles.searchContainer}>
            <SearchComponent />
          </View>
        )}
      </View>
      <View
        style={styles.lineBreak}
      />
    </>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  main: {
    padding: '5%',
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchContainer: {marginVertical: '3%'},
  lineBreak: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
});
