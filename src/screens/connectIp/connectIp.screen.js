import React from 'react';
import { store } from '../../redux/store';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import TextInput from '../../components/TextInput';
import Screen from '../../components/screen/screen';
import { StyleSheet } from 'react-native';

const { dispatch } = store;

const ConnectIpScreen = ({ ip, navigation }) => {
  React.useEffect(() => {
    dispatch.profile.getProfiles();
    dispatch.profile.getIp();
  });

  const handleIp = ipAddress => {
    dispatch.profile.saveIp(ipAddress);
    navigation.navigate('ProfileScreen');
  };

  return (
    <Formik initialValues={ip} onSubmit={handleIp} enableReinitialize>
      {({ handleSubmit, handleChange, values }) => (
        <Screen
          buttonText="SAVE"
          onPressBottomButton={handleSubmit}
          centerText="Connect IP"
          dontShow
          scrollViewStyle={styles.container}>
          <TextInput
            name="IP ADDRESS"
            placeholder="Enter your IP address"
            onChangeText={handleChange('ip')}
            value={values.ip}
          />
        </Screen>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapState = state => ({
  ip: state.profile.ip,
});

export default connect(mapState)(ConnectIpScreen);
