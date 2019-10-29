import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { mainColor } from '../../constants/colors';
import Layout from '../../constants/Layout';
import TouchableOpacity from '../../components/TouchableOpacity';

const ConnectIpButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.text}>SAVE</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: mainColor,
    width: Layout.width * 0.7,
    height: 53,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
});

export default ConnectIpButton;
