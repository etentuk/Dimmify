import {createAppContainer} from "react-navigation";
import ProfileScreen from "../Profile/ProfileScreen";
import {createStackNavigator} from "react-navigation-stack";
import ConnectIp from "../Profile/ConnectIp";
import EditProfileScreen from "../Profile/EditProfileScreen";

const AppNavigator = createStackNavigator({
    ConnectIp,
    ProfileScreen,
    EditProfileScreen,
  },
  {
    initialRouteName: "ConnectIp"
  }
);

export default createAppContainer(AppNavigator);
