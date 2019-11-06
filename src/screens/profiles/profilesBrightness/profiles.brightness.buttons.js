import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProfilesBrightnessButton from './profiles.brightness.button';
import { handleBrightness } from '../profiles.functions';

const buttons = ['OFF', 'ON'];

const ProfilesBrightnessButtons = ({ setFieldValue }) => (
  <View style={styles.container}>
    {buttons.map(button => (
      <ProfilesBrightnessButton
        onPress={() =>
          handleBrightness(button === 'ON' ? 100 : 0, setFieldValue)
        }
        key={button}
        state={button}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ProfilesBrightnessButtons;
