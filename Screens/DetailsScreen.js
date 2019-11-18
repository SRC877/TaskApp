import React, { Component } from "react";
import { Button, View, Text, StyleSheet, FlatList } from "react-native";
const data = require("../Data/user.json");

export default class DetailsScreen extends Component {
  constructor() {
    super();
  }
  _onPress = () => {
    this.props.navigation.goBack();
    this.props.navigation.state.params.refreshLogin();
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <View style={styles.appView}>
          <Text>City:{data.city}</Text>
          <Text>Region:{data.region}</Text>
          <Text>Country:{data.country_name}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Button title="Go back" onPress={this._onPress} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appView: {
    width: 300,
    borderRadius: 15,
    borderWidth: 1,
    marginTop: 30,
    padding: 20,
    backgroundColor: "dodgerblue",
    borderColor: "grey"
  }
});
