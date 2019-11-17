import React from 'react';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import Screen from '../../components/screen/screen';
import TextInput from '../../components/TextInput';
import ProfilesHeaderRight from './profile.headerRight';
import { createProfile, handleBrightness } from './profiles.functions';
import navigationService from '../../../navigationService';
import ProfilesSlider from './profiles.slider';
import ProfilesFlatList from './profiles.flatList';
import ProfilesBrightnessButtons from './profilesBrightness/profiles.brightness.buttons';
import { store } from '../../redux/store';

const { dispatch } = store;

const ProfilesScreen = ({ profile, profiles }) => {
  React.useEffect(() => {
    dispatch.profile.updateEsp(profile.brightness);
  },[]);
  const input = React.createRef()
  return (
    <Formik initialValues={profile} onSubmit={createProfile} enableReinitialize>
      {({ handleSubmit, handleChange, values, setFieldValue }) => (
        <Screen
          onPressBottomButton={() => navigationService.goBack()}
          buttonText="SET IP"
          onPressRightButton={() => {
            handleSubmit();
            setTimeout(() => setFieldValue('name', ''), 0);
            setTimeout(() => setFieldValue('brightness', 0), 0);
            Keyboard.dismiss();
          }}
          rightComponent={<ProfilesHeaderRight />}
          centerText="Profiles">
          <TextInput
            ref={input}
            containerStyle={{ marginTop: 50 }}
            name="Room name"
            placeholder="Enter a room Name"
            onChangeText={handleChange('name')}
            value={values.name}
          />
          <ProfilesSlider
            brightness={values.brightness}
            onSlidingComplete={brightness =>
              handleBrightness(brightness, setFieldValue, values.url)
            }
          />
          <ProfilesBrightnessButtons setFieldValue={setFieldValue} />
          <ProfilesFlatList
            onPress={() => input.current.focus()}
            profiles={profiles}
          />
        </Screen>
      )}
    </Formik>
  );
};

const mapState = state => {
  return {
    profiles: state.profile.profiles,
    profile: state.profile.profile,
  };
};

export default connect(mapState)(ProfilesScreen);
