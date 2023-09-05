import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import FnCounter from './components/FnCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
      <section>
          {/* <Hello message="Hello React"/>
          <Hello message="Welcome React"/>
          <Counter initValue={10}/> */}
          <Counter initValue={15}/>

          <FnCounter initValue={5}/>
          <FnCounter />
 
      </section>
    </div>
  );
}

export default App;
