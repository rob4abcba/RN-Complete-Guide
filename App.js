import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";
import { getOrientationAsync } from "expo/build/ScreenOrientation/ScreenOrientation";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // console.log(enteredGoal);
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { idYo: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput enteredGoal={enteredGoal} goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.idYo}
        data={courseGoals} //MC: courseGoals = Array of objects(key: value pair)
        // MC: itemData = object with key = each object in array of objects courseGoals
        renderItem={itemData => (
          <GoalItem title={itemData.item.value} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
    // flexDirection: "row"
  },
  inputContainer: {
    // backgroundColor: "red",
    // width: 100,
    height: 100,
    // flexDirection: 'row',
    justifyContent: "center",
    alignItems: "stretch"
  },
  view2: {
    backgroundColor: "orange",
    flex: 2,
    // width: 100,
    // height: 100,
    // flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  text1: {
    // width: "80%",
    borderColor: "blue",
    borderWidth: 1,
    padding: 10
  },
  text2: {
    width: "80%",
    borderColor: "blue",
    borderWidth: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  listItem: {
    padding: 10,
    margin: 5,
    backgroundColor: "#ccc",
    borderColor: "green",
    borderWidth: 2
  }
});
