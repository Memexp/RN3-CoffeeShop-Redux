// Navigation Creation
import { createStackNavigator } from "react-navigation";

// Components
import CoffeeCart from "../CoffeeCart";
import History from "../Screens/History";

const authStack = createStackNavigator(
  {
    Cart: CoffeeCart,
    History: History
  },
  {
    initialRouteName: "Cart",
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
