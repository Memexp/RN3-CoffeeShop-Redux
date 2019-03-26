import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";

// Navigation
import { withNavigation } from "react-navigation";

class CoffeeCart extends Component {
  render() {
    let items = this.props.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {cartItems}
        <Button
          full
          danger
          onPress={() => this.props.navigation.navigate("History")}
        >
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

export default connect(mapStateToProps)(CoffeeCart);
