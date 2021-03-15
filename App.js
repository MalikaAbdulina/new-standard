import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BarCode from "./BarCode"
import ProductInfo from "./ProductInfo"
import Explanation from "./Explanation"

function HomeScreen({ navigation }) {
  
  return (
    <View style={styles.container}>
          <ImageBackground style={styles.image} source={{uri: 'https://images.unsplash.com/photo-1596612265825-f7d7506ae4ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1868&q=80'}}>
      <Text style={{fontSize: 30, color: 'white'}}>The New Standard</Text>
      <View style={styles.buttonContainer}>
      <Button
        title="Start Scanning"
        onPress={() => navigation.navigate('Scan')}
        color='white'
      />
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-evenly",
    alignItems: 'center'
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
     
});




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scan" component={BarCode} />
        <Stack.Screen name='Info' component={ProductInfo} />
        <Stack.Screen name='Explanation' component={Explanation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;