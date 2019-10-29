import React from 'react';
import { ScrollView as SV } from 'react-native';
import UtilStyles from '../utils/utils.style';

const ScrollView = ({ children, style }) => (
  <SV
    contentContainerStyle={[UtilStyles.flexGrow, { ...style }]}
    keyboardDismissMode="interactive"
    keyboardShouldPersistTaps="handled">
    {children}
  </SV>
);

export default ScrollView;
