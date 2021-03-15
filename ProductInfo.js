import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native';
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

export default function DecodeScreen({route, navigation}){
  const { data } = route.params;
  const responseObj = products.filter(product => data === (product['UPC']))
  const harmfulAdditives = containsAny(responseObj[0].ingredients, ingredientList)
  const url = responseObj[0].imageURL;

  const renderElement = () => {
    if (harmfulAdditives === 'No harmful ingredients found!') {
      return <Text style={{color: 'green', fontSize: 16}}>{harmfulAdditives}</Text>
    } else {
      return <Text style={styles.container}><Text style={{color: 'blue', textDecorationLine: 'underline', fontSize:16}} onPress={() => navigation.navigate('Explanation',  {harmfulAdditives: harmfulAdditives})}> - {harmfulAdditives} {'\n'}</Text>
      <Text style={styles.red}>
        {'\n'}
      Best to avoid
    </Text>
    </Text>
    }
  }
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{width: 100, height: 100, uri: url}} />
      <Text style={styles.blue}>
      Product Info
      {'\n'}
      </Text>
      <Text style={[styles.columns, {marginBottom: 10}]}>
      Name: 
      </Text>
      <Text style={[styles.content, {marginLeft: 10, marginRight: 10}]}>{responseObj[0].name}
      {'\n'}
      </Text> 
      <Text style={[styles.columns, {marginBottom: 10}]}>Ingredients:</Text> 
      <Text style={[styles.content, {marginLeft: 10, marginRight: 10}]}>{responseObj[0].ingredients} {'\n'}</Text>
      <Text style={[styles.columns, {marginBottom: 10}]} >
      Harmful additives: 
      </Text>
      {renderElement()}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'flex-start', 
    backgroundColor: 'white', 
  },
  blue: {
    color: '#2E9298',
    fontWeight: 'bold',
    fontSize: 25,
  },
  red: {
    color: '#cc0066',
    fontSize: 18,
    flex: 3
  },
  columns: {
    color: '#2E9298',
    fontWeight: 'bold',
    fontSize: 17,
  },
  image: {
    marginTop: 20,
    marginBottom: 10
  },
  content: {
    fontSize: 16
  }
  
});
