import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Layout from '../../constants/Layout';

const ProfilesHeaderRight = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Save</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    ...Layout.center,
  },
  text: {
    fontSize: 16,
  },
});
export default ProfilesHeaderRight;
