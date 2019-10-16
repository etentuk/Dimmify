import React from "react";
import {View, Text, Button, TextInput, FlatList} from "react-native";
import Slider from '@react-native-community/slider';
import {store} from '../redux/store';
import {connect} from 'react-redux';
import {Formik} from 'formik';

const {dispatch} = store;


const handleBrightness = (brightness, setFieldValue) => {
  setFieldValue('brightness', brightness);
  dispatch.profile.updateEsp(brightness);
};

class EditProfileScreen extends React.Component {

  componentDidMount(): void {
    dispatch.profile.getProfiles();
  }

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
                placeholder={'Profile Name'}
                onChangeText={handleChange('name')}
                value={values.name}
              />
              <Text>Dimmify!!!</Text>
              <Text>Please set your current brightness!</Text>
              <Slider
                onSlidingComplete={ (brightness)=>handleBrightness(brightness, setFieldValue) }
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
                title='Create Profile'
                onPress={handleSubmit}
              />
              <FlatList
                keyExtractor={(item) => item.name}
                data={profiles}
                renderItem={({item}) => (
                  <View>
                    <Button
                      title={item.name}
                      onPress={()=> selectProfile(item.name)}
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

export default connect(mapState)(EditProfileScreen);
