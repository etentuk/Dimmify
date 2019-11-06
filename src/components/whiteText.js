import React from 'react';
import { StyleSheet, Text } from 'react-native';

const WhiteText = ({ children, numberOfLines, style }) => (
  <Text numberOfLines={numberOfLines} style={[styles.text, { ...style }]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});

export default WhiteText;
