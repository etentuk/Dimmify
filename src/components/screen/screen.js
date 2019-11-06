import React from 'react';
import KeyboardAvoidingView from '../KeyboardAvoidingView';
import ScrollView from '../ScrollView';
import SafeAreaView from '../SafeAreaView';
import Header from '../header/header';
import ScreenButtonButton from './screen.bottomButton';
import { StyleSheet } from 'react-native';

const Screen = ({
  children,
  dontShow,
  scrollViewStyle,
  buttonText,
  leftComponent,
  rightComponent,
  onPressRightButton,
  centerText,
  onPressBottomButton,
}) => (
  <KeyboardAvoidingView>
    <SafeAreaView>
      <Header
        onPressRightButton={onPressRightButton}
        dontShow={dontShow}
        rightComponent={rightComponent}
        leftComponent={leftComponent}
        centerText={centerText}
      />
      <ScrollView style={{ ...scrollViewStyle, ...styles.container }}>
        {children}
      </ScrollView>
      <ScreenButtonButton onPress={onPressBottomButton} text={buttonText} />
    </SafeAreaView>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default Screen;
