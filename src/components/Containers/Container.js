import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';

const Container = props => {
  return (
    <View style={styles.root} {...props}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      {props.children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: '2%',
  },
});
