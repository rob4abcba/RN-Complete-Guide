import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={ {padding: 30} }>
      <View style={ {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <TextInput placeholder="Course Goal" style={ {width: '80%', borderColor: "blue", borderWidth: 1} }/>
      <Button title="Add" />
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
