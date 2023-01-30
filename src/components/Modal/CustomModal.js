import {StyleSheet, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

export const CustomModal = ({isModalVisible, children, ...props}) => {
  return (
    <Modal
      isVisible={isModalVisible}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      {...props}>
      {children}
    </Modal>
  );
};
const ModalContainer = ({children, containerStyle}) => (
  <View style={[styles.container, containerStyle]}>{children}</View>
);

const ModalHeader = ({children,headerStyle}) => (
  <View style={[styles.header,headerStyle]}>{children}</View>
);

const ModalBody = ({ children, bodyStyle}) => <View style={[styles.body,bodyStyle]}>{children}</View>;

const ModalFooter = ({children,footerStyle}) => (
  <View style={[styles.footer,footerStyle]}>{children}</View>
);

CustomModal.Header = ModalHeader;
CustomModal.Container = ModalContainer;
CustomModal.Body = ModalBody;
CustomModal.Footer = ModalFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding:'8%'
  },
  header: {},
  body: {
    alignItems: 'center',
  },
  footer: {
    alignItems:'center'
  },
});
