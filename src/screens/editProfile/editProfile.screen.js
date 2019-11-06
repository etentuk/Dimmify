import React from 'react';
import { store } from '../../redux/store';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import Screen from '../../components/screen/screen';
import ProfilesHeaderRight from '../profiles/profile.headerRight';
import TextInput from '../../components/TextInput';
import ProfilesSlider from '../profiles/profiles.slider';
import { handleBrightness } from '../profiles/profiles.functions';
import navigationService from '../../../navigationService';
import ProfilesBrightnessButtons from '../profiles/profilesBrightness/profiles.brightness.buttons';
import DeleteButton from './editProfile.deleteButton';

const { dispatch } = store;

const EditProfileScreen = ({ profile }) => {
  React.useEffect(() => {
    dispatch.profile.getProfiles();
  });

  const editProfile = profile => {
    dispatch.profile.editProfile(profile);
  };

  return (
    <Formik initialValues={profile} onSubmit={editProfile} enableReinitialize>
      {({ handleSubmit, handleChange, values, setFieldValue }) => (
        <Screen
          buttonText="SET IP"
          onPressBottomButton={() =>
            navigationService.navigate('ConnectIpScreen')
          }
          onPressRightButton={handleSubmit}
          centerText={profile.name}
          rightComponent={<ProfilesHeaderRight />}>
          <TextInput
            placeholder="Edit your name"
            onChangeText={handleChange('name')}
            name="Profile name"
            containerStyle={{ marginTop: 50 }}
            value={values.name}
          />
          <ProfilesSlider
            brightness={values.brightness}
            onSlidingComplete={brightness =>
              handleBrightness(brightness, setFieldValue, values.url)
            }
          />
          <ProfilesBrightnessButtons setFieldValue={setFieldValue} />
          <DeleteButton />
        </Screen>
      )}
    </Formik>
  );
};

const mapState = state => {
  return {
    profile: state.profile.profile,
  };
};

export default connect(mapState)(EditProfileScreen);
