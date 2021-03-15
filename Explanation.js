import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { chemicalGroups } from "./data";

export default function Explanation({ route }) {
  const { harmfulAdditives } = route.params;

  const description = () => {
    for (let i = 0; i < chemicalGroups.length; i++) {
      let obj = chemicalGroups[i];
      if (obj.ingredients.includes(harmfulAdditives)) {
        return obj.chemicals;
      }
    }
    return "No description available";
  };

  const group = () => {
    for (let i = 0; i < chemicalGroups.length; i++) {
      let obj = chemicalGroups[i];
      if (obj.ingredients.includes(harmfulAdditives)) {
        return obj.name;
      }
    }
    return "Not available";
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.columns, {fontSize: 25, marginTop: 20}]}>Details {'\n'}</Text>
      <Text style={[styles.columns, {marginBottom: 10}]}>Name: </Text>
        <Text style={styles.content}>{harmfulAdditives} {"\n"}</Text>
        <Text style={[styles.columns, {marginBottom: 10}]}>Toxic Chemical Group:</Text>
        <Text style={styles.content}> {group()} {"\n"}</Text>
        <Text style={[styles.columns, {marginBottom: 10}]}>Potential risks:</Text> 
        <Text style={[styles.content, {marginLeft: 10, marginRight: 10}]}>{description()}</Text>
      <Text style={{}}>
        {'\n'}
          All information sourced from {'\n'}
          {'\n'}
          <TouchableOpacity onPress={() => Linking.openURL('https://www.safecosmetics.org/')}><Text style={{color: 'blue'}}>Campaign For Safe Cosmetics</Text>
</TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: 'white',
  },
  columns: {
    color: '#2E9298',
    fontWeight: 'bold',
    fontSize: 17,
  },
  content: {
    fontSize: 16,
    color: 'black', 
    fontWeight: 'normal'
  }
});
