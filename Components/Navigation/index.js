// Navigation Creation
import { createStackNavigator, createAppContainer } from "react-navigation";

// Components
import Login from "../Login";
import CoffeeList from "../CoffeeList";
import CoffeeDetail from "../CoffeeDetail";
import CoffeeCart from "../CoffeeCart";

const myStack = createStackNavigator(
  {
    Login: Login,
    List: CoffeeList,
    Detail: CoffeeDetail,
    Cart: CoffeeCart
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

const AppContainer = createAppContainer(myStack);

export default AppContainer;
