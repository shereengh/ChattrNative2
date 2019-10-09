import { createStackNavigator } from "react-navigation-stack";

import Login from "../components/LoginForm";
import Channels from "../components/Channels";
import Welcome from "../components/Welcome";
import Create from "../components/Create";
const StackNav = createStackNavigator(
  {
    LoginScreen: Login,
    WelcomeScreen: Welcome,
    ChannelsScreen: Channels,
    CreateScreen: Create
  },
  {
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "pink",
        fontWeight: "bold"
      }
    }
  }
);

export default StackNav;
