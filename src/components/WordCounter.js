import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Word Counter</h2>
      <textarea
        style={{ width: '300px', height: '150px', marginBottom: '20px' }}
        value={text}
        onChange={handleTextChange}
        placeholder="Type your text here..."
      />
      <div>
        <strong>Word count: </strong> {countWords(text)}
      </div>
    </div>
  );
};

export default WordCounter;
