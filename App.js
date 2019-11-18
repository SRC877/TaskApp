import * as React from "react";
import { Button, View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchBox from "./Components/SearchBox";
import DetailsScreen from "./Screens/DetailsScreen";

class HomeScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  getEmail = text => {
    this.setState({
      email: text
    });
  };

  getPwd = text => {
    this.setState({
      password: text
    });
  };

  _onRefresh = () => {
    this.setState({ email: "", password: "" });
  };

  onPressHandler = () => {
    if (this.state.email && this.state.password) {
      this.props.navigation.navigate("Details", {
        refreshLogin: this._onRefresh
      });
    } else {
      alert("Enter email id and password");
    }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Login Screen</Text>
        <SearchBox
          value={this.state.email}
          onChangeText={text => this.getEmail(text)}
        />
        <SearchBox
          value={this.state.password}
          onChangeText={text => this.getPwd(text)}
        />
        <Button title="Login" onPress={this.onPressHandler} />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
});

export default createAppContainer(RootStack);
