import React from 'react';
import Text from '../../components/text';
import { selectProfile } from './profiles.functions';
import { StyleSheet } from 'react-native';
import TouchableOpacity from '../../components/TouchableOpacity';

const Profile = ({ name }) => {
  const handlePress = () => selectProfile(name);
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    paddingVertical: 20,
    width: '100%',
    justifyContent: 'center',
  },
});

export default Profile;
