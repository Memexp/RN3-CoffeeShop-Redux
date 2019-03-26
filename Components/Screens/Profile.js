import React, { Component } from "react";
import { Content, Text, Thumbnail } from "native-base";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    return (
      <Content>
        <Thumbnail source={{ uri: this.props.image_url }} />
        <Text>{this.props.username}</Text>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  username: state.coffeeReducer.username,
  image_url: state.coffeeReducer.image_url
});
export default connect(mapStateToProps)(Profile);
