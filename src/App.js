import React, { useState } from 'react';
import WordCounter from './components/WordCounter';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <WordCounter />
    </div>
  );
};

export default App;

