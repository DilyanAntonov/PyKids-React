import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import TaskPage from './TaskPage';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {

  return (
      <BrowserRouter>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/example1">
              <TaskPage />
            </Route>
            <Route exact path="/example2">
              <h1>EXAMPLE 2 PAGE</h1>
            </Route>
          </Switch>
        </div>
    </BrowserRouter>
  );
}


export default App;
