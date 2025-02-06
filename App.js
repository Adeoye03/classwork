import React, {useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [color, setColor] = useState('black');

  const colors = [
    'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'teal', 'brown', 'gray'
  ];

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <View style={StyleSheet.container}>
      <TouchableOpacity onPress={changeColor}>
        <Text style={[styles.text, { color: color}]}>
          Click me to change my color!
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});