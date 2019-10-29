import React from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import { store } from '../../redux/store';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import Screen from '../../components/Screen';
import TextInput from '../../components/TextInput';

const { dispatch } = store;
const createProfile = profile => {
  dispatch.profile.createProfile(profile);
};

const handleBrightness = (brightness, setFieldValue) => {
  setFieldValue('brightness', brightness);
  dispatch.profile.updateEsp(brightness);
};

class ProfilesScreen extends React.Component {
  selectProfile = profile => {
    dispatch.profile.setProfile(profile);
    this.props.navigation.navigate('EditProfileScreen');
  };

  render() {
    const { profile, profiles } = this.props;
    return (
      <>
        <Formik
          initialValues={profile}
          onSubmit={createProfile}
          enableReinitialize>
          {({ handleSubmit, handleChange, values, setFieldValue }) => (
            <Screen scrollViewStyle={styles.container}>
              <TextInput
                name="Room name"
                placeholder="Enter a room Name"
                onChangeText={handleChange('name')}
                value={values.name}
              />
              <Text>Please set your current brightness!</Text>
              <Slider
                onSlidingComplete={brightness =>
                  handleBrightness(brightness, setFieldValue, values.url)
                }
                name="brightness"
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                step={1}
                value={values.brightness}
              />
              <Text>{values.brightness}</Text>
              <Button title="Save" onPress={handleSubmit} />
              <Button
                title="Set IP"
                onPress={() => this.props.navigation.navigate('ConnectIp')}
              />
              <Button
                title="ON"
                onPress={() => handleBrightness(100, setFieldValue)}
              />
              <Button
                title="OFF"
                onPress={() => handleBrightness(0, setFieldValue)}
              />
              <FlatList
                keyExtractor={item => item.name}
                data={profiles}
                renderItem={({ item }) => (
                  <View>
                    <Button
                      title={item.name}
                      onPress={() => this.selectProfile(item.name)}
                    />
                  </View>
                )}
              />
            </Screen>
          )}
        </Formik>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  }
});

const mapState = state => {
  return {
    profiles: state.profile.profiles,
    profile: state.profile.profile,
  };
};

export default connect(mapState)(ProfilesScreen);
