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
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitleYo => {
    // console.log(enteredGoal);
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { idYo: Math.random().toString(), value: goalTitleYo }
    ]);
    console.log(courseGoals);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.idYo !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={ () => setIsAddMode(true) } />
      <GoalInput visibleYo={ isAddMode } onAddGoalYo={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.idYo}
        data={courseGoals} //MC: courseGoals = Array of objects(key: value pair)
        // MC: itemData = object with key = each object in array of objects courseGoals
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.idYo}
            onDeleteProp={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
    // flexDirection: "row"
  }
});
