import AsyncStorage from '@react-native-community/async-storage';
import esp8266Api from '../../api/esp8266Api.js'

const profileState = {
  profile: {
    brightness: 0,
    name: '',
  },
  profiles: [],
  ip: '',
};


export const profile = {
  state: {...profileState},
  reducers: {
    setProfilesSuccess: (state, payload) => ({
      ...state,
      profiles: [...payload],
    }),
    setProfile: (state, payload) => {
      const selectedProfile = state.profiles.find(profile => profile.name === payload );
      return{
      ...state,
      profile: selectedProfile,
    }},
    setIpAddress: (state, payload) => ({
      ...state,
      ip: payload
    }),
    removeProfile: (state) => {
      const profile = state.profiles.find(({name}) => name === state.profile.name);
      const profiles = state.profiles.splice(profile);
      return{
        ...state,
        profiles: [...profiles]
      }}
  },
  effects: dispatch => ({
      createProfile: async (payload, state) => {
        const profiles = [...state.profile.profiles];
        const canSave =  profiles.find(profile => profile.name === payload.name );
        if(!canSave){
          profiles.push(payload);
          try {
            await AsyncStorage.setItem('profiles', JSON.stringify(profiles));
            dispatch.profile.setProfilesSuccess(profiles);
            alert('Profile saved successfully');
          } catch (error) {
            console.log(error)
          }
      }else{
          alert('Profile name already exists')
        }
      },
      editProfile: async (payload) =>{
        dispatch.profile.removeProfile();
        await dispatch.profile.createProfile(payload);
      },
      deleteProfile: async (state) => {
        dispatch.profile.removeProfile();
        const profiles = [...state.profile.profiles];
        try {
          await AsyncStorage.setItem('profiles', JSON.stringify(profiles));
          dispatch.profile.setProfilesSuccess(profiles);
          alert('Profile deleted');
        } catch (error) {
          console.log(error)
        }
      },
      updateEsp: async (payload, state) =>{
        const response = esp8266Api.updateEsp8266(payload, state.profile.ip);
        await AsyncStorage.setItem('brightness', JSON.stringify(payload));
        console.log('response', response);
      },
      getProfiles: async () => {
        let profiles = await AsyncStorage.getItem('profiles');
        if(profiles) {
          dispatch.profile.setProfilesSuccess(JSON.parse(profiles));
        }
      },
      saveIp: async (payload) => {
        await AsyncStorage.setItem('ip', JSON.stringify(payload));
        dispatch.profile.setIpAddress(payload);
        alert('IP address set successfully');
      },
      getIp: async () => {
        let ip = await AsyncStorage.getItem('ip');
        if(ip) {
          dispatch.profile.setIpAddress(JSON.parse(ip));
        }
      }

    }
  ),
};
