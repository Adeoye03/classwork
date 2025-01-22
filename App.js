import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';

const NumberAdder = () => {
  const [numbers, setNumbers] = useState(Array(6).fill(''));

  const handleNumberChange = (index, value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  };

  const handleAddition = () => {
    const sum = numbers.reduce((acc, curr) => acc + (Number(curr) || 0), 0);
    alert('The sum is: ${sum}');
  };

  return (
    <div className='p-6 space-y-4'>
      
    </div>
  )
}

 



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
