import React from 'react';
import { TouchableOpacity as TO } from 'react-native';

const TouchableOpacity = ({ children, style, onPress }) => (
  <TO onPress={onPress} activeOpacity={0.7} style={{ ...style }}>
    {children}
  </TO>
);

export default TouchableOpacity;
