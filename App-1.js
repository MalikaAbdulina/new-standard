import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {products, ingredientList} from './data'

// export default function App() {

 function containsAny(str, substrings) {
   for (let i = 0; i < substrings.length; i++) {
     let substring = substrings[i];
     if (str.indexOf(substring) != -1) {
       return substring
     }
   }
   return null;
 }

//  function _ingredients(arr) {
//    for (let i = 0; i < arr.length; i++) {
   
//      let obj = arr[i]
//     for (let key in obj) {
//       if (key === 'ingredients') {
//         console.log(obj[key])
//       }
//  }
//  }
// }

  

  return (
    <View style={styles.container}>
      <Text >hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
