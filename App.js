// App.js
import React from 'react';
import './App.css';
import Background from './components/Background';
import Logo from './components/Logo';
import AuthButtons from './components/AuthButtons';

function App() {
  return (
    <div className="App">
      <Background>
        <Logo />
        <AuthButtons />
      </Background>
    </div>
  );
}

export default App;




