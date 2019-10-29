import React from 'react';
import { SafeAreaView as SafeArea, StyleSheet, View } from 'react-native';

const SafeAreaView = ({ children, style }) => (
  <SafeArea style={[styles.container, { ...style }]}>
    <View style={styles.view}>{children}</View>
  </SafeArea>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default SafeAreaView;
