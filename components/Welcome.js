import React from "react";
import { StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  View,
  H1
} from "native-base";
import { connect } from "react-redux";
class Welcome extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <View>
                <H1>Welcome {this.props.user.username}!</H1>
                {console.log("user", this.props.user.username)}
              </View>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("ChannelsScreen")}
          >
            <Text>List of Channels</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  user: state.rootAuth.user
});
export default connect(mapStateToProps)(Welcome);
