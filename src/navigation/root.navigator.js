import {createAppContainer} from "react-navigation";
import ProfileScreen from "../Profile/ProfileScreen";
import {createStackNavigator} from "react-navigation-stack";
import ConnectUrl from "../Profile/ConnectIp";
import EditProfileScreen from "../Profile/EditProfileScreen";

const AppNavigator = createStackNavigator({
    ConnectUrl,
    ProfileScreen,
    EditProfileScreen,
  },
  {
    initialRouteName: "ConnectUrl"
  }
);

export default createAppContainer(AppNavigator);
