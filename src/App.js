import React from 'react';
import Home from './pages/home';
import CardDetailes from './pages/cardDetailes';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/card' component={CardDetailes}/>
              <Route path='/card/:id' component={CardDetailes}/>
          </Switch>      
    </div>
  );
}
export default App;
