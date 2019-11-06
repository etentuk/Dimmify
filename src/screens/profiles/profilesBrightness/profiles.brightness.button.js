import React from 'react';
import { StyleSheet } from 'react-native';
import { mainColor } from '../../../constants/colors';
import Layout from '../../../constants/Layout';
import WhiteText from '../../../components/whiteText';
import TouchableOpacity from '../../../components/TouchableOpacity';

const size = 60;

const ProfilesBrightnessButton = ({ state, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <WhiteText style={styles.text}>{state}</WhiteText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...Layout.center,
    height: size,
    width: size,
    backgroundColor: mainColor,
    shadowColor: '#aaa',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: size / 2,
  },
  text: {
    fontWeight: '700',
  },
});

export default ProfilesBrightnessButton;
