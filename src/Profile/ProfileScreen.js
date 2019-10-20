import React from "react";
import {View, Text, Button, TextInput, FlatList} from "react-native";
import Slider from '@react-native-community/slider';
import {store} from '../redux/store';
import {connect} from 'react-redux';
import {Formik} from 'formik';

const {dispatch} = store;
const createProfile = (profile) => {
  dispatch.profile.createProfile(profile);
};


const handleBrightness = (brightness, setFieldValue) => {
  setFieldValue('brightness', brightness);
  dispatch.profile.updateEsp(brightness);
};


class ProfileScreen extends React.Component {

  selectProfile = (profile) => {
    dispatch.profile.setProfile(profile);
    this.props.navigation.navigate('EditProfileScreen');
  };

  render() {
    const {profile, profiles} = this.props;
    return (
      <>
      <Formik
        initialValues={profile}
        onSubmit={createProfile}
        enableReinitialize
      >
        {({handleSubmit, handleChange, values, setFieldValue}) => (
          <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <TextInput
              placeholder={'Room Name'}
              onChangeText={handleChange('name')}
              value={values.name}
            />
            <Text>Please set your current brightness!</Text>
            <Slider
              onSlidingComplete={ (brightness)=>handleBrightness(brightness, setFieldValue, values.url) }
              name={'brightness'}
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#000000"
              step={1}
              value={values.brightness}
            />
            <Text>{values.brightness}</Text>
            <Button
              title='Save'
              onPress={handleSubmit}
            />
            <Button
              title='Set IP'
              onPress={() => this.props.navigation.navigate('ConnectIp')}
            />
            <Button
              title='ON'
              onPress={()=>handleBrightness(100, setFieldValue)}
            />
            <Button
              title='OFF'
              onPress={()=>handleBrightness(0, setFieldValue)}
            />
            <FlatList
              keyExtractor={(item) => item.name}
              data={profiles}
              renderItem={({item}) => (
                <View>
                  <Button
                    title={item.name}
                    onPress={()=> this.selectProfile(item.name)}
                  />
                </View>
              )}
            />
          </View>
        )
        }
      </Formik>
               </>
    );
  }
}


const mapState = state => {
  return {
    profiles: state.profile.profiles,
    profile: state.profile.profile
  };
};

export default connect(mapState)(ProfileScreen);
