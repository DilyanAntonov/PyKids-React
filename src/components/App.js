import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import TaskSearch from './TaskSearch'
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
              <TaskPage 
                taskTitle={"Example Title"}
                tastText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum a ante at iaculis. Nullam vitae est mollis, tincidunt mauris sit amet, tristique tortor. Sed lectus odio, convallis nec risus ac, eleifend consequat nibh. Nullam efficitur varius dui, ac congue massa commodo non. Sed vulputate est nec lectus efficitur, nec pellentesque arcu luctus. Sed a sapien vel nisi imperdiet maximus. Suspendisse eget accumsan dolor. "}
                taskHintText={"Pellentesque porttitor dapibus nulla ac sollicitudin. Aliquam eros orci, viverra nec porttitor in, rutrum ut quam. Curabitur efficitur urna ut dolor tempor feugiat. Nullam aliquet tortor vel purus finibus sollicitudin. Suspendisse potenti."}
                tastEditorTitle={"Example editor title "}
              />
            </Route>
            <Route exact path="/example2">
              <TaskSearch />
            </Route>
          </Switch>
        </div>
    </BrowserRouter>
  );
}


export default App;
