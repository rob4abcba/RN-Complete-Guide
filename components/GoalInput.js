import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandlerYo = () => {
    props.onAddGoalYo(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visibleYo} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type Item to Add to List"
          style={styles.text1}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancelYo} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandlerYo} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  text1: {
    // width: "80%",
    borderColor: "blue",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  inputContainer: {
    // backgroundColor: "red",
    // width: 100,
    // height: 100,
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});

export default GoalInput;
