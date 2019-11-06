import { store } from '../../redux/store';
import navigationService from '../../../navigationService';
const { dispatch } = store;

export const selectProfile = profile => {
  dispatch.profile.setProfile(profile);
  navigationService.navigate('EditProfileScreen');
};

export const createProfile = profile => {
  dispatch.profile.createProfile(profile);
};

export const handleBrightness = (brightness, setFieldValue) => {
  setFieldValue('brightness', brightness);
  dispatch.profile.updateEsp(brightness);
};
