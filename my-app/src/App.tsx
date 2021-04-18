import React, { useState } from 'react';
import CountComp from './components/CountComp'

function App() {

  const [num, setNum] = useState(10)

  return (
    <div className="App">
      <CountComp num={num} onChange={setNum}/>
    </div>
  );
}

export default App;
