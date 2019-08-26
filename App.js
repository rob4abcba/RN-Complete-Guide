import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
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
        />
        <Button title="Add1" />
      </View>
      <View
        style={styles.view2}
      >
                <TextInput
          placeholder="Course 2 Goal"
          style={styles.text2}
        />
        <Button title="Add2" />
      </View>
      <View
        style={styles.view3}
      >
                <TextInput
          placeholder="Course 3 Goal"
          style={styles.text3}
        />
        <Button title="Add3" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flexDirection: "row"
  },
  view1: {
    backgroundColor: "red",
    width: 100,
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
  view3: {
    backgroundColor: "yellow",
    flex: 1,
    // flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  text1: { 
    // width: "80%", 
    borderColor: "blue", 
    borderWidth: 1 
  },
  text2: { 
    width: "80%", 
    borderColor: "blue", 
    borderWidth: 1 
  },
  text3: { 
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
});
