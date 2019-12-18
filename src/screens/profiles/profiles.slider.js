import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import Layout from '../../constants/Layout';

const ProfilesSlider = ({ onSlidingComplete, brightness }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Set brightness</Text>
    <Slider
      onSlidingComplete={value => onSlidingComplete(value)}
      name="brightness"
      style={styles.slider}
      minimumValue={0}
      maximumValue={100}
      minimumTrackTintColor="#000000"
      maximumTrackTintColor="#000000"
      step={1}
      value={brightness}
    />
    <Text style={styles.brightness}>{brightness}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    ...Layout.center,
  },
  text: {
    marginBottom: 20,
    fontWeight: '600',
    fontSize: 16,
  },
  slider: {
    marginBottom: 20,
    width: 200,
    height: 40,
  },
  brightness: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default ProfilesSlider;
