import React from 'react';
import { StyleSheet, Text, TextInput as TI, View } from 'react-native';
import Layout from '../constants/Layout';
import { textColor } from '../constants/colors';

const TextInput = React.forwardRef(
  ({ value, placeholder, onChangeText, name, containerStyle }, ref) => (
    <View style={containerStyle}>
      <Text style={styles.name}>{name}</Text>
      <TI
        ref={ref}
        autoCorrect={false}
        clearButtonMode="always"
        placeholderTextColor="#ccc"
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.textInput}
      />
    </View>
  ),
);

const styles = StyleSheet.create({
  name: {
    fontWeight: '700',
    fontSize: 12,
    color: textColor,
  },
  textInput: {
    color: textColor,
    height: 50,
    width: Layout.width * 0.9,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.3,
  },
});

export default TextInput;
