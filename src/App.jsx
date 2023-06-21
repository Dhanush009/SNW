import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Index from './ComponentA/index';

function App() {
  const name = "Dhanush";
  const [showComponent, setShowComponent] = useState(false);
  return (
    <div className="App">
      <h1>Introduction to React</h1>
      <button onClick={() => setShowComponent(!showComponent) }>
        {showComponent ? 'Hide Component' : 'Show Component'}
      </button>
      {showComponent ? <Index name={name}/> : null }
    </div>
  );
}

export default App;
