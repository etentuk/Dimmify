import { createAppContainer } from 'react-navigation';
import ProfileScreen from '../screens/profiles/profiles.screen';
import { createStackNavigator } from 'react-navigation-stack';
import ConnectIpScreen from '../screens/connectIp/connectIp.screen';
import EditProfileScreen from '../screens/editProfile/editProfile.screen';

const AppNavigator = createStackNavigator(
  {
    ConnectIpScreen,
    ProfileScreen,
    EditProfileScreen,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(AppNavigator);
