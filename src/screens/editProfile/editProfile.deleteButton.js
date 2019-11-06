import React from 'react';
import { store } from '../../redux/store';
import { StyleSheet, View, Alert } from 'react-native';
import Layout from '../../constants/Layout';
import TouchableOpacity from '../../components/TouchableOpacity';
import navigationService from '../../../navigationService';
import WhiteText from '../../components/whiteText';

const { dispatch } = store;

const deleteProfile = () => {
  navigationService.goBack();
  dispatch.profile.deleteProfile();
};

const confirmDelete = () => {
  Alert.alert(
    'Alert',
    'Are you sure you want to delete this profile?',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Delete', onPress: deleteProfile, style: 'destructive' },
    ],
    { cancelable: false },
  );
};

const DeleteButton = () => (
  <View style={styles.container}>
    <TouchableOpacity onPress={confirmDelete} style={styles.buttonContainer}>
      <WhiteText style={styles.text}>Delete profile</WhiteText>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  text: {
    letterSpacing: 0.5,
    fontWeight: 'bold',
    fontSize: 17,
    color: '#ce1727',
  },
  container: {
    width: '100%',
    ...Layout.center,
  },
  buttonContainer: {
    borderRadius: 50,
    height: 60,
    width: Layout.width * 0.5,
    ...Layout.center,
  },
});

export default DeleteButton;
