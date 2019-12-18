import React from 'react';
import { StyleSheet } from 'react-native';
import { mainColor } from '../../constants/colors';
import WhiteText from '../whiteText';
import TouchableOpacity from '../TouchableOpacity';
import Layout from '../../constants/Layout';

const ScreenBottomButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <WhiteText style={styles.text} numberOfLines={1}>
      {text}
    </WhiteText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...Layout.center,
    height: 60,
    width: '100%',
    backgroundColor: mainColor,
  },
  text: {
    fontWeight: '700',
    fontSize: 15,
  },
});

export default ScreenBottomButton;
