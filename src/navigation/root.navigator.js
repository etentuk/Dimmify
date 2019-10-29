import { createAppContainer } from 'react-navigation';
import ProfileScreen from '../screens/profiles/ProfilesScreen';
import { createStackNavigator } from 'react-navigation-stack';
import ConnectIpScreen from '../screens/connectIp/connectIp.screen';
import EditProfileScreen from '../Profile/EditProfileScreen';

const AppNavigator = createStackNavigator(
  {
    ConnectIpScreen: {
      screen: ConnectIpScreen,
      navigationOptions: {
        title: 'Save IP',
      },
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profiles',
      },
    },
    EditProfileScreen,
  },
  {
    initialRouteName: 'ProfileScreen',
  },
);

export default createAppContainer(AppNavigator);
