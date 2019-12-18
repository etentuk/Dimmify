import React from 'react';
import { StyleSheet, Text as T } from 'react-native';

const Text = ({ children, numberOfLines, style, onPress }) => (
  <T
    onPress={onPress}
    numberOfLines={numberOfLines}
    style={[styles.text, { ...style }]}>
    {children}
  </T>
);

Text.defaultProps = {
  numberOfLines: null,
  style: {},
  onPress: null,
};

const styles = StyleSheet.create({
  text: {},
});

export default Text;
