import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';

export default function App() {
  const [buttonPressed, 
setButtonPressed] = useState(false);
    const handleButtonPress = () => {
      setButtonPressed(true);
      Alert.alert('Success!', 'You have successfully pressed the button.');
    };

 



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
