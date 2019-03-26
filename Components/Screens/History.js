import React, { Component } from "react";
import { Content, List, Text, ListItem } from "native-base";
import { connect } from "react-redux";

class History extends Component {
  render() {
    return (
      <Content>
        <List>
          <ListItem>
            <Text> {this.props.orderHistory.order1}</Text>
          </ListItem>
          <ListItem>
            <Text>{this.props.orderHistory.order2}</Text>
          </ListItem>
          <ListItem>
            <Text>{this.props.orderHistory.order3}</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}
const mapStateToProps = state => ({
  orderHistory: state.cartReducer.orderHistory
});
export default connect(mapStateToProps)(History);
