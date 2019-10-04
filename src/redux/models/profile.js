import AsyncStorage from '@react-native-community/async-storage';

const profileState = {
  profile: {
    brightness: 0,
    name: '',
  },
  profiles: []
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
            alert('Profile created successfully');
          } catch (error) {
            console.log(error)
          }
      }else{
          alert('Profile already exists')
        }
      },
      getProfiles: async () => {
        let profiles = await AsyncStorage.getItem('profiles');
        if(profiles) {
          dispatch.profile.setProfilesSuccess(JSON.parse(profiles));
        }
      }
    }
  ),
};
