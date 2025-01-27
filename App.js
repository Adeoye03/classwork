import React, {useState} from 'react';

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
      <div className='grid grid-cols-2 gap-4 md: grid-cols-3'>
        {numbers.map((number, index) => (
          <input
            key={index}
            type='number'
            value={number}
            onChange={(e) => handleNumberChange(index, e.target.value)}
            placeholder={'Number ${index + 1}'}
            className='p-2 border rounded'
          />
        ))}
    </div>
    <button
      onClick={handleAddition}
      className='px-4 py-2 bg-red-500 text-black font-medium rounded hover: bg-red-600'
    >
      Add Numbers
    </button>
  </div>
  );
};

export default NumberAdder;

 




