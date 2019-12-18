import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Profile from './profiles.profile';
import Text from '../../components/text';
import Layout from '../../constants/Layout';
import { mainColor } from '../../constants/colors';

const ProfilesFlatList = ({ profiles, onPress }) => {
  const key = item => item.name;

  const renderProfile = ({ item }) => <Profile name={item.name} />;

  return (
    <>
      <Text style={styles.headerText}>Current profiles</Text>
      {profiles.length ? (
        <FlatList
          keyExtractor={key}
          data={profiles}
          renderItem={renderProfile}
        />
      ) : (
        <View style={styles.noProfilesContainer}>
          <Text style={styles.noProfilesText}>There are no profiles</Text>
          <Text onPress={onPress} style={styles.addProfile}>
            ADD A PROFILE
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  addProfile: {
    fontWeight: 'bold',
    color: mainColor,
  },
  noProfilesText: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: '500',
  },
  noProfilesContainer: {
    marginTop: 25,
    backgroundColor: '#fafafa',
    height: 150,
    ...Layout.center,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilesFlatList;
