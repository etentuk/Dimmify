import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import { store } from '../redux/store';
import { connect } from 'react-redux';
import { Formik } from 'formik';

const { dispatch } = store;

const handleBrightness = (brightness, setFieldValue) => {
  setFieldValue('brightness', brightness);
  dispatch.profile.updateEsp(brightness);
};

const editProfile = profile => {
  dispatch.profile.editProfile(profile);
};

class EditProfileScreen extends React.Component {
  deleteProfile = () => {
    dispatch.profile.deleteProfile();
    this.props.navigation.navigate('ProfileScreen');
  };

  componentDidMount(): void {
    dispatch.profile.getProfiles();
  }

  render() {
    const { profile } = this.props;
    return (
      <Formik initialValues={profile} onSubmit={editProfile} enableReinitialize>
        {({ handleSubmit, handleChange, values, setFieldValue }) => (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TextInput
              placeholder={'Profile Name'}
              onChangeText={handleChange('name')}
              value={values.name}
            />
            <Text>Please set your current brightness!</Text>
            <Slider
              onSlidingComplete={brightness =>
                handleBrightness(brightness, setFieldValue)
              }
              name={'brightness'}
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
              title="Max Brightness"
              onPress={() => handleBrightness(100, setFieldValue)}
            />
            <Button
              title="OFF"
              onPress={() => handleBrightness(0, setFieldValue)}
            />
            <Button title="Delete" onPress={this.deleteProfile} />
          </View>
        )}
      </Formik>
    );
  }
}

const mapState = state => {
  return {
    profile: state.profile.profile,
  };
};

export default connect(mapState)(EditProfileScreen);
