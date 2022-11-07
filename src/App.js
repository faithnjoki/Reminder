
import './App.css';
import List from './List';
import Data from './Data'
import React, {useState} from 'react';

function App() {
  const [people,setPeople] = useState[Data]
  return (
    <div className="App">
    <h3>List of birthdays</h3>
    {/* <List/> */}
    <button onclick={() =>console.log('ypu have been clicked')}>Clear all</button>
    </div>
  );
}

export default App;
