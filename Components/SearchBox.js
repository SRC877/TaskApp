import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {},
  input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 20,
    height: 40,
    width: 100,
    padding: 10,
    marginBottom: 10,
    marginTop: 10
  },
  container: {}
});

export default class SearchBox extends Component {
  constructor() {
    super();
  }

  render() {
    let { ...args } = this.props;
    return (
      <View stlye={styles.container}>
        <TextInput {...args} style={styles.input} />
      </View>
    );
  }
}
