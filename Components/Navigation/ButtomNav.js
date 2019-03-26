import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Icon } from "native-base";

import AuthStack from "./AuthStack";
import CoffeeStack from "./CoffeeStack";
import OrdersStack from "./OrdersStack";

const BottomTab = createBottomTabNavigator(
  {
    Auth: AuthStack,
    Coffee: CoffeeStack,
    Orders: OrdersStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        let iconType = "";
        if (routeName === "Auth") {
          iconName = "person-booth";
          iconType = "FontAwesome5";
        } else if (routeName === "Coffee") {
          iconName = "coffee-to-go";
          iconType = "MaterialCommunityIcons";
        } else if (routeName === "Orders") {
          iconName = "shoppingcart";
          iconType = "AntDesign";
        }
        return (
          <Icon
            name={iconName}
            type={iconType}
            style={{ color: tintColor, fontSize: 25 }}
          />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "purple"
    }
  }
);
export default BottomTab;
