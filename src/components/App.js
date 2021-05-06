import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Editor from './Editor';
import { Button } from './Button';
import useLocalStorage from '../hooks/useLocalStorage'

function App() {

  const [python, setPython] = useLocalStorage('python', '')

  return (
    <>
      <div>
        <Navbar />
        <div className="left-side pane">
        <div className="main-text-block">
          <h1 className="main-text">Learn Coding</h1>
          <h3 className="secondary-text">The fun way</h3>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
            SIGN UP
          </Button>

        </div>
      </div>
      <div className="right-side">
        <div className="pane">
          <Editor 
            language="python" 
            displayName="Let's make a 🍔" 
            value={python} 
            onChange={setPython} 
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
