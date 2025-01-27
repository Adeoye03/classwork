import * as React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
  const [num1, setNum1] = React.useState('');
  const [num2, setNum2] = React.useState('');
  const [num3, setNum3] = React.useState('');
  const [num4, setNum4] = React.useState('');
  const [num5, setNum5] = React.useState('');
  const [num6, setNum6] = React.useState('');

  const handleAdd = () => {
    const sum =
      parseInt(num1) +
      parseInt(num2) +
      parseInt(num3) +
      parseInt(num4) +
      parseInt(num5) +
      parseInt(num6);
    Alert.alert('Result', `The sum of the numbers is: ${sum}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add 6 Numbers</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number 1"
        keyboardType="numeric"
        onChangeText={(text) => setNum1(text)}
        value={num1}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number 2"
        keyboardType="numeric"
        onChangeText={(text) => setNum2(text)}
        value={num2}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number 3"
        keyboardType="numeric"
        onChangeText={(text) => setNum3(text)}
        value={num3}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number 4"
        keyboardType="numeric"
        onChangeText={(text) => setNum4(text)}
        value={num4}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number 5"
        keyboardType="numeric"
        onChangeText={(text) => setNum5(text)}
        value={num5}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number 6"
        keyboardType="numeric"
        onChangeText={(text) => setNum6(text)}
        value={num6}
      />
      <Button
        title="Add"
        onPress={handleAdd}
        color="red"
      />
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
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    color: 'black', 
  },
});