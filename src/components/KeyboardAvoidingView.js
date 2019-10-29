import React from 'react';
import { KeyboardAvoidingView as KAV } from 'react-native';
import UtilStyles from '../utils/utils.style';

const KeyboardAvoidingView = ({ children, style }) => (
  <KAV behavior="padding" style={[UtilStyles.flex, { ...style }]}>
    {children}
  </KAV>
);

export default KeyboardAvoidingView;
