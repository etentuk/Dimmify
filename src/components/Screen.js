import React from 'react';
import KeyboardAvoidingView from './KeyboardAvoidingView';
import ScrollView from './ScrollView';
import SafeAreaView from './SafeAreaView';

const Screen = ({ children, scrollViewStyle }) => (
  <SafeAreaView>
    <KeyboardAvoidingView>
      <ScrollView style={{ ...scrollViewStyle }}>{children}</ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
);

export default Screen;
