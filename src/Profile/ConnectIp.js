import React from "react";
import {View, Text, Button, TextInput} from "react-native";
import {store} from '../redux/store';
import {Formik} from 'formik';
import {connect} from "react-redux";

const {dispatch} = store;




class ConnectIp extends React.Component {
  componentDidMount(): void {
    dispatch.profile.getProfiles();
    dispatch.profile.getIp();
  };

  handleIp = (ip) => {
    dispatch.profile.saveIp(ip);
    this.props.navigation.navigate('ProfileScreen');
  };

  render() {
    const {ip} = this.props;
    return (
      <>
        <Formik
          initialValues= {ip}
          onSubmit={this.handleIp}
          enableReinitialize
        >
          {({handleSubmit, handleChange, values}) => (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>

              <TextInput
                placeholder={'IP address'}
                onChangeText={handleChange('ip')}
                value={values.ip}
              />
              <Text>Please put in IP address</Text>
              <Button
                title='Save'
                onPress={handleSubmit}
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
    ip: state.profile.ip,
  };
};

export default connect(mapState)(ConnectIp);
