import { useState } from 'react';
import './App.scss';

function App() {
  let [ count, setCount ] = useState (5)
  return (
    <div className='card'>
      <div className='buttons'>
        <button onClick={() => {setCount(++count)}}>INC</button>
        <button onClick={() => setCount(--count)}>DEG</button>
        <button onClick={() => setCount(0)}>RND</button>
        <button onClick={() => setCount(Math.floor(Math.random() * (25 -(-25)+1)) +(-25))}>RST</button>
      </div>

      <div className='counter'>{count}</div>
    </div>
  );
}

export default App;
