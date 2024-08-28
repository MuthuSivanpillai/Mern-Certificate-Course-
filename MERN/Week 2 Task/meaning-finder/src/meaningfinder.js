import React, { useState } from 'react';

function MeaningFinder() {
  const [name, setName] = useState('');

  const handleButtonClick = async () => {
    if (name.trim() !== '') {
      try {
        const response = await fetch(`https://api.agify.io/?name=${name}`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    } else {
      console.log('Please enter a name.');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter a name"
      />
      <button onClick={handleButtonClick}>CLICK</button>
    </div>
  );
}

export default MeaningFinder;
