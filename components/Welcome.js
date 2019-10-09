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
  Right
} from "native-base";

class Welcome extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <View>
                <H1>Welcome {this.props.user.username}!</H1>
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
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("CreateScreen")}
          >
            <Text>Create a Channel</Text>
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
