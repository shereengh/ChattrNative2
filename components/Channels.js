import React, { Component } from "react";
import { View, Text } from "native-base";
import { connect } from "react-redux";

class Channels extends Component {
  render() {
    const channelLink = this.props.channels.map(channel => (
      <Text>{channel.name}</Text>
    ));
    return <View>{channelLink}</View>;
  }
}
const mapStateToProps = state => ({
  user: state.user,
  channels: state.channels.channels
});

export default connect(mapStateToProps)(Channels);
