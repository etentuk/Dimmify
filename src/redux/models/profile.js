import AsyncStorage from '@react-native-community/async-storage';
import esp8266Api from '../../api/esp8266Api.js';

const profileState = {
  profile: {
    brightness: 0,
    name: '',
  },
  currentProfile: {
    brightness: 0,
    name: '',
  },
  profiles: [],
  ip: '',
  index: 0,
};

export const profile = {
  state: { ...profileState },
  reducers: {
    setProfilesSuccess: (state, payload) => ({
      ...state,
      profiles: [...payload],
    }),
    setProfileSuccess: state => ({
      ...state,
      profile: profileState.profile,
      index: profileState.index,
    }),
    setCurrentProfile: (state, payload) => {
      const selectedProfile = state.profiles.findIndex(
        profile => profile.name === payload,
      );
      return {
        ...state,
        currentProfile: state.profiles[selectedProfile],
        index: selectedProfile,
      };
    },
    setIpAddress: (state, payload) => ({
      ...state,
      ip: payload,
    }),
  },
  effects: dispatch => ({
    createProfile: async (payload, state) => {
      if (payload.name.trim()) {
        const profiles = [...state.profile.profiles];
        const canSave = profiles.find(profile => profile.name === payload.name);
        if (!canSave) {
          profiles.push(payload);
          try {
            await AsyncStorage.setItem('profiles', JSON.stringify(profiles));
            dispatch.profile.setProfilesSuccess(profiles);
          } catch (error) {
            console.log(error);
          }
        } else {
          alert('Profile name already exists');
        }
      } else {
        alert('Please input a valid name');
      }
    },
    editProfile: async (payload, state) => {
      const profiles = [...state.profile.profiles];
      profiles[state.profile.index] = payload;
      try {
        await AsyncStorage.setItem('profiles', JSON.stringify(profiles));
        alert('Profile saved successfully');
      } catch (error) {
        console.log(error);
      }
      dispatch.profile.setProfilesSuccess(profiles);
    },
    deleteProfile: async (payload, state) => {
      const profile = state.profile.profiles.findIndex(
        ({ name }) => name === state.profile.profile.name,
      );
      const profiles = [...state.profile.profiles];
      profiles.splice(profile, 1);
      console.log(profiles);
      try {
        await AsyncStorage.setItem('profiles', JSON.stringify(profiles));
        alert('Profile deleted');
      } catch (error) {
        console.log(error);
      }
      dispatch.profile.setProfilesSuccess(profiles);
      dispatch.profile.setProfileSuccess();
    },
    updateEsp: async (payload, state) => {
      const response = esp8266Api.updateEsp8266(payload, state.profile.ip);
      await AsyncStorage.setItem('brightness', JSON.stringify(payload));
      console.log('response', response);
    },
    getProfiles: async () => {
      let profiles = await AsyncStorage.getItem('profiles');
      if (profiles) {
        dispatch.profile.setProfilesSuccess(JSON.parse(profiles));
      }
    },
    saveIp: async payload => {
      await AsyncStorage.setItem('ip', JSON.stringify(payload));
      dispatch.profile.setIpAddress(payload);
      alert('IP address set successfully');
    },
    getIp: async () => {
      let ip = await AsyncStorage.getItem('ip');
      if (ip) {
        dispatch.profile.setIpAddress(JSON.parse(ip));
      }
    },
  }),
};
