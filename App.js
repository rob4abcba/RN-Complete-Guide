import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from "react-native";
import { getOrientationAsync } from "expo/build/ScreenOrientation/ScreenOrientation";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // console.log(enteredGoal);
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal] );
  };

  return (
    <View
      style={styles.screen}
    >
      <View
        style={styles.view1}
      >
        <TextInput
          placeholder="Course 1 Goal"
          style={styles.text1}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add1" onPress={addGoalHandler} />
      </View>
      <ScrollView style>
        {courseGoals.map( (goal) => (
        <View key={goal} style={styles.listItem}>
          <Text > {goal} </Text>
          </View>
        ))}
      </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    // flexDirection: "row"
  },
  view1: {
    backgroundColor: "red",
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
    width: "80%", 
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    padding: 10,
    margin: 5,
    backgroundColor: '#ccc',
    borderColor: 'green',
    borderWidth: 2
  }
});
