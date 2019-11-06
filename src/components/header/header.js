import React from 'react';
import { StyleSheet, View } from 'react-native';
import Layout from '../../constants/Layout';
import Text from '../text';
import TouchableOpacity from '../TouchableOpacity';
import HeaderBackButton from './header.backButton';

const Header = ({
  centerText,
  rightComponent,
  dontShow,
  onPressRightButton,
}) => (
  <View style={styles.container}>
    {dontShow ? null : <HeaderBackButton />}
    <View style={styles.textContainer}>
      <Text style={styles.text} numberOfLines={1}>
        {centerText}
      </Text>
    </View>
    <TouchableOpacity
      onPress={onPressRightButton}
      style={styles.rightComponent}>
      {rightComponent}
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 44,
    width: '100%',
    borderBottomColor: '#bbb',
    borderBottomWidth: 0.3,
  },
  textContainer: {
    flex: 1,
    ...Layout.center,
  },
  text: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    marginHorizontal: 16,
  },
  rightComponent: {
    height: '100%',
    position: 'absolute',
    right: 0,
  },
  leftComponent: {
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    paddingHorizontal: 20,
    left: 0,
    ...Layout.center,
  },
});

export default Header;
