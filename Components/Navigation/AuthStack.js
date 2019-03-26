// Navigation Creation
import { createStackNavigator } from "react-navigation";

// Components
import Login from "../Login";
import Profile from "../Screens/Profile";

const authStack = createStackNavigator(
  {
    Login: Login,
    Profile: Profile
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20, 90, 100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    }
  }
);

export default authStack;
