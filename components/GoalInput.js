import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const GoalInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Type Item to Add to List"
        style={styles.text1}
        onChangeText={props.goalInputHandler}
        value={props.enteredGoal}
      />
      <Button title="Add" onPress={props.addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
    text1: {
        // width: "80%",
        borderColor: "blue",
        borderWidth: 1,
        padding: 10
      },
  inputContainer: {
    // backgroundColor: "red",
    // width: 100,
    height: 100,
    // flexDirection: 'row',
    justifyContent: "center",
    alignItems: "stretch"
  }
});

export default GoalInput;
