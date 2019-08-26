import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: "row"
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 100,
          // flexDirection: 'row',
          justifyContent: "center",
          alignItems: "stretch"
        }}
      >
        <TextInput
          placeholder="Course 1 Goal"
          style={{ 
            // width: "80%", 
            borderColor: "blue", 
            borderWidth: 1 
          }}
        />
        <Button title="Add1" />
      </View>
      <View
        style={{
          backgroundColor: "orange",
          flex: 2,
          // width: 100,
          // height: 100,
          // flexDirection: 'row',
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
                <TextInput
          placeholder="Course 2 Goal"
          style={{ width: "80%", borderColor: "blue", borderWidth: 1 }}
        />
        <Button title="Add2" />
      </View>
      <View
        style={{
          backgroundColor: "yellow",
          flex: 1,
          // flexDirection: 'row',
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
                <TextInput
          placeholder="Course 3 Goal"
          style={{ width: "80%", borderColor: "blue", borderWidth: 1 }}
        />
        <Button title="Add3" />
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
