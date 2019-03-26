import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components
import AppContainer from "../Navigation";

// Actions
import { getCoffeeShops } from "../../store/actions/coffeeActions";

class HomePage extends Component {
  componentDidMount() {
    this.props.getCoffeeShops();
  }
  static navigationOptions = {
    title: null
  };
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <AppContainer />
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getCoffeeShops: () => dispatch(getCoffeeShops())
});

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
