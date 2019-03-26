// Navigation Creation
import { createStackNavigator } from "react-navigation";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeDetail from "../CoffeeDetail";

const coffeeStack = createStackNavigator(
  {
    List: CoffeeList,
    Detail: CoffeeDetail
  },
  {
    initialRouteName: "List",
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

export default coffeeStack;
