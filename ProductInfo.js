import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import {products, ingredientList} from './data'

function containsAny(str, substrings) {
  for (let i = 0; i < substrings.length; i++) {
    let substring = substrings[i];
    if (str.indexOf(substring) != -1) {
      return substring
    }
  }
  return 'No harmful ingredients found!';
}

export default function DecodeScreen({route}){
  const { data } = route.params;
  const responseObj = products.filter(product => data === (product['UPC']))
  
  return (
    <View style={styles.container}>
      <Text style={styles.white}>Info</Text>
      <Text style={[styles.white, {fontSize: 25}]}>
      Product: 
      </Text>
      <Text>
      Name: {responseObj[0].name} {"\n"}
      Ingredients: {responseObj[0].ingredients} {"\n"}
      Harmful additives: {containsAny(responseObj[0].ingredients, ingredientList)}
    </Text>
    <Text style={styles.red}>
      Best to avoid
    </Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'flex-start', 
    backgroundColor: '#c8a2c8'  
  },
  white: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 37,
  },
  red: {
    color: '#cc0066',
    fontSize: 25
  },
});
