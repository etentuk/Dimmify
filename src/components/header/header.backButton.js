import React from 'react';
import TouchableOpacity from '../TouchableOpacity';
import navigationService from '../../../navigationService';
import Icon from '../Icon';
import { StyleSheet } from 'react-native';
import Layout from '../../constants/Layout';

const HeaderBackButton = () => (
  <TouchableOpacity
    onPress={() => navigationService.goBack()}
    style={styles.leftComponent}>
    <Icon uri="back_button" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  leftComponent: {
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    paddingHorizontal: 20,
    left: 0,
    ...Layout.center,
  },
});

export default HeaderBackButton;
