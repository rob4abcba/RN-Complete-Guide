import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDeleteProp.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text> {props.title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 5,
    backgroundColor: "#ccc",
    borderColor: "green",
    borderWidth: 2
  }
});

export default GoalItem;
