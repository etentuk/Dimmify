import {createAppContainer} from "react-navigation";
import HomeScreen from "../HomeScreen";
import {createStackNavigator} from "react-navigation-stack";

const AppNavigator = createStackNavigator({
    HomeScreen,
  },
  {
    initialRouteName: "HomeScreen"
  }
);

export default createAppContainer(AppNavigator);
